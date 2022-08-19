const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(database);
const database = require('./db/database.sqlite');
const { createCitiesTable, createNeighborhoodsTable, createStatesTable, createAddressesTable } = require('./tables/tables.js');

async function main() {
  await createCitiesTable();
  await createNeighborhoodsTable();
  await createStatesTable();
  await createAddressesTable();
  db.close();
}
   
main();
