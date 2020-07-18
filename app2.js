const MongoClient = require('mongodb').MongoClient;
const fetch = require('node-fetch');

const URL = 'mongodb://localhost:27017';
const URL_API = 'https://restcountries.eu/rest/v2/name/';

const main = async l => {
    let client = await MongoClient.connect(URL,{ useUnifiedTopology: true });
    let db = client.db('Country');


    let country = await db.collection('country_names').find({}).toArray();
    try{
        for(i = 0; i < country.length; i++){
            let response = await fetch(URL_API + country[i].name);
            const pays = await response.json();
            // question to ask choose "insert" or "insertMany"
            db.collection('country_full_data').insertMany(pays);
          }
    } catch(e){
        console.log(e);
    } finally{
        console.log("!==>  Succes Country Full Data has been created  <==!");
        client.close();
    }
    
};

main();