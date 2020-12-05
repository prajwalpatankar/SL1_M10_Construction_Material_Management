const { check, validationResult } = require('express-validator');
const controller = {};

controller.home = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('UPDATE LOGIN_DETAILS SET ISACTIVE = "N" WHERE ISACTIVE="Y"', (err) => {
      if (err) {
        res.json(err);
      }
      res.render('home', {
      });
    });
  });
}

controller.login = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM LOGIN_DETAILS', (err, users) => {
      if (err) {
        res.json(err);
      }
      res.render('login', {
        data: users
      });
    });
  });
};

controller.loginerr = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM LOGIN_DETAILS', (err, users) => {
      if (err) {
        res.json(err);
      }
      res.render('loginerr', {
        data: users
      });
    });
  });
};

controller.loginnew = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('SELECT * FROM LOGIN_DETAILS WHERE USERNAME = ? && PASSWORD = ?', [data.USERNAME, data.PASSWORD], (err, users) => {
      const query = connection.query('UPDATE LOGIN_DETAILS SET ISACTIVE="Y" WHERE USERNAME = ? && PASSWORD = ?', [data.USERNAME, data.PASSWORD], (err) => {
        console.log(users)
        if (users.length == 0) {
          res.redirect('/signuperr');
        }
        else {
          res.redirect('/client');
        }
      });
    })
  })
};



// controller.loginsave = (req, res) => {
//   req.getConnection((err, conn) => {
//     conn.query('SELECT * FROM LOGIN_DETAILS WHERE USERNAME = ?', (err, users) => {
//      if (err) {
//       res.json(err);
//      }
//      res.redirect('/login');
//     });
//   });
// };


controller.signup = (req, res) => {
  res.render('signup')
}
controller.signuperr = (req, res) => {
  res.render('signuperr')
}

controller.signupsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO LOGIN_DETAILS SET ?', data, (err, user) => {
      console.log(user)
      res.redirect('/login');
    })
  })
};


// CLIENTS !
controller.clientlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM CLIENT', (err, clients) => {
      if (err) {
        res.json(err);
      }
      conn.query('SELECT * FROM LOGIN_DETAILS WHERE ISACTIVE="Y"', (err, users) => {
        if (err) {
          res.json(err);
        }
        if (users.length == 0) {
          res.redirect('/loginerr');
        }
        else {
          res.render('clients', {
            data: clients
          });
        }
      });
    });
  });
};

controller.clientsave = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO CLIENT SET ?', data, (err, client) => {
      console.log(client)
      res.redirect('/client');
    })
  })
};

controller.clientedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM CLIENT WHERE CLIENT_ID = ?", [id], (err, rows) => {
      res.render('clients_edit', {
        data: rows[0]
      })
    });
  });
};

controller.clientupdate = (req, res) => {
  const { id } = req.params;
  const newClient = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE CLIENT SET ? WHERE CLIENT_ID = ?', [newClient, id], (err, rows) => {
      res.redirect('/client');
    });
  });
};

controller.clientdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM CLIENT WHERE CLIENT_ID = ?', [id], (err, rows) => {
      res.redirect('/client');
    });
  });
}



//CONTACTS
controller.contactlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM CONTACT_DETAILS', (err, contacts) => {
      if (err) {
        res.json(err);
      }
      conn.query('SELECT * FROM CLIENT', (err, clients) => {
        if (err) {
          res.json(err);
        }
        conn.query('SELECT * FROM LOGIN_DETAILS WHERE ISACTIVE="Y"', (err, users) => {
          if (err) {
            res.json(err);
          }
          if (users.length == 0) {
            res.redirect('/loginerr');
          }
          else {
            res.render('contact', {
              data: contacts,
              data_client: clients
            });
          }
        });
      });
    });
  });
};

controller.contactsave = (req, res) => {
  const data = req.body;
  console.log(req.body);
  var phoneno = /^\d{10}$/;
  var emailvalid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (data.PHONE_NO.length == 10 && data.PHONE_NO.match(phoneno) && data.EMAIL.match(emailvalid)) {
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO CONTACT_DETAILS SET ?', data, (err, contact) => {
        console.log(contact)
        res.redirect('/contact');
      })
    })
  }
  else {
    res.redirect('/error_contact');  // ------------------------CHANGE THIS !!!!!!!!!
  }

};


