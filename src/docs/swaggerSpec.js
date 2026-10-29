const genperColumns = require('../models/genper.columns');
const genpclColumns = require('../models/genpcl.columns');
const planesTvnetResColumns = require('../models/planesTvnetRes.columns');
const libroMayorColumns = require('../models/libroMayor.columns');
const cxcdtoColumns = require('../models/cxcdto.columns');
const cxcpghColumns = require('../models/cxcpgh.columns');
const cxpdtoColumns = require('../models/cxpdto.columns');
const { toSwaggerSchema } = require('./schemaFromColumns');
const { buildResourcePaths, buildReadOnlyListPath } = require('./buildResourcePaths');

const genperPaths = buildResourcePaths({
  resourcePath: 'genper',
  tag: 'Genper (Personas)',
  componentPrefix: 'Genper',
  pkName: 'percodigo',
  pkSchema: { type: 'number' },
  singularLabel: 'Persona',
  filterParams: [
    { name: 'percodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de persona' },
    { name: 'pernumid', in: 'query', schema: { type: 'string' }, description: 'Filtrar por numero de identificacion' },
    { name: 'orgcodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de organizacion' },
    { name: 'ciucodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de ciudad' },
    { name: 'perescli', in: 'query', schema: { type: 'boolean' }, description: 'Filtrar personas que son cliente' },
    { name: 'perespro', in: 'query', schema: { type: 'boolean' }, description: 'Filtrar personas que son proveedor' },
    { name: 'peresemp', in: 'query', schema: { type: 'boolean' }, description: 'Filtrar personas que son empleado' },
  ],
});

const genpclPaths = buildResourcePaths({
  resourcePath: 'genpcl',
  tag: 'Genpcl (Clientes)',
  componentPrefix: 'Genpcl',
  pkName: 'percodigo',
  pkSchema: { type: 'number' },
  singularLabel: 'Cliente',
  filterParams: [
    { name: 'percodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de persona/cliente' },
    { name: 'zoncodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de zona' },
    { name: 'pvecodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de vendedor' },
    { name: 'pclsuspendido', in: 'query', schema: { type: 'boolean' }, description: 'Filtrar por clientes suspendidos' },
    { name: 'esccodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de escala' },
  ],
});

const planesTvnetResPaths = buildReadOnlyListPath({
  resourcePath: 'planestvnetres',
  tag: 'PlanesTvnetRes (Resumen de planes)',
  componentPrefix: 'PlanesTvnetRes',
  singularLabel: 'Resumen de planes por cliente/direccion',
  filterParams: [
    { name: 'percodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de cliente' },
    { name: 'addcodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de direccion' },
  ],
});

