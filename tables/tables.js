const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(database);
const database = require('./db/database.sqlite');

const callback = (err, res) => {
if(err){
    console.error(err);
} else {
    console.log("alright!")
}
};

const createCitiesTable = async () => {
    const cities = `
     CREATE TABLE IF NOT EXISTS cities (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name VARCHAR(255) NOT NULL,
     area DOUBLE NOT NULL,

     CONSTRAINT FK_cities_state FOREIGN KEY (state_id) REFERENCES states(id),
    );
    ` 
    db.run(cities, callback);
};

const createNeighborhoodsTable = async () => {
    const neighborhoods = `
    CREATE TABLE IF NOT EXISTS neighborhoods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,

    CONSTRAINT FK_neighborhoods_cities FOREIGN KEY (city_id) REFERENCES cities(id),
    );
    `;
    db.run(neighborhoods, callback);
};

const createStatesTable = async () => {
    const states = `
    CREATE TABLE IF NOT EXISTS states (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    initial VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    );
    `;
    db.run(states, callback);
};

const createAddressesTable = async () => {
    const addresses = `
    CREATE TABLE IF NOT EXISTS addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    number VARCHAR(45) NOT NULL,

    CONSTRAINT FK_addresses_neighborhood FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id),
    );
    `
    db.run(addresses, callback);
};

module.exports = {
    createCitiesTable,
    createNeighborhoodsTable,
    createStatesTable,
    createAddressesTable,
};