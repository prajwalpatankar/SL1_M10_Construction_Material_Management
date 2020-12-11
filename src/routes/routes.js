const router = require('express').Router();

const { Router } = require('express');
const { clientlist } = require('../controllers/Controller');
const Controller = require('../controllers/Controller');

router.get('/',Controller.home);


router.get('/employee',Controller.employee);
router.post('/employee/add',Controller.addemployee);

router.get('/login',Controller.login);
router.post('/login/in',Controller.loginnew);
router.get('/loginerr',Controller.loginerr);
router.get('/signup',Controller.signup);
router.get('/signuperr',Controller.signuperr);
router.post('/signup/add',Controller.signupsave);

router.get('/client', Controller.clientlist);
router.post('/client/add',Controller.clientsave);
router.get('/client/update/:id', Controller.clientedit);
router.post('/client/update/:id', Controller.clientupdate);
router.get('/client/bill/:id', Controller.clientbill);
// router.get('/client/delete/:id', Controller.clientdelete);

router.get('/material', Controller.materiallist);
router.post('/material/add',Controller.materialsave);
router.get('/error_material', Controller.errorMaterial);
router.get('/material/update/:id', Controller.materialedit);
router.post('/material/update/:id', Controller.materialupdate);
// router.get('/material/delete/:id', Controller.materialdelete);

router.get('/contact', Controller.contactlist);
router.get('/error_contact', Controller.errorContact);
router.post('/contact/add',Controller.contactsave);
router.get('/contact/update/:id', Controller.contactedit);
router.post('/contact/update/:id', Controller.contactupdate);
router.get('/contact/delete/:id&:ph', Controller.contactdelete);

router.get('/stock', Controller.stocklist);
router.post('/stock/add',Controller.stocksave);
router.get('/error_stock', Controller.errorStock);
router.get('/stock/update/:id', Controller.stockedit);
router.post('/stock/update/:id', Controller.stockupdate);
router.get('/stock/delete/:id', Controller.stockdelete);

router.get('/requirement', Controller.requirementlist);
router.post('/requirement/add',Controller.requirementsave);
// router.get('/requirement/update/:id', Controller.requirementedit);
// router.post('/requirement/update/:id', Controller.requirementupdate);
router.get('/requirement/delete/:id', Controller.requirementdelete);
router.get('/requirement/bill/:ord&:cli&:mat',Controller.generateBill);

module.exports = router;

