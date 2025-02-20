const { prototype } = require("jsonwebtoken/lib/JsonWebTokenError");

const config = {
  user: "fanta_wall_db", // Database username
  password: "FwRC597Cn*Dat", // Database password
  server: "78.47.118.224", // Server IP address
  database: "fantasy_wallet_d25", // Database name
  options: {
    encrypt: false, // Disable encryption
  },
  port: 1533,
};

module.exports = config;
