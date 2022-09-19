const EntitySchema = require('typeorm').EntitySchema;

const random = new EntitySchema({
    name: 'random',
    columns:{
        id: {
            primary: true,
            type:'int',
            generated: true
            },
        number: {
            type:'int'
        }    

    }
})

module.exports ={random};