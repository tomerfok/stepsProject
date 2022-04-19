import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "database",
    process.env.USER,
    process.env.PASSWORD,
    {
        host: "0.0.0.0",
        dialect: "sqlite",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: "db/database.sqlite",
    }
);

export { sequelize };