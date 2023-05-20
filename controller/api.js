const express = require("express");
const router = express.Router();

const path = require("path")

const CharacterSchema = require("../models/character");
const PlanetSchema = require("../models/planet");

//Home page with documentation
router.get("/", async(req,res) => {
    res.status(200).render(
        path.join(__dirname, '..', '..', 'public', 'index.html')
    )
})

// get all resourses
router.get('/api', async(req,res) => {
    const allCharacters = await CharacterSchema.find([]);
    const allPlanets = await PlanetSchema.find([]);
    try {
        res.status(200).json(allCharacters, allPlanets);
    } catch (error) {
        res.status(500).send(error)
    }
})

//get all characters
router.get('/characters', async(req,res) => {
    const allCharacters = await CharacterSchema.find([]);
    try {
        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(500).send(error)
    }
});

//get all planets
router.get('/planets', async(req,res) => {
    const allPlanets = await PlanetSchema.find([]);
    try {
        res.status(200).json(allPlanets);
    } catch (error) {
        res.status(500).send(error)
    }
});

//get an single characters
router.get('/characters/:cid', async(req,res) => {
    const character = req.params.id
    try {
        await CharacterSchema.findOne(character);
        res.status(200).json(character);
    } catch (error) {
        res.status(500).send(error)
    }
});

//get an single planets
router.get('/planets/:pid', async(req,res) => {
    const planet = req.params.id;
    try {
        await PlanetSchema.findOne(planet);
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).send(error)
    }
});

//create an character
router.post('/characters', async(req,res) => {
    let newCharacter = new CharacterSchema(req.body);
    try {
        newCharacter.save();
        res.status(200).send(newCharacter)
    } catch (error) {
        res.status(500).send(error)
    }
})

//create an planet
router.post('/planets', async(req,res) => {
    let newPlanet = new PlanetSchema(req.body);
    try {
        newPlanet.save();
        res.status(200).send(newPlanet)
    } catch (error) {
        res.status(500).send(error)
    }
})

//delete a character
router.delete('/characters/:id', async(req,res) => {
    let _id = req.params.id;
    try {
        await CharacterSchema.findByIdAndDelete(_id);
        res.status(200).send("Delected with success")
    } catch (error) {
        res.status(500).send(error)
    }
})

//delete an planet
router.delete('/planets/:id', async(req,res) => {
    let _id = req.params.id;
    try {
        await CharacterSchema.findByIdAndDelete(_id);
        res.status(200).send("Delected with success")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;