const MongoClient = require("mongodb").MongoClient;
const fetch = require("node-fetch");

const URL = "mongodb://localhost:27017";
const URL_API = "https://restcountries.eu/rest/v2/name/";

const main = async () => {
  const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
  const dataBase = client.db("Country");

  const country = await dataBase.collection("country_names").find({}).toArray();
  
  try {
    console.log("This process will take arround 40s...");
    for (i = 0; i < country.length; i++) {
      let response = await fetch(URL_API + country[i].name);
      let pays = await response.json();
      // question to ask choose "insert" or "insertMany"
      dataBase.collection("country_full_data").insertMany(pays);
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log("!==>  Succes Country Full Data has been created  <==!");
    client.close();
  }
};

main();
