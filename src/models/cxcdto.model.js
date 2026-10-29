const { createReadOnlyRepository } = require('../utils/createRepository');
const columns = require('./cxcdto.columns');

module.exports = createReadOnlyRepository({
  table: 'dbo.v_fc_cxcdto',
  columns,
  searchColumns: ['docnumref', 'docserie', 'docobserv'],
});
