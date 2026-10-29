const { createReadOnlyRepository } = require('../utils/createRepository');
const columns = require('./cxpdto.columns');

module.exports = createReadOnlyRepository({
  table: 'dbo.v_fc_cxpdto',
  columns,
  searchColumns: ['nombre', 'ci', 'dtoautprv', 'docobserv'],
});
