const { Router } = require('express');
const router = Router();

const {
  getUsers,
  creteUser,
  deleteUser
} = require('../controllers/users_controllers');

router
  .route('/')
  .get(getUsers)
  .post(creteUser);

router.route('/:id').delete(deleteUser);

module.exports = router;
