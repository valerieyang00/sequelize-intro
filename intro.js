const db = require("./models")

//db.user.sequelizeMethod()

const userCRUD = async () => {
    try {
        //CREATE
        // const newUser = await db.user.create({
        //     firstName: "April",
        //     lastName: "Gonzales",
        //     age: 32,
        //     email: "apr@b.com"
        // })
        // console.log(newUser)
        //READ
        // const allUsers = await db.user.findAll()
        // console.log(allUsers)
        // const someUsers = await db.user.findAll({
        //     where: {
        //         id: 1
        //     }
        // })
        // console.log(someUsers)

        //find or create
        // array destructuring syntax
        // user = array [0] -- the user that is found or created
        // created = array[1] -- a bool of wheter the user was created /not
        const [user, created] = await db.user.findOrCreate({
            where: {
                firstName: "April"
            },
            //date to add if we are creating
            defaults: {
                lastName: "G",
                age: 33,
                email: "apr@g.com"
            }
        })


        //UPDATE
        //updates return the number of rows that were changed
        // const numRowsChanged = await db.user.update({firstName: "April"}, { 
        //     where: {
        //         id: 2
        //     }
        // })
        //DESTROY
        // const numRowsDeleted = await db.user.destroy({
        //     where: {
        //         firstName: "April"
        //     }
        // })
    } catch(err) {
        console.warn(err)
    }
}

userCRUD()