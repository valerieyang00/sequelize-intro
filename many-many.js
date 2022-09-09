const db = require("./models")

async function createToy() {
    try {
      // First, get a reference to a pet.
      const [pet, petCreated] = await db.pet.findOrCreate({
        where: {
          name: "Achee",
          species: "Domestic Shorthair",
          userId: 1
        }
      })
  
      // Second, get a reference to a toy.
      const [toy, toyCreated] = await db.toy.findOrCreate({
        where: { type: "rattle ball", color: "blue" }
      })
  
      // Finally, use the "addModel" method to attach one model to another model. (sequelize helper method)
      await pet.addToy(toy) //this will increment the JOIN table pets_toys
      console.log(`${toy.type} added to ${pet.name}.`);
  
    } catch (error) {
      console.log(error)
    }
  }
  
//   createToy()

async function readToy() {
    try {
        // find a toy -- 
      const toy = await db.toy.findOne({
        where: { type: "stinky bear" }
      })
  
      const pets = await toy.getPets()
      console.log(`${pets.length} pet(s) loves the ${toy.color, toy.type}.`);
    } catch (error) {
      console.log(error)
    }
  }
  
//   readToy()

async function readPet() {
    try {
      const pet = await db.pet.findOne({
        where: { name: "Silly May" }
      })
  
      const toys = await pet.getToys()
  
      toys.forEach(toy => {
        console.log(`${pet.name} loves their ${toy.color} ${toy.type}.`);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
//   readPet()

//add existing toy to existing pet
async function addToy() {
    try {
      // First, get a reference to a pet.
      const pet = await db.pet.findOne({
        where: {
          name: "Simba",
        }
      })
  
      // Second, get a reference to a toy.
      const toy = await db.toy.findOne({
        where: { color: "brown" }
      })
  
      // Finally, use the "addModel" method to attach one model to another model. (sequelize helper method)
      await pet.addToy(toy) //this will increment the JOIN table pets_toys
      console.log(`${toy.type} added to ${pet.name}.`);
  
    } catch (error) {
      console.log(error)
    }
  }

//   addToy()

//include all associated tables with pet: user, toy
async function eagerLoad() {
    try {
      const pet = await db.pet.findOne({
        where: {
          name: "Achee"
        },
        include: [db.user, db.toy]
      })
  
      pet.toys.forEach(toy => {
        console.log(`${pet.user.firstName}'s pet ${pet.name} loves their ${toy.color} ${toy.type}.`);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
//   eagerLoad()

async function readUser() {
    try {
      const user = await db.user.findByPk(3, { 
        include: [{
          model: db.pet,
          include: [db.toy]
        }]
      })
  
      user.pets.forEach(pet => {
          pet.toys.forEach(toy => {
            console.log(`${user.firstName}'s pet ${pet.name} loves their ${toy.color} ${toy.type}.`);
          })
        })
  
    } catch (error) {
      console.log(error)
    }
  }
  
//   readUser()

//sequelize helps for N:M associations through JOIN tables (foo, bar are tacos, bananas)

// fooInstance.getBars()
// fooInstance.countBars()
// fooInstance.hasBar()
// fooInstance.hasBars()
// fooInstance.setBars()
// fooInstance.addBar()
// fooInstance.addBars()
// fooInstance.removeBar()
// fooInstance.removeBars()
// fooInstance.createBar()