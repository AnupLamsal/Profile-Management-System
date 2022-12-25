const mongoose = require("mongoose");
const app = require("./app");

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on PORT ${PORT} / MongoDB Connected`)
    );
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
