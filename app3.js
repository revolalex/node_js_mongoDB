/*
Step 4:
You must create a script who will create new collections (“Europe” “Asia”
“Africa” “Northern America” “Central America” “South America” “Caribbean”
“Oceania” “Polar”) and store the countries inside the collection with the right
continent name. (You could find “Europe” “Asia” “Africa” “Oceania” & “Polar” in
‘region’ field. And “Northern America” “South America” “Central America” &
“Caribbean” in ‘subregion’ field).
 */

// module
const MongoClient = require("mongodb").MongoClient;

// variable
const URL = "mongodb://localhost:27017";

const main = async () => {
  let connect = await MongoClient.connect(URL, { useUnifiedTopology: true });
  let database = connect.db("Country");

  try {
    //Europe
    let europeRegion = await database
      .collection("country_full_data")
      .find({ region: "Europe" })
      .toArray();
    database.collection("Europe").insertMany(europeRegion);

    // Africa
    let africaRegion = await database
      .collection("country_full_data")
      .find({ region: "Africa" })
      .toArray();
    database.collection("Africa").insertMany(africaRegion);

    // Asia
    let asiaRegion = await database
      .collection("country_full_data")
      .find({ region: "Asia" })
      .toArray();
    database.collection("Asia").insertMany(asiaRegion);

    // Oceania
    let oceaniaRegion = await database
      .collection("country_full_data")
      .find({ region: "Oceania" })
      .toArray();
    database.collection("Oceania").insertMany(oceaniaRegion);

    // Polar
    let polarRegion = await database
      .collection("country_full_data")
      .find({ region: "Polar" })
      .toArray();
    database.collection("Polar").insertMany(polarRegion);

    // South America
    let southAmericaSubregion = await database
      .collection("country_full_data")
      .find({ subregion: "South America" })
      .toArray();
    database.collection("South America").insertMany(southAmericaSubregion);

    // Caribbean
    let caribbeanSubregion = await database
      .collection("country_full_data")
      .find({ subregion: "Caribbean" })
      .toArray();
    database.collection("Caribbean").insertMany(caribbeanSubregion);

    // Northern America
    let northernAmericaSubregion = await database
      .collection("country_full_data")
      .find({ subregion: "Northern America" })
      .toArray();
    database
      .collection("Northern America")
      .insertMany(northernAmericaSubregion);

    // Central America
    let centralAmericaSubregion = await database
      .collection("country_full_data")
      .find({ subregion: "Central America" })
      .toArray();
    database.collection("Central America").insertMany(centralAmericaSubregion);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("!==>  Succes Region and SubRegion has been created <==!");
    connect.close();
  }
};

main();
