const env = {
    database: 'db_clases_progra',
    username: 'db_clases_progra_user',
    password: 'Epzitgs51D4lnn3LaYWkIuyVi8mvFxBX',
    host: 'dpg-cqc60ft6l47c73cuht80-a.oregon-postgres.render.com',
    port: '5432',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
