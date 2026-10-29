// Metadata de la vista dbo.v_fc_cxcpgh (encabezado de recibos/pagos de
// Cuentas por Cobrar: cobros recibidos de clientes, con el detalle de forma
// de pago y retenciones). Obtenida directamente del catalogo ODBC
// (SQLColumns) via la DSN 'sql sytsaq'.
// Es una vista de solo lectura: no tiene llave primaria y no admite
// INSERT/UPDATE/DELETE.
module.exports = [
  { name: 'docacceso', type: 'number', readOnly: true, description: 'Codigo de acceso del documento de pago' },
  { name: 'succodori', type: 'number', readOnly: true, description: 'Codigo de la sucursal de origen' },
  { name: 'tdocodigo', type: 'number', readOnly: true, description: 'Codigo del tipo de documento' },
  { name: 'docnumero', type: 'number', readOnly: true, description: 'Numero del documento' },
  { name: 'percodcli', type: 'number', readOnly: true, description: 'Codigo del cliente' },
  { name: 'docfecha', type: 'date', readOnly: true, description: 'Fecha del documento' },
  { name: 'moncodigo', type: 'number', readOnly: true, description: 'Codigo de moneda' },
  { name: 'docanul', type: 'string', length: 1, readOnly: true, description: 'Documento anulado (S/N)' },
  { name: 'empcodigo', type: 'number', readOnly: true, description: 'Codigo de empresa' },
  { name: 'sucnombre', type: 'string', length: 30, readOnly: true, description: 'Nombre de la sucursal' },
  { name: 'tdoshort', type: 'string', length: 3, readOnly: true, description: 'Codigo corto del tipo de documento' },
  { name: 'tdonombre', type: 'string', length: 50, readOnly: true, description: 'Nombre del tipo de documento' },
  { name: 'monnombre', type: 'string', length: 30, readOnly: true, description: 'Nombre de la moneda' },
  { name: 'monnemoni', type: 'string', length: 3, readOnly: true, description: 'Nemonico de la moneda' },
  { name: 'docnumref', type: 'string', length: 100, readOnly: true, description: 'Numero de referencia del documento' },
  { name: 'percodigo', type: 'number', readOnly: true, description: 'Codigo de la persona relacionada' },
  { name: 'pghtotcobr', type: 'number', readOnly: true, description: 'Valor total cobrado' },
  { name: 'ValEfectivo', type: 'number', readOnly: true, description: 'Valor pagado en efectivo' },
  { name: 'ValCheque', type: 'number', readOnly: true, description: 'Valor pagado con cheque' },
  { name: 'ValTc', type: 'number', readOnly: true, description: 'Valor pagado con tarjeta de credito' },
  { name: 'ValTransferencia', type: 'number', readOnly: true, description: 'Valor pagado por transferencia' },
  { name: 'ValOtros', type: 'number', readOnly: true, description: 'Valor pagado por otros medios' },
  { name: 'pghtotnetb', type: 'number', readOnly: true, description: 'Valor neto del pago' },
  { name: 'pghRetIva', type: 'number', readOnly: true, description: 'Retencion de IVA aplicada' },
  { name: 'pghRetFue', type: 'number', readOnly: true, description: 'Retencion en la fuente aplicada' },
  { name: 'pghretotr', type: 'number', readOnly: true, description: 'Otras retenciones aplicadas' },
  { name: 'tdosigno', type: 'number', readOnly: true, description: 'Signo del tipo de documento (+1/-1)' },
  { name: 'docfechas', type: 'string', length: 10, readOnly: true, description: 'Fecha del documento en formato texto' },
  { name: 'docanio', type: 'number', readOnly: true, description: 'Anio del documento' },
  { name: 'docmes', type: 'number', readOnly: true, description: 'Mes del documento' },
  { name: 'hcbacceso', type: 'number', readOnly: true, description: 'Codigo de acceso del comprobante contable relacionado' },
  { name: 'docobserv', type: 'string', length: 500, readOnly: true, description: 'Observaciones del documento' },
];
