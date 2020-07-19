const MongoClient = require("mongodb").MongoClient;
const fetch = require("node-fetch");

const URL = "mongodb://localhost:27017";
const API_URL = "https://restcountries.eu/rest/v2/name/";

const main = async () => {
  const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
  const dataBase = client.db("Country");

  const countries = await dataBase
    .collection("country_names")
    .find({})
    .toArray();

  try {
    const datas = await Promise.all(fecthCountriesData(countries));
    //  create an array that don't contains another array
    let data = datas.map((element) => element[0]);
    
    dataBase.collection("country_full_data").insertMany(data);

  } catch (e) {
    console.log(e);
  } finally {
    console.log("!==>  Succes Country Full Data has been created  <==!");
    client.close();
  }
};

main();
/**
 * @summary loop through all the countries and fetch all the information, then push them in an array
 * @param {*} countriesList 
 * @returns an array containing all the countries with full data
 */
let fecthCountriesData = (countriesList) => {
  let countriesWithData = [];
  for (country of countriesList) {
    countriesWithData.push(
      fetch(API_URL + country.name).then((res) => res.json())
    );
  }
  return countriesWithData;
};
