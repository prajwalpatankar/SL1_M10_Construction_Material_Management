const controller = {};

controller.clientlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM CLIENT', (err, clients) => {
     if (err) {
      res.json(err);
     }
     res.render('clients', {
        data: clients
     });
    });
  });
};

controller.clientsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
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





controller.materiallist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM MATERIAL', (err, clients) => {
     if (err) {
      res.json(err);
     }
     res.render('material', {
        data: clients
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

controller.materialdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM MATERIAL WHERE MATERIAL_ID = ?', [id], (err, rows) => {
      res.redirect('/material');
    });
  });
}






controller.contactlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM CONTACT_DETAILS', (err, contacts) => {
     if (err) {
      res.json(err);
     }
     res.render('contact', {
        data: contacts
     });
    });
  });
};

controller.contactsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO CONTACT_DETAILS SET ?', data, (err, contact) => {
      console.log(contact)
      res.redirect('/contact');
    })
  })
};

controller.contactedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM CONTACT_DETAILS WHERE CLIENT_ID = ?", [id], (err, rows) => {
      res.render('contact_edit', {
        data: rows[0]
      })
    });
  });
};

controller.contactupdate = (req, res) => {
  const { id } = req.params;
  const newContact = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE CONTACT_DETAILS SET ? WHERE CLIENT_ID = ?', [newContact, id], (err, rows) => {
    res.redirect('/contact');
  });
  });
};

controller.contactdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM CONTACT_DETAILS WHERE CLIENT_ID = ?', [id], (err, rows) => {
      res.redirect('/contact');
    });
  });
}











controller.stocklist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM STOCK', (err, clients) => {
     if (err) {
      res.json(err);
     }
     res.render('stock', {
        data: clients
     });
    });
  });
};

controller.stocksave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO STOCK SET ?', data, (err, stock) => {
      console.log(stock)
      res.redirect('/stock');
    })
  })
};

controller.stockedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM STOCK WHERE MATERIAL_ID = ?", [id], (err, rows) => {
      res.render('stock_edit', {
        data: rows[0]
      })
    });
  });
};

controller.stockupdate = (req, res) => {
  const { id } = req.params;
  const newStock = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE STOCK SET ? WHERE MATERIAL_ID = ?', [newStock, id], (err, rows) => {
    res.redirect('/stock');
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










controller.requirementlist = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM REQUIREMENT', (err, requirements) => {
     if (err) {
      res.json(err);
      console.log(err);
     }
     res.render('requirement', {
        data: requirements
     });
    });
  });
};

controller.requirementsave = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO REQUIREMENT SET ?', data, (err, requirement) => {
      console.log(requirement)
      res.redirect('/requirement');
    })
  })
};

controller.requirementedit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM REQUIREMENT WHERE ORDER_NO = ?", [id], (err, rows) => {
      res.render('requirement_edit', {
        data: rows[0]
      })
    });
  });
};

controller.requirementupdate = (req, res) => {
  const { id } = req.params;
  const newRequirement = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE REQUIREMENT SET ? WHERE ORDER_NO = ?', [newRequirement, id], (err, rows) => {
    res.redirect('/requirement');
  });
  });
};

controller.requirementdelete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM REQUIREMENT WHERE ORDER_NO = ?', [id], (err, rows) => {
      res.redirect('/requirement');
    });
  });
}



module.exports = controller;
