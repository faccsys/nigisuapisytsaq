const { createReadOnlyRepository } = require('../utils/createRepository');
const columns = require('./libroMayor.columns');

module.exports = createReadOnlyRepository({
  table: 'dbo.v_fc_LibroMayor',
  columns,
  searchColumns: ['DetPlaCodigo', 'DepPlaNombre', 'nombre', 'ci'],
});
