const Course = require("../models/course");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const course = await new Course(req.body).save();
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send("Error saving course details.");
    }
});

router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).send(courses);
    } catch (error) {
        res.status(400).send("Failed to get courses.");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.send(course);
    } catch (error) {
        res.status(400).send("Failed to edit course.");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        res.send(course);
    } catch (error) {
        res.status(400).send("Failed to delete course.");
    }
});

module.exports = router;
