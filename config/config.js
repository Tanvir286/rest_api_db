require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 14261,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
  },
};

module.exports = dev;
