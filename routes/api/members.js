const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members-controller')

// router.get('/',memberController.getAllMembers)

router.post('/v1',memberController.sendBirthdayGreetingV1)
router.post('/v2',memberController.sendBirthdayGreetingV2)
router.post('/v3',memberController.sendBirthdayGreetingV3)
router.post('/v4',memberController.sendBirthdayGreetingV4)
router.post('/v4/init-data',memberController.setFireStoreData)
// router.post('/v5',memberController.sendBirthdayGreetingV5)

module.exports = router;
