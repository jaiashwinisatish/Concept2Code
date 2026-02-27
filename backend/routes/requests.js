const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/requestController');

router.post('/', ctrl.createRequest);
router.get('/', ctrl.getRequests);
router.delete('/:id', ctrl.deleteRequest);

module.exports = router;
