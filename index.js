const { createCitiesTable, createNeighborhoodsTable, createStatesTable, createAddressesTable } = require('./tables/tables.js');

async function main() {
  await createStatesTable();
  await createCitiesTable();
  await createNeighborhoodsTable();
  await createAddressesTable();
}
   
main();
