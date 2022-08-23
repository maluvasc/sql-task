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

const createCitiesTable = async () => {
const cities = "CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, area DOUBLE NOT NULL);"; 
 db.run(cities, callback);
};

const createNeighborhoodsTable = async () => {
const neighborhoods = `CREATE TABLE IF NOT EXISTS neighborhoods (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL);`;
    db.run(neighborhoods, callback);
};

const createStatesTable = async () => {
const states = `CREATE TABLE IF NOT EXISTS states (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, initial VARCHAR(255) NOT NULL, region VARCHAR(255) NOT NULL);`;
    db.run(states, callback);
};

const createAddressesTable = async () => {
const addresses = `CREATE TABLE IF NOT EXISTS addresses (id INTEGER PRIMARY KEY AUTOINCREMENT, address VARCHAR(255) NOT NULL, complement VARCHAR(255), number VARCHAR(45) NOT NULL);`;
    db.run(addresses, callback);
};

module.exports = {
    createCitiesTable,
    createNeighborhoodsTable,
    createStatesTable,
    createAddressesTable,
};