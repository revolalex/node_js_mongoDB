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
    // Region ----------------------------------------------------------
    // -----------------------------------------------------------------
    let addregion = async (region) => {
      try {
        let regionToAdd = await database
          .collection("country_full_data")
          .find({ region: region })
          .toArray();
        database.collection(region).insertMany(regionToAdd);
      } catch (error) {
        console.log(error);
      }
    };

    let arrayOfRegion = ["Europe", "Africa", "Asia", "Oceania", "Polar"];

    for (const region of arrayOfRegion) {
      await addregion(region);
    }

    // subRegion -------------------------------------------------------
    // -----------------------------------------------------------------
    let addsubregion = async (subregion) => {
      try {
        let subregionToAdd = await database
          .collection("country_full_data")
          .find({ subregion: subregion })
          .toArray();
        database.collection(subregion).insertMany(subregionToAdd);
      } catch (error) {
        console.log(error);
      }
    };
    let arrayOfsubregion = [
      "South America",
      "Caribbean",
      "Northern America",
      "Central America",
    ];
    for (const subregion of arrayOfsubregion) {
      await addsubregion(subregion);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("!==>  Succes Region and SubRegion has been created  <==!");
    connect.close();
  }
};

main();
