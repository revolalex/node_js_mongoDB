const MongoCLient = require("mongodb").MongoClient;
const fs = require("fs").promises;
const url = "mongodb://localhost:27017";

const main = async () => {
  const countryName = await fs.readFile("./country_names.json");
  const countryNameParse = JSON.parse(countryName);

  const client = await MongoCLient.connect(url, { useUnifiedTopology: true });
  const dataBase = client.db("Country");


  try {
    for (let index = 0; index < countryNameParse.length; index++) {
      await dataBase
        .collection("country_names")
        .insertOne({ name: countryNameParse[index] });
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("!==>  Succes Country Name has been created  <==!");
    client.close();
  }
};
main();
