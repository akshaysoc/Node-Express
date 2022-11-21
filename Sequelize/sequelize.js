const {Sequelize, DataTypes, Op} = require('sequelize');

const sequelize = new Sequelize("fbms", "root", "Akshay@3100", {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate()
// .then(()=>{
//     console.log('connection established')
// })
// .catch((error)=>{
//     console.error('unable to connect', error);
// })

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age:{
        type: DataTypes.INTEGER,
        defaultValue: 18,
        allowNull: false
    },

    // country: {
    //     type: DataTypes.STRING(5),
    //     defaultValue: 'IN',
    //     allowNull: false
    // }
});

// User.sync({alter: true});

// User.create({name: 'kutan', email: 'kutan@mail.com', age: 23})
// .then(()=>{
//     console.log("data saved");
// })
// .catch(err =>{
//     console.log("error");
// })

User.findAll({
    where: {
        id: {
            [Op.gte]: 2
        }
    }
}).then(function(users){
    users.forEach(function(user){
        console.log(user.dataValues.id, user.dataValues.name)
    })
    
});
