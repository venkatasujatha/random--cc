const {DataSource} = require('typeorm');

const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'randomdb',
    entities: ['/home/tectoro/Desktop/random--cc/entity/*.js'],
    migrations: ['migrations/*.js'],
    migrationsTableName:'randomdb_migrations',
    cli:
    { 
        entitiesDir: ['/home/tectoro/Desktop/random--cc/entity/*.js'],
    },
    synchronize: true
})

module.exports = {dataSource};