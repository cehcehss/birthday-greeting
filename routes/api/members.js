const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members-controller')

// router.get('/',memberController.getAllMembers)

router.post('/v4',memberController.getMemberByBirthday)
router.post('/v4/init-data',memberController.setData)

module.exports = router;
