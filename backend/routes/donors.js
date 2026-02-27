const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/donorController');

router.post('/', ctrl.createDonor);
router.get('/', ctrl.getDonors);
router.get('/:id', ctrl.getDonor);
router.put('/:id', ctrl.updateDonor);
router.delete('/:id', ctrl.deleteDonor);

module.exports = router;
