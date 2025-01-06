// Good luck!
const express = require("express")
const app=express()


const unovanPokemon = {
    "Unova": {
      "Pokemon": [
        {
          "pokemon_dex": 494,
          "pokemon_name": "Victini",
          "location": "Liberty Island",
          "photo": "https://archives.bulbagarden.net/media/upload/6/60/494Victini.png"
        },
        {
          "pokemon_dex": 495,
          "pokemon_name": "Snivy",
          "location": "Starter Pokémon",
          "photo": "https://archives.bulbagarden.net/media/upload/1/16/495Snivy.png"
        },
        {
          "pokemon_dex": 496,
          "pokemon_name": "Servine",
          "location": "Evolution of Snivy",
          "photo": "https://archives.bulbagarden.net/media/upload/6/61/496Servine.png"
        },
        {
          "pokemon_dex": 497,
          "pokemon_name": "Serperior",
          "location": "Evolution of Servine",
          "photo": "https://archives.bulbagarden.net/media/upload/7/71/497Serperior.png"
        },
        {
          "pokemon_dex": 498,
          "pokemon_name": "Tepig",
          "location": "Starter Pokémon",
          "photo": "https://archives.bulbagarden.net/media/upload/5/51/498Tepig.png"
        },
        {
          "pokemon_dex": 499,
          "pokemon_name": "Pignite",
          "location": "Evolution of Tepig",
          "photo": "https://archives.bulbagarden.net/media/upload/9/98/499Pignite.png"
        },
        {
          "pokemon_dex": 500,
          "pokemon_name": "Emboar",
          "location": "Evolution of Pignite",
          "photo": "https://archives.bulbagarden.net/media/upload/0/0e/500Emboar.png"
        },
        {
          "pokemon_dex": 501,
          "pokemon_name": "Oshawott",
          "location": "Starter Pokémon",
          "photo": "https://archives.bulbagarden.net/media/upload/d/d0/501Oshawott.png"
        },
        {
          "pokemon_dex": 502,
          "pokemon_name": "Dewott",
          "location": "Evolution of Oshawott",
          "photo": "https://archives.bulbagarden.net/media/upload/8/8b/502Dewott.png"
        },
        {
          "pokemon_dex": 503,
          "pokemon_name": "Samurott",
          "location": "Evolution of Dewott",
          "photo": "https://archives.bulbagarden.net/media/upload/4/4e/503Samurott.png"
        },
        {
          "pokemon_dex": 504,
          "pokemon_name": "Patrat",
          "location": "Route 1",
          "photo": "https://archives.bulbagarden.net/media/upload/7/73/504Patrat.png"
        },
        {
          "pokemon_dex": 505,
          "pokemon_name": "Watchog",
          "location": "Route 1",
          "photo": "https://archives.bulbagarden.net/media/upload/0/0d/505Watchog.png"
        },
        {
          "pokemon_dex": 506,
          "pokemon_name": "Lillipup",
          "location": "Route 1",
          "photo": "https://archives.bulbagarden.net/media/upload/8/82/506Lillipup.png"
        },
        {
          "pokemon_dex": 507,
          "pokemon_name": "Herdier",
          "location": "Route 2",
          "photo": "https://archives.bulbagarden.net/media/upload/c/cf/507Herdier.png"
        },
        {
          "pokemon_dex": 508,
          "pokemon_name": "Stoutland",
          "location": "Route 3",
          "photo": "https://archives.bulbagarden.net/media/upload/7/7b/508Stoutland.png"
        },
        {
          "pokemon_dex": 509,
          "pokemon_name": "Purrloin",
          "location": "Route 2",
          "photo": "https://archives.bulbagarden.net/media/upload/d/d7/509Purrloin.png"
        },
        {
          "pokemon_dex": 510,
          "pokemon_name": "Liepard",
          "location": "Route 2",
          "photo": "https://archives.bulbagarden.net/media/upload/6/65/510Liepard.png"
        },
        {
          "pokemon_dex": 511,
          "pokemon_name": "Pansear",
          "location": "Dreamyard",
          "photo": "https://archives.bulbagarden.net/media/upload/5/5f/511Pansear.png"
        },
        {
          "pokemon_dex": 512,
          "pokemon_name": "Simisear",
          "location": "Evolution of Pansear",
          "photo": "https://archives.bulbagarden.net/media/upload/a/ab/512Simisear.png"
        },
        {
          "pokemon_dex": 513,
          "pokemon_name": "Panpour",
          "location": "Dreamyard",
          "photo": "https://archives.bulbagarden.net/media/upload/4/4b/513Panpour.png"
        },
        {
          "pokemon_dex": 514,
          "pokemon_name": "Simipour",
          "location": "Evolution of Panpour",
          "photo": "https://archives.bulbagarden.net/media/upload/c/cd/514Simipour.png"
        },
        {
          "pokemon_dex": 515,
          "pokemon_name": "Munna",
          "location": "Dreamyard",
          "photo": "https://archives.bulbagarden.net/media/upload/6/6c/515Munna.png"
        },
        {
          "pokemon_dex": 516,
          "pokemon_name": "Musharna",
          "location": "Evolution of Munna",
          "photo": "https://archives.bulbagarden.net/media/upload/8/89/516Musharna.png"
        },
        {
          "pokemon_dex": 517,
          "pokemon_name": "Pidove",
          "location": "Route 1",
          "photo": "https://archives.bulbagarden.net/media/upload/9/9a/517Pidove.png"
        },
        {
          "pokemon_dex": 518,
          "pokemon_name": "Tranquill",
          "location": "Route 3",
          "photo": "https://archives.bulbagarden.net/media/upload/4/49/518Tranquill.png"
        },
        {
          "pokemon_dex": 519,
          "pokemon_name": "Unfezant",
          "location": "Route 3",
          "photo": "https://archives.bulbagarden.net/media/upload/2/2b/519Unfezant.png"
        },
        {
          "pokemon_dex": 520,
          "pokemon_name": "Blitzle",
          "location": "Route 3",
          "photo": "https://archives.bulbagarden.net/media/upload/2/25/520Blitzle.png"
        },
        {
          "pokemon_dex": 521,
          "pokemon_name": "Zebstrika",
          "location": "Route 3",
          "photo": "https://archives.bulbagarden.net/media/upload/f/fc/521Zebstrika.png"
        },
        {
          "pokemon_dex": 522,
          "pokemon_name": "Roggenrola",
          "location": "Wellspring Cave",
          "photo": "https://archives.bulbagarden.net/media/upload/5/56/522Roggenrola.png"
        },
        {
          "pokemon_dex": 523,
          "pokemon_name": "Boldore",
          "location": "Wellspring Cave",
          "photo": "https://archives.bulbagarden.net/media/upload/1/13/523Boldore.png"
        },
        {
          "pokemon_dex": 524,
          "pokemon_name": "Gigalith",
          "location": "Trade Evolution",
          "photo": "https://archives.bulbagarden.net/media/upload/8/88/524Gigalith.png"
        },
        {
          "pokemon_dex": 525,
          "pokemon_name": "Woobat",
          "location": "Wellspring Cave",
          "photo": "https://archives.bulbagarden.net/media/upload/7/70/525Woobat.png"
        },
        {
          "pokemon_dex": 526,
          "pokemon_name": "Swoobat",
          "location": "Friendship Evolution",
          "photo": "https://archives.bulbagarden.net/media/upload/7/7d/526Swoobat.png"
        },
        {
          "pokemon_dex": 527,
          "pokemon_name": "Drilbur",
          "location": "Wellspring Cave",
          "photo": "https://archives.bulbagarden.net/media/upload/a/a3/527Drilbur.png"
        },
        {
          "pokemon_dex": 528,
          "pokemon_name": "Excadrill",
          "location": "Evolution of Drilbur",
          "photo": "https://archives.bulbagarden.net/media/upload/3/39/528Excadrill.png"
        },
        {
          "pokemon_dex": 529,
          "pokemon_name": "Audino",
          "location": "Rustling Grass",
          "photo": "https://archives.bulbagarden.net/media/upload/a/a5/529Audino.png"
        },
        {
          "pokemon_dex": 530,
          "pokemon_name": "Timburr",
          "location": "Route 4",
          "photo": "https://archives.bulbagarden.net/media/upload/e/e8/530Timburr.png"
        },
        {
          "pokemon_dex": 531,
          "pokemon_name": "Gurdurr",
          "location": "Route 4",
          "photo": "https://archives.bulbagarden.net/media/upload/c/c9/531Gurdurr.png"
        },
        {
          "pokemon_dex": 532,
          "pokemon_name": "Conkeldurr",
          "location": "Trade Evolution",
          "photo": "https://archives.bulbagarden.net/media/upload/8/80/532Conkeldurr.png"
        },
        {
          "pokemon_dex": 533,
          "pokemon_name": "Tympole",
          "location": "Route 6",
          "photo": "https://archives.bulbagarden.net/media/upload/8/8a/533Tympole.png"
        },
        {
          "pokemon_dex": 534,
          "pokemon_name": "Palpitoad",
          "location": "Route 6",
          "photo": "https://archives.bulbagarden.net/media/upload/2/2b/534Palpitoad.png"
        }
      ]
    }
  };
  




app.use((req, res, next)=>{
    console.log("Welcome to Unova!, ready to search?")
    next();
})

app.use((req, res, next)=>{
    console.log(req.method + "/" + req.url)
    next();
})

app.get("/pokemon/:pocketNum", (req, res)=>{
    const PokeNav = req.params.pocketNum
    res.json(unovanPokemon.pokeNav)
})

app.use((req, res, next)=>{
    res.status(404).send("404 NOT FOUND")
})
app.listen(3000, ()=>{
    console.log("Sever is running at http://localhost:3000");
})