// Good luck!
const express = require("express")
const app=express()

const unovanPokemon= {
    Pokemon: [
      {
        "pokemon_dex": 494,
        "pokemon_name": "Victini",
        "location": "Liberty Island",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)#/media/File:0494Victini.png"
      },
      {
        "pokemon_dex": 495,
        "pokemon_name": "Snivy",
        "location": "Starter Pokémon",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Snivy_(Pok%C3%A9mon)#/media/File:0495Snivy.png"
      },
      {
        "pokemon_dex": 496,
        "pokemon_name": "Servine",
        "location": "Evolution of Snivy",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Servine_(Pok%C3%A9mon)#/media/File:0496Servine.png"
      },
      {
        "pokemon_dex": 497,
        "pokemon_name": "Serperior",
        "location": "Evolution of Servine",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pok%C3%A9mon)#/media/File:0497Serperior.png"
      },
      {
        "pokemon_dex": 498,
        "pokemon_name": "Tepig",
        "location": "Starter Pokémon",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pok%C3%A9mon)#/media/File:0498Tepig.png"
      },
      {
        "pokemon_dex": 499,
        "pokemon_name": "Pignite",
        "location": "Evolution of Tepig",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pok%C3%A9mon)#/media/File:0499Pignite.png"
      },
      {
        "pokemon_dex": 500,
        "pokemon_name": "Emboar",
        "location": "Evolution of Pignite",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)#/media/File:0500Emboar.png"
      },
      {
        "pokemon_dex": 501,
        "pokemon_name": "Oshawott",
        "location": "Starter Pokémon",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Oshawott_(Pok%C3%A9mon)#/media/File:0501Oshawott.png"
      },
      {
        "pokemon_dex": 502,
        "pokemon_name": "Dewott",
        "location": "Evolution of Oshawott",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Dewott_(Pok%C3%A9mon)#/media/File:0502Dewott.png"
      },
      {
        "pokemon_dex": 503,
        "pokemon_name": "Samurott",
        "location": "Evolution of Dewott",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Samurott_(Pok%C3%A9mon)#/media/File:0503Samurott.png"
      },
      {
        "pokemon_dex": 504,
        "pokemon_name": "Patrat",
        "location": "Route 1",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Patrat_(Pok%C3%A9mon)#/media/File:0504Patrat.png"
      },
      {
        "pokemon_dex": 505,
        "pokemon_name": "Watchog",
        "location": "Route 1",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Watchog_(Pok%C3%A9mon)#/media/File:0505Watchog.png"
      },
      {
        "pokemon_dex": 506,
        "pokemon_name": "Lillipup",
        "location": "Route 1",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Lillipup_(Pok%C3%A9mon)#/media/File:0506Lillipup.png"
      },
      {
        "pokemon_dex": 507,
        "pokemon_name": "Herdier",
        "location": "Route 2",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Herdier_(Pok%C3%A9mon)#/media/File:0507Herdier.png"
      },
      {
        "pokemon_dex": 508,
        "pokemon_name": "Stoutland",
        "location": "Route 3",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Stoutland_(Pok%C3%A9mon)#/media/File:0508Stoutland.png"
      },
      {
        "pokemon_dex": 509,
        "pokemon_name": "Purrloin",
        "location": "Route 2",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Purrloin_(Pok%C3%A9mon)#/media/File:0509Purrloin.png"
      },
      {
        "pokemon_dex": 510,
        "pokemon_name": "Liepard",
        "location": "Route 2",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Liepard_(Pok%C3%A9mon)#/media/File:0510Liepard.png"
      },
      {
        "pokemon_dex": 511,
        "pokemon_name": "Pansear",
        "location": "Dreamyard",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Pansear_(Pok%C3%A9mon)#/media/File:0511Pansear.png"
      },
      {
        "pokemon_dex": 512,
        "pokemon_name": "Simisear",
        "location": "Evolution of Pansear",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Simisear_(Pok%C3%A9mon)#/media/File:0512Simisear.png"
      },
      {
        "pokemon_dex": 513,
        "pokemon_name": "Panpour",
        "location": "Dreamyard",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Panpour_(Pok%C3%A9mon)#/media/File:0513Panpour.png"
      },
      {
        "pokemon_dex": 514,
        "pokemon_name": "Simipour",
        "location": "Evolution of Panpour",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Simipour_(Pok%C3%A9mon)#/media/File:0514Simipour.png"
      },
      {
        "pokemon_dex": 515,
        "pokemon_name": "Munna",
        "location": "Dreamyard",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Munna_(Pok%C3%A9mon)#/media/File:0515Munna.png"
      },
      {
        "pokemon_dex": 516,
        "pokemon_name": "Musharna",
        "location": "Evolution of Munna",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Musharna_(Pok%C3%A9mon)#/media/File:0516Musharna.png"
      },
      {
        "pokemon_dex": 517,
        "pokemon_name": "Pidove",
        "location": "Route 1",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Pidove_(Pok%C3%A9mon)#/media/File:0517Pidove.png"
      },
      {
        "pokemon_dex": 518,
        "pokemon_name": "Tranquill",
        "location": "Route 3",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Tranquill_(Pok%C3%A9mon)#/media/File:0518Tranquill.png"
      },
      {
        "pokemon_dex": 519,
        "pokemon_name": "Unfezant",
        "location": "Route 3",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Unfezant_(Pok%C3%A9mon)#/media/File:0519Unfezant.png"
      },
      {
        "pokemon_dex": 520,
        "pokemon_name": "Blitzle",
        "location": "Route 3",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Blitzle_(Pok%C3%A9mon)#/media/File:0520Blitzle.png"
      },
      {
        "pokemon_dex": 521,
        "pokemon_name": "Zebstrika",
        "location": "Route 3",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Zebstrika_(Pok%C3%A9mon)#/media/File:0521Zebstrika.png"
      },
      {
        "pokemon_dex": 522,
        "pokemon_name": "Roggenrola",
        "location": "Wellspring Cave",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Roggenrola_(Pok%C3%A9mon)#/media/File:0522Roggenrola.png"
      },
      {
        "pokemon_dex": 523,
        "pokemon_name": "Boldore",
        "location": "Wellspring Cave",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Boldore_(Pok%C3%A9mon)#/media/File:0523Boldore.png"
      },
      {
        "pokemon_dex": 524,
        "pokemon_name": "Gigalith",
        "location": "Trade Evolution",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Gigalith_(Pok%C3%A9mon)#/media/File:0524Gigalith.png"
      },
      {
        "pokemon_dex": 525,
        "pokemon_name": "Woobat",
        "location": "Wellspring Cave",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Woobat_(Pok%C3%A9mon)#/media/File:0525Woobat.png"
      },
      {
        "pokemon_dex": 526,
        "pokemon_name": "Swoobat",
        "location": "Friendship Evolution",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pok%C3%A9mon)#/media/File:0526Swoobat.png"
      },
      {
        "pokemon_dex": 527,
        "pokemon_name": "Drilbur",
        "location": "Wellspring Cave",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Drilbur_(Pok%C3%A9mon)#/media/File:0527Drilbur.png"
      },
      {
        "pokemon_dex": 528,
        "pokemon_name": "Excadrill",
        "location": "Evolution of Drilbur",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Excadrill_(Pok%C3%A9mon)#/media/File:0528Excadrill.png"
      },
      {
        "pokemon_dex": 529,
        "pokemon_name": "Audino",
        "location": "Rustling Grass",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Audino_(Pok%C3%A9mon)#/media/File:0529Audino.png"
      },
      {
        "pokemon_dex": 530,
        "pokemon_name": "Timburr",
        "location": "Route 4",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Timburr_(Pok%C3%A9mon)#/media/File:0530Timburr.png"
      },
      {
        "pokemon_dex": 531,
        "pokemon_name": "Gurdurr",
        "location": "Route 4",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Gurdurr_(Pok%C3%A9mon)#/media/File:0531Gurdurr.png"
      },
      {
        "pokemon_dex": 532,
        "pokemon_name": "Conkeldurr",
        "location": "Trade Evolution",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Conkeldurr_(Pok%C3%A9mon)#/media/File:0532Conkeldurr.png"
      },
      {
        "pokemon_dex": 533,
        "pokemon_name": "Tympole",
        "location": "Route 6",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Tympole_(Pok%C3%A9mon)#/media/File:0533Tympole.png"
      },
      {
        "pokemon_dex": 534,
        "pokemon_name": "Palpitoad",
        "location": "Route 6",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Palpitoad_(Pok%C3%A9mon)#/media/File:0534Palpitoad.png"
      },
      {
        "pokemon_dex": 535,
        "pokemon_name": "Seismitoad",
        "location": "Evolution of Palpitoad",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Seismitoad_(Pok%C3%A9mon)#/media/File:0535Seismitoad.png"
      },
      {
        "pokemon_dex": 536,
        "pokemon_name": "Throh",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Throh_(Pok%C3%A9mon)#/media/File:0536Throh.png"
      },
      {
        "pokemon_dex": 537,
        "pokemon_name": "Sawk",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Sawk_(Pok%C3%A9mon)#/media/File:0537Sawk.png"
      },
      {
        "pokemon_dex": 538,
        "pokemon_name": "Sewaddle",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Sewaddle_(Pok%C3%A9mon)#/media/File:0538Sewaddle.png"
      },
      {
        "pokemon_dex": 539,
        "pokemon_name": "Swadloon",
        "location": "Evolution of Sewaddle",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Swadloon_(Pok%C3%A9mon)#/media/File:0539Swadloon.png"
      },
      {
        "pokemon_dex": 540,
        "pokemon_name": "Leavanny",
        "location": "Evolution of Swadloon",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Leavanny_(Pok%C3%A9mon)#/media/File:0540Leavanny.png"
      },
      {
        "pokemon_dex": 541,
        "pokemon_name": "Venipede",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Venipede_(Pok%C3%A9mon)#/media/File:0541Venipede.png"
      },
      {
        "pokemon_dex": 542,
        "pokemon_name": "Whirlipede",
        "location": "Evolution of Venipede",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Whirlipede_(Pok%C3%A9mon)#/media/File:0542Whirlipede.png"
      },
      {
        "pokemon_dex": 543,
        "pokemon_name": "Scolipede",
        "location": "Evolution of Whirlipede",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pok%C3%A9mon)#/media/File:0543Scolipede.png"
      },
      {
        "pokemon_dex": 544,
        "pokemon_name": "Cottonee",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Cottonee_(Pok%C3%A9mon)#/media/File:0544Cottonee.png"
      },
      {
        "pokemon_dex": 545,
        "pokemon_name": "Whimsicott",
        "location": "Evolution of Cottonee",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Whimsicott_(Pok%C3%A9mon)#/media/File:0545Whimsicott.png"
      },
      {
        "pokemon_dex": 546,
        "pokemon_name": "Petilil",
        "location": "Pinwheel Forest",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Petilil_(Pok%C3%A9mon)#/media/File:0546Petilil.png"
      },
      {
        "pokemon_dex": 547,
        "pokemon_name": "Lilligant",
        "location": "Evolution of Petilil",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Lilligant_(Pok%C3%A9mon)#/media/File:0547Lilligant.png"
      },
      {
        "pokemon_dex": 548,
        "pokemon_name": "Basculin",
        "location": "Route 6",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Basculin_(Pok%C3%A9mon)#/media/File:0548Basculin.png"
      },
      {
        "pokemon_dex": 549,
        "pokemon_name": "Sandile",
        "location": "Desert Resort",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Sandile_(Pok%C3%A9mon)#/media/File:0549Sandile.png"
      },
      {
        "pokemon_dex": 550,
        "pokemon_name": "Krokorok",
        "location": "Desert Resort",
        "photo": "https://bulbapedia.bulbagarden.net/wiki/Krokorok_(Pok%C3%A9mon)#/media/File:0550Krokorok.png"
      }
    ]
}


app.use((req, res, next)=>{
    console.log("Hello World!")
    next();
})

app.use((req, res, next)=>{
    console.log(req.method + "/" + req.url)
    next();
})
app.get("/", (req, res)=>{
  res.status(200).send("Welcome to Unova!, ready to search?")
})
app.get("/docs", (req, res)=>{
  res.status(200).send("This is a pokemon API that stores some of the generation 5 pokemon to dex number 534 palpitoed")
})

app.get("/pokemon/:pocketNum", (req, res)=>{
    const PokeNav = req.params.pocketNum
    res.status(200).json(unovanPokemon.Pokemon[PokeNav])
})

app.use((req, res, next)=>{
    res.status(404).send("404 NOT FOUND")
})
app.listen(3000, ()=>{
    console.log("Sever is running at http://localhost:3000");
})