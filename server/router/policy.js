const express = require("express");
const router = express.Router();
const policyController = require("../controller/policyController");

router.post("/policy", policyController.createPolicy);
router.get("/policy", policyController.getAllPolicies);
router.get("/policy/:id", policyController.getPolicyById);
router.put("/policy/:id", policyController.updatePolicy);
router.delete("/policy/:id", policyController.deletePolicy);

module.exports = router;
