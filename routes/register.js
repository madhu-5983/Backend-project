const Registration = require("../models/registration");
const express = require("express");
const router = express.Router();

// Get all registrations
router.get("/", async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).send(registrations);
    } catch (error) {
        res.status(500).send("Error fetching registrations.");
    }
});

router.post("/", async (req, res) => {
    try {
        const registration = await new Registration(req.body).save();
        res.status(201).send(registration);
    } catch (error) {
        res.status(400).send("Error saving registration details.");
    }
});

module.exports = router;
