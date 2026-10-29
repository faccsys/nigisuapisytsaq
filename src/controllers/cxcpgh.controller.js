const { createReadOnlyController } = require('./createController');
const model = require('../models/cxcpgh.model');

module.exports = createReadOnlyController(model, {
  filterKeys: ['docacceso', 'percodcli', 'tdocodigo', 'succodori', 'docanio', 'docmes', 'docanul'],
});
