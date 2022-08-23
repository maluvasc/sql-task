const path = require('path')
const sqlite = require('sqlite3').verbose();
const database = path.join(__dirname, "..", "db","database.sqlite")
const db = new sqlite.Database(database);

const callback = (err) => {
if(err){
    console.error(err);
} else {
    console.log("alright!");
}
};

const createStatesTable = async () => {
const states = `CREATE TABLE IF NOT EXISTS states (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, initial VARCHAR(255) NOT NULL, region VARCHAR(255) NOT NULL);`;
db.run(states, callback);
 };    

const createCitiesTable = async () => {
const cities = "CREATE TABLE IF NOT EXISTS cities (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, area DOUBLE NOT NULL, state_id INTEGER NOT NULL, CONSTRAINT FK_states_cities FOREIGN KEY (state_id) REFERENCES states(id));"; 
db.run(cities, callback);
};

const createNeighborhoodsTable = async () => {
const neighborhoods = `CREATE TABLE IF NOT EXISTS neighborhoods (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, city_id INTEGER NOT NULL, CONSTRAINT FK_cities_neighborhood FOREIGN KEY (city_id) REFERENCES cities(id));`;
db.run(neighborhoods, callback);
};

const createAddressesTable = async () => {
const addresses = `CREATE TABLE IF NOT EXISTS addresses (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, address VARCHAR(255) NOT NULL, complement VARCHAR(255), number VARCHAR(45) NOT NULL, neighborhood_id INTEGER NOT NULL, CONSTRAINT FK_neighborhood_addresses FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id));`;
db.run(addresses, callback);
};

module.exports = {
    createCitiesTable,
    createNeighborhoodsTable,
    createStatesTable,
    createAddressesTable,
};