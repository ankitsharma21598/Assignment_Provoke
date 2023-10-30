const mongoose = require("mongoose");

//?------------------------------------------
// TODO : function for database connection
//?------------------------------------------
const DataBaseCon = async () => {
  try {
    const db_url = "mongodb+srv://ankitsharma21598:Pxj5n6XGxLiuDeNS@cluster0.r2q6ikg.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DataBaseCon;
