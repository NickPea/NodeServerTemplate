
export function seed(knex) {
  return knex('table_name').del() // Deletes ALL existing entries
    .then(function () {
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
