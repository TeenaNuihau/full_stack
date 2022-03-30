const router = require('express').Router();
const authController = require('../../controllers/auth.controller');

// auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);
router.get('/forgotPassword', authController.changePassword);
router.delete('/:id', authController.removeUser);


module.exports = router;