controller.errorContact = (req, res) => {
  res.render('error_contact');
}




controller.contactedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM CONTACT_DETAILS WHERE CONTACT_ID = ?", [id], (err, rows) => {
      conn.query('SELECT * FROM CLIENT WHERE CLIENT_ID = ?', [id], (err, clients) => {
        res.render('contact_edit', {
          data: rows[0],
          data_client: clients
        })
      })
    });
  });

};

controller.contactupdate = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const newContact = req.body;
  console.log(req.body)
  req.getConnection((err, conn) => {
    conn.query('UPDATE CONTACT_DETAILS SET ? WHERE CONTACT_ID', [newContact, id], (err, rows) => {
      res.redirect('/contact')
    });
  });
};

controller.contactdelete = (req, res) => {
  const id = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM CONTACT_DETAILS WHERE CLIENT_ID = ? && PHONE_NO = ?', [id.id, id.ph], (err, rows) => {
      res.redirect('/contact');
    });
  });
}


//MATERIAL !
controller.materiallist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM MATERIAL', (err, clients) => {
      if (err) {
        res.json(err);
      }
      conn.query('SELECT * FROM LOGIN_DETAILS WHERE ISACTIVE="Y"', (err, users) => {
        if (err) {
          res.json(err);
        }
        if (users.length == 0) {
          res.redirect('/loginerr');
        }
        else {
          res.render('material', {
            data: clients
          });
        }
      });
    });
  });
};

controller.materialsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO MATERIAL SET ?', data, (err, client) => {
      console.log(client)
      res.redirect('/material');
    })
  })
};

controller.materialedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM MATERIAL WHERE MATERIAL_ID = ?", [id], (err, rows) => {
      res.render('material_edit', {
        data: rows[0]
      })
    });
  });
};

controller.materialupdate = (req, res) => {
  const { id } = req.params;
  const newMaterial = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE MATERIAL SET ? WHERE MATERIAL_ID = ?', [newMaterial, id], (err, rows) => {
      res.redirect('/material');
    });
  });
};

// controller.materialdelete = (req, res) => {
//   const { id } = req.params;
//   console.log(id)
//   req.getConnection((err, connection) => {
//     connection.query('DELETE FROM MATERIAL WHERE MATERIAL_ID = ?', [id], (err, rows) => {
//       res.redirect('/material');
//     });
//   });
// }




//STOCKS
controller.stocklist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM STOCK', (err, stocks) => {
      if (err) {
        res.json(err);
      }
      conn.query('SELECT * FROM MATERIAL', (err, materials) => {
        if (err) {
          res.json(err);
          console.log(err);
        }

        conn.query('SELECT * FROM LOGIN_DETAILS WHERE ISACTIVE="Y"', (err, users) => {
          if (err) {
            res.json(err);
          }
          if (users.length == 0) {
            res.redirect('/loginerr');
          }
          else {
            res.render('stock', {
              data: stocks,
              data_material: materials
            });
          }
        });
      });
    });
  });
};

controller.stocksave = (req, res) => {
  const data = req.body;
  console.log(req.body);
  if (data.STOCK > 0) {
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO STOCK SET ?', data, (err, stock) => {
        console.log(stock)
        res.redirect('/stock');
      })
    })
  }
  else {
    res.redirect('/error_stock');  // ------------------------CHANGE THIS !!!!!!!!!
  }

};



controller.errorStock = (req, res) => {
  res.render('error_stock');
}



controller.stockedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM STOCK WHERE MATERIAL_ID = ?", [id], (err, rows) => {
      conn.query('SELECT * FROM MATERIAL', (err, materials) => {
        if (err) {
          res.json(err);
          console.log(err);
        }
        res.render('stock_edit', {
          data: rows[0],
          data_material: materials[0]
        })
      });
    });
  });
};

controller.stockupdate = (req, res) => {
  const { id } = req.params;
  const newStock = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE STOCK SET ? WHERE MATERIAL_ID = ?', [newStock, id], (err, rows) => {
      res.redirect('/stock')
    });
  });
};

