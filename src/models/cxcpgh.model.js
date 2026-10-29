const { createReadOnlyRepository } = require('../utils/createRepository');
const columns = require('./cxcpgh.columns');

module.exports = createReadOnlyRepository({
  table: 'dbo.v_fc_cxcpgh',
  columns,
  searchColumns: ['docnumref', 'docobserv'],
});
