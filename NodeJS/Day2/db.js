const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("NodeJS_Task2", "TestLogin", "123456", {
	host: "DESKTOP-SP32PGG",
	dialect: "mssql",
	dialectOptions: {
		encrypt: 1,
	},
});

module.exports = sequelize;
