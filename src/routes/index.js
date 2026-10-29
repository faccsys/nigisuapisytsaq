const express = require('express');
const genperRoutes = require('./genper.routes');
const genpclRoutes = require('./genpcl.routes');
const planesTvnetResRoutes = require('./planesTvnetRes.routes');
const libroMayorRoutes = require('./libroMayor.routes');
const cxcdtoRoutes = require('./cxcdto.routes');
const cxcpghRoutes = require('./cxcpgh.routes');
const cxpdtoRoutes = require('./cxpdto.routes');

const router = express.Router();

router.use('/genper', genperRoutes);
router.use('/genpcl', genpclRoutes);
router.use('/planestvnetres', planesTvnetResRoutes);
router.use('/libromayor', libroMayorRoutes);
router.use('/cxcdto', cxcdtoRoutes);
router.use('/cxcpgh', cxcpghRoutes);
router.use('/cxpdto', cxpdtoRoutes);

module.exports = router;
