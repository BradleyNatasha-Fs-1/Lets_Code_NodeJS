const express = require("express");
const router = express.Router();
const animes = [
    {
        "Title": "Jujutsu Kaisen",
        "Seasons": "2",
        "Summary": "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul.",
        "id": "0"
    },
    {
        "Title": "Frieren: Beyond Journey's End",
        "Seasons": "1",
        "Summary": "After the party of heroes defeated the Demon King, they restored peace to the land and returned to lives of solitude. Generations pass, and the elven mage Frieren comes face to face with humanitys mortality. She takes on a new apprentice and promises to fulfill old friends dying wishes. Can an elven mind make peace with the nature of life and death? Frieren embarks on her quest to find out.",
        "id": "1"
    }
];

//http://Localhost:3000/exercise
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Successful - GET",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//http://Localhost:3000/exercise/34
router.get("/:id", (req, res, next) => {
    const id = req.params.id,
        anime = animes[id];
    //console.log(anime);
    res.status(200).json({
        message: "Successful - GET by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            anime
        },
    });
});

//http://Localhost:3000/exercise/89
router.put("/:id", (req, res, next) => {
    const id = req.params.id,
        anime = animes[id];
    //console.log(`Before update: ${anime}`);
    //anime.Title = req.body.Title;
    anime.Seasons = req.body.Seasons;
    //anime.Summary = req.body.Summary;
    //console.log(`after update: ${anime}`);
    res.status(200).json({
        message: "Successful - PUT by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            anime
        },
    });
});

//http://Localhost:3000/exercise
router.post("/", (req, res, next) => {
    //console.log('Request body >>>', req.body);
    const anime = {
        "Title": req.body.Title,
        "Seasons": req.body.Title,
        "Summary": req.body.Summary,
        "id": animes.length
    };
    animes.push(anime);
    //console.log(animes);
    res.status(200).json({
        message: "Successful - POST",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            anime
        },
    });
});

//http://Localhost:3000/exercise/9
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(animes[id]);
    animes.splice(id, 1);
    res.status(200).json({
        message: "Successful - DELETE by ID",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            animes
        }
    });
});

module.exports = router;