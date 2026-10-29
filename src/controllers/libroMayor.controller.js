const { createReadOnlyController } = require('./createController');
const model = require('../models/libroMayor.model');

module.exports = createReadOnlyController(model, {
  filterKeys: ['Acceso', 'DetAcceso', 'percodigo', 'CompCbleCodSuc', 'CompCbleAnio', 'CompCbleMes'],
});
