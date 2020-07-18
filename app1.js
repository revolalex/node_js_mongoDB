const MongoCLient = require("mongodb").MongoClient;
const fs = require("fs").promises;
const url = "mongodb://localhost:27017";

const main = async () => {
  let countryName = await fs.readFile("./country_names.json");
  let countryNameParse = JSON.parse(countryName);

  let client = await MongoCLient.connect(url, { useUnifiedTopology: true });
  let dataBase = client.db("Country");

  for (let index = 0; index < countryNameParse.length; index++) {
    dataBase
      .collection("country_names")
      .insertOne({ name: countryNameParse[index] });
  }
  let stopClient = () => {
    client.close();
  };
  console.log("!==>  Succes Country Name has been created  <==!");
  setTimeout(stopClient, 1500);
};
main();
