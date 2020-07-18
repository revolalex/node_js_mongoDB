
// //Region -------------------------------------------------------
// // -----------------------------------------------------------------
// let createRegion = async (regionToCreate) => {
//   //Europe
//   let regionCr = await database
//     .collection("country_full_data")
//     .find({ region: regionToCreate })
//     .toArray();
//   database.collection(regionToCreate).insertMany(regionCr);
// };

// let tempRegion1 = "Europe";
// createRegion(tempRegion1);

// let tempRegion2 = "Africa";
// createRegion(tempRegion2);

// let tempRegion3 = "Asia";
// createRegion(tempRegion3);

// let tempRegion4 = "Oceania";
// createRegion(tempRegion4);

// let tempRegion5 = "Polar";
// createRegion(tempRegion5);

// // subRegion -------------------------------------------------------
// // -----------------------------------------------------------------
// let createSubRegion = async (subRegionToCreate) => {
//   // South America
//   let subRegionToInsert = await database
//     .collection("country_full_data")
//     .find({ subregion: subRegionToCreate })
//     .toArray();
//   database.collection(subRegionToCreate).insertMany(subRegionToInsert);
// };

// let tempSubRegion = "South America";
// createSubRegion(tempSubRegion);

// let tempSubRegion2 = "Caribbean";
// createSubRegion(tempSubRegion2);

// let tempSubRegion3 = "Northern America";
// createSubRegion(tempSubRegion3);

// let tempSubRegion4 = "Central America";
// createSubRegion(tempSubRegion4);
