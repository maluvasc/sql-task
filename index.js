const { createCitiesTable, createNeighborhoodsTable, createStatesTable, createAddressesTable } = require('./tables/tables.js');

async function main() {
  await createCitiesTable();
  await createNeighborhoodsTable();
  await createStatesTable();
  await createAddressesTable();
}
   
main();