controller.stockdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM STOCK WHERE MATERIAL_ID = ?', [id], (err, rows) => {
      res.redirect('/stock');
    });
  });
}



// controller.requirementlist = (req, res) => {
//   req.getConnection((err, conn) => {
//     conn.query('SELECT * FROM REQUIREMENT', (err, requirements) => {
//      if (err) {
//       res.json(err);
//       console.log(err);
//      }
//      res.render('requirement', {
//         data: requirements
//      });
//     });
//   });
// };

// ORDERS !!
controller.requirementlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM REQUIREMENT', (err, requirements) => {
      if (err) {
        res.json(err);
        console.log(err);
      }
      conn.query('SELECT * FROM CLIENT', (err, clients) => {
        if (err) {
          res.json(err);
          console.log(err);
        }
        conn.query('SELECT * FROM MATERIAL', (err, materials) => {
          if (err) {
            res.json(err);
            console.log(err);
          }

          conn.query('SELECT * FROM LOGIN_DETAILS WHERE ISACTIVE="Y"', (err, users) => {
            if (err) {
              res.json(err);
            }
            if (users.length == 0) {
              res.redirect('/loginerr');
            }
            else {
              res.render('requirement', {
                data: requirements,
                data_client: clients,
                data_material: materials
              });
            }
          });
        });
      });
    });
  });
};


controller.requirementsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO TEMP_REQ SET ?', data, (err, requirement) => {
      console.log(requirement)
      res.redirect('/requirement');
    })
  })
};

// controller.requirementedit = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, conn) => {
//     conn.query("SELECT * FROM REQUIREMENT WHERE ORDER_NO = ?", [id], (err, rows) => {
//       res.render('requirement_edit', {
//         data: rows[0]
//       })
//     });
//   });
// };

// controller.requirementupdate = (req, res) => {
//   const { id } = req.params;
//   const newRequirement = req.body;
//   req.getConnection((err, conn) => {

//   conn.query('UPDATE TEMP_REQ SET ? WHERE ORDER_NO = ?', [newRequirement, id], (err, rows) => {
//     res.redirect('/requirement');
//   });
//   });
// };

controller.requirementdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM REQUIREMENT WHERE ORDER_NO = ?', [id], (err, rows) => {
      res.redirect('/requirement');
    });
  });
}



//BILLS

controller.clientbill = (req, res) => {
  const { id } = req.params;
  console.log(id);
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM REQUIREMENT WHERE CLIENT_ID = ?", [id], (err, orderdet) => {
      conn.query("SELECT * FROM CLIENT WHERE CLIENT_ID = ?", [id], (err, clientdet) => {
        conn.query("SELECT * FROM CONTACT_DETAILS WHERE CLIENT_ID = ?", [id], (err, contactdet) => {
          conn.query("SELECT * FROM MATERIAL WHERE MATERIAL_ID = (SELECT MATERIAL_ID FROM REQUIREMENT WHERE CLIENT_ID = ? )", [id], (err, materialdet) => {
            console.log(orderdet);
            console.log(clientdet);
            console.log(contactdet);
            console.log(materialdet);
            res.render('bill_client', {
              order_det: orderdet[0],
              client_det: clientdet[0],
              contact_det: contactdet[0],
              material_det: materialdet[0]
            });
          });
        });
      });
    });
  });
};

controller.generateBill = (req, res) => {
  const id = req.params;
  console.log(id);
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM REQUIREMENT WHERE ORDER_NO = ?", [id.ord], (err, orderdet) => {
      conn.query("SELECT * FROM CLIENT WHERE CLIENT_ID = ?", [id.cli], (err, clientdet) => {
        conn.query("SELECT * FROM CONTACT_DETAILS WHERE CLIENT_ID = ?", [id.cli], (err, contactdet) => {
          conn.query("SELECT * FROM MATERIAL WHERE MATERIAL_ID = ?", [id.mat], (err, materialdet) => {
            console.log(orderdet);
            console.log(clientdet);
            console.log(contactdet);
            console.log(materialdet);
            res.render('bill', {
              order_det: orderdet[0],
              client_det: clientdet[0],
              contact_det: contactdet[0],
              material_det: materialdet[0]
            });
          });
        });
      });
    });
  });
};




module.exports = controller;
