// Server.js
// Import the app
// Start up and listen

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