const libroMayorPaths = buildReadOnlyListPath({
  resourcePath: 'libromayor',
  tag: 'LibroMayor (Movimientos contables)',
  componentPrefix: 'LibroMayor',
  singularLabel: 'Movimientos del libro mayor',
  filterParams: [
    { name: 'Acceso', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de acceso del comprobante' },
    { name: 'DetAcceso', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de acceso de la linea' },
    { name: 'percodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de persona relacionada' },
    { name: 'CompCbleCodSuc', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de sucursal' },
    { name: 'CompCbleAnio', in: 'query', schema: { type: 'number' }, description: 'Filtrar por anio del comprobante' },
    { name: 'CompCbleMes', in: 'query', schema: { type: 'number' }, description: 'Filtrar por mes del comprobante' },
  ],
});

const cxcdtoPaths = buildReadOnlyListPath({
  resourcePath: 'cxcdto',
  tag: 'CxcDto (Documentos CxC)',
  componentPrefix: 'CxcDto',
  singularLabel: 'Documento de cuentas por cobrar',
  filterParams: [
    { name: 'docacceso', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de acceso del documento' },
    { name: 'percodcli', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de cliente' },
    { name: 'tdocodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por tipo de documento' },
    { name: 'succodori', in: 'query', schema: { type: 'number' }, description: 'Filtrar por sucursal de origen' },
    { name: 'docanio', in: 'query', schema: { type: 'number' }, description: 'Filtrar por anio del documento' },
    { name: 'docmes', in: 'query', schema: { type: 'number' }, description: 'Filtrar por mes del documento' },
    { name: 'docanul', in: 'query', schema: { type: 'string' }, description: 'Filtrar por documentos anulados (S/N)' },
  ],
});

const cxcpghPaths = buildReadOnlyListPath({
  resourcePath: 'cxcpgh',
  tag: 'CxcPgh (Pagos CxC)',
  componentPrefix: 'CxcPgh',
  singularLabel: 'Encabezado de pago/recibo de cuentas por cobrar',
  filterParams: [
    { name: 'docacceso', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de acceso del documento' },
    { name: 'percodcli', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de cliente' },
    { name: 'tdocodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por tipo de documento' },
    { name: 'succodori', in: 'query', schema: { type: 'number' }, description: 'Filtrar por sucursal de origen' },
    { name: 'docanio', in: 'query', schema: { type: 'number' }, description: 'Filtrar por anio del documento' },
    { name: 'docmes', in: 'query', schema: { type: 'number' }, description: 'Filtrar por mes del documento' },
    { name: 'docanul', in: 'query', schema: { type: 'string' }, description: 'Filtrar por documentos anulados (S/N)' },
  ],
});

const cxpdtoPaths = buildReadOnlyListPath({
  resourcePath: 'cxpdto',
  tag: 'CxpDto (Documentos CxP)',
  componentPrefix: 'CxpDto',
  singularLabel: 'Documento de cuentas por pagar',
  filterParams: [
    { name: 'docacceso', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de acceso del documento' },
    { name: 'percodcli', in: 'query', schema: { type: 'number' }, description: 'Filtrar por codigo de proveedor' },
    { name: 'tdocodigo', in: 'query', schema: { type: 'number' }, description: 'Filtrar por tipo de documento' },
    { name: 'succodori', in: 'query', schema: { type: 'number' }, description: 'Filtrar por sucursal de origen' },
    { name: 'docanio', in: 'query', schema: { type: 'number' }, description: 'Filtrar por anio del documento' },
    { name: 'docmes', in: 'query', schema: { type: 'number' }, description: 'Filtrar por mes del documento' },
    { name: 'docanul', in: 'query', schema: { type: 'string' }, description: 'Filtrar por documentos anulados (S/N)' },
  ],
});

module.exports = {
  openapi: '3.0.3',
  info: {
    title: 'Nigisu API',
    version: '1.0.0',
    description:
      'API REST sobre la base de datos de Nigisu (SQL Anywhere, DSN "sql sytsaq"). ' +
      'Entidades expuestas: genper00 (Personas), genpcl00 (Clientes, extension 1 a 1 ' +
      'de una persona via percodigo), y las vistas de solo lectura v_Fc_PlanesTvnetRes ' +
      '(resumen de planes por cliente/direccion), v_fc_LibroMayor (movimientos contables), ' +
      'v_fc_cxcdto (documentos de cuentas por cobrar), v_fc_cxcpgh (pagos/recibos de ' +
      'cuentas por cobrar) y v_fc_cxpdto (documentos de cuentas por pagar).',
  },
  servers: [{ url: '/api/v1', description: 'Servidor local' }],
  tags: [
    { name: 'Genper (Personas)' },
    { name: 'Genpcl (Clientes)' },
    { name: 'PlanesTvnetRes (Resumen de planes)' },
    { name: 'LibroMayor (Movimientos contables)' },
    { name: 'CxcDto (Documentos CxC)' },
    { name: 'CxcPgh (Pagos CxC)' },
    { name: 'CxpDto (Documentos CxP)' },
  ],
  paths: {
    ...genperPaths,
    ...genpclPaths,
    ...planesTvnetResPaths,
    ...libroMayorPaths,
    ...cxcdtoPaths,
    ...cxcpghPaths,
    ...cxpdtoPaths,
  },
  components: {
    schemas: {
      Genper: toSwaggerSchema(genperColumns, { mode: 'read' }),
      GenperInput: toSwaggerSchema(genperColumns, { mode: 'create' }),
      GenperUpdate: toSwaggerSchema(genperColumns, { mode: 'update' }),
      Genpcl: toSwaggerSchema(genpclColumns, { mode: 'read' }),
      GenpclInput: toSwaggerSchema(genpclColumns, { mode: 'create' }),
      GenpclUpdate: toSwaggerSchema(genpclColumns, { mode: 'update' }),
      PlanesTvnetRes: toSwaggerSchema(planesTvnetResColumns, { mode: 'read' }),
      LibroMayor: toSwaggerSchema(libroMayorColumns, { mode: 'read' }),
      CxcDto: toSwaggerSchema(cxcdtoColumns, { mode: 'read' }),
      CxcPgh: toSwaggerSchema(cxcpghColumns, { mode: 'read' }),
      CxpDto: toSwaggerSchema(cxpdtoColumns, { mode: 'read' }),
      PaginationMeta: {
        type: 'object',
        properties: {
          page: { type: 'integer' },
          pageSize: { type: 'integer' },
          total: { type: 'integer' },
          totalPages: { type: 'integer' },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          details: { type: 'array', items: { type: 'string' } },
        },
      },
    },
  },
};
