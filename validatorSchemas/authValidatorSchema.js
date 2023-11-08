const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty(),
    body('identity_type').notEmpty(),
    body('identity_number').notEmpty(),
    body('address').notEmpty()
];

const loginValidator = [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty()
];

const changePasswordValidator = [
    body('old_password').notEmpty(),
    body('password').notEmpty()
];

const accountValidator = [
    body('userId').isInt(),
    body('bank_name').notEmpty(),
    body('bank_account_number').notEmpty(),
    body('balance').isNumeric()
];

const transactionValidator = [
    body('source_account_id').isInt(),
    body('destination_account_id').isInt(),
    body('amount').isNumeric()
];

module.exports = {
    registerValidator,
    loginValidator,
    changePasswordValidator,
    accountValidator,
    transactionValidator
};
