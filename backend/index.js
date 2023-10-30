const express = require("express");
const app = express();
const DataBaseCon = require("./Middlewares/DataBaseCon");
const indexRoutes = require("./Routes/index.routes");
const cookieParser = require("cookie-parser");
const cors = require('cors');
// !----------------------------------------------------

// TODO : DataBase connection function
DataBaseCon();

app.use(cors(
  {
    origin: ["https://assignment-provoke-api.vercel.app/"],
    methods:["POST","GET"],
    credentials: true
  }
));

// TODO : express body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO : using CookieParser
app.use(cookieParser());

// !----------------------------------------------------

// TODO : index routes file is placed here
app.use("/api/v1/", indexRoutes);

//?------------------------------------------
// TODO for response error
//?------------------------------------------
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

app.listen(8000, () => {
  console.log("server is running on port " + 8000);
});
