// module
const MongoClient = require("mongodb").MongoClient;

// variable
const URL = "mongodb://localhost:27017";

const main = async () => {
  const client = await MongoClient.connect(URL, { useUnifiedTopology: true });
  const dataBase = client.db("Country");

  try {
    // Region ----------------------------------------------------------
    // -----------------------------------------------------------------
    /**
     * @summary search in MangoDB collection "country_full_data" a region, and create a collection for this region containing all the countries of the region
     * @param {*} region
     */
    const addregion = async (region) => {
      try {
        let regionToAdd = await dataBase
          .collection("country_full_data")
          .find({ region: region })
          .toArray();
        dataBase.collection(region).insertMany(regionToAdd);
      } catch (error) {
        console.log(error);
      }
    };

    const arrayOfRegion = ["Europe", "Africa", "Asia", "Oceania", "Polar"];

    for (const region of arrayOfRegion) {
      await addregion(region);
    }
    // subRegion -------------------------------------------------------
    // -----------------------------------------------------------------
    /**
     * @summary search in MangoDB collection "country_full_data" a subregion, and create a collection for this subregion containing all the countries of the subregion
     * @param {*} subregion
     */
    const addsubregion = async (subregion) => {
      try {
        let subregionToAdd = await dataBase
          .collection("country_full_data")
          .find({ subregion: subregion })
          .toArray();
        dataBase.collection(subregion).insertMany(subregionToAdd);
      } catch (error) {
        console.log(error);
      }
    };

    const arrayOfsubregion = [
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
    client.close();
  }
};

main();
