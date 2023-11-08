const express = require('express'),
    userControllers = require('./controllers/userControllers'),
    accountControllers = require('./controllers/accountControllers'),
    transactionControllers = require('./controllers/transactionControllers'),
    checkToken = require('./middleware/checkToken'),
    validate = require('./middleware/validate'),
    schema = require('./validatorSchemas/authValidatorSchema'),
    router = express.Router();

router.post('/auth/login',validate(schema.loginValidator),  userControllers.loginUser)
router.post('/auth/register', validate(schema.registerValidator), userControllers.registerUser)
router.get('/auth/authenticate',checkToken, userControllers.loginUser)
router.post('/users', userControllers.registerUser)
router.get('/users', userControllers.getUsers)
router.get('/users/:userId', userControllers.getUserById)
router.put('/users/:userId/update-profile', userControllers.updateProfile)
router.put('/users/:userId/update-password', validate(schema.changePasswordValidator), userControllers.updatePassword)
router.delete('/users/:userId', userControllers. deleteUserById)
router.post('/accounts',validate(schema.accountValidator), accountControllers.addAccounts)
router.get('/accounts', accountControllers.getAccounts)
router.get('/accounts/:accountId', accountControllers.getAccountById);
router.delete('/accounts/:accountId', accountControllers. deleteAccountById);
router.put('/accounts/:accountId', accountControllers.updateAccountById);
router.post('/transactions', validate(schema.transactionValidator), transactionControllers.addTransaction)
router.get('/transactions', transactionControllers.getTransactions)
router.get('/transactions/:transactionId', transactionControllers.getTransactionById); 
router.delete('/transactions/:transactionId', transactionControllers.deleteTransactionById); 
router.put('/transactions/:transactionId', transactionControllers.updateTransactionById); 


module.exports = router