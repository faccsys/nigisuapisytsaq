// Metadata de la vista dbo.v_fc_LibroMayor (Libro Mayor contable: comprobantes
// y sus lineas de debito/credito, con la persona relacionada si aplica).
// Obtenida directamente del catalogo ODBC (SQLColumns) via la DSN 'sql sytsaq'.
// Es una vista de solo lectura: no tiene llave primaria y no admite
// INSERT/UPDATE/DELETE.
module.exports = [
  { name: 'Acceso', type: 'number', readOnly: true, description: 'Codigo de acceso del comprobante contable' },
  { name: 'CompCbleCodSuc', type: 'number', readOnly: true, description: 'Codigo de sucursal del comprobante' },
  { name: 'CompCbleNomSu', type: 'string', length: 30, readOnly: true, description: 'Nombre de la sucursal' },
  { name: 'CompCbleCodEmp', type: 'number', readOnly: true, description: 'Codigo de empresa del comprobante' },
  { name: 'CompCbleNomEmp', type: 'string', length: 60, readOnly: true, description: 'Nombre de la empresa' },
  { name: 'CompCobleCodTdo', type: 'number', readOnly: true, description: 'Codigo del tipo de documento del comprobante' },
  { name: 'CompCbleTds', type: 'string', length: 3, readOnly: true, description: 'Codigo corto del tipo de documento' },
  { name: 'CompCbleTdNom', type: 'string', length: 50, readOnly: true, description: 'Nombre del tipo de documento' },
  { name: 'CompCbleNumero', type: 'number', readOnly: true, description: 'Numero del comprobante' },
  { name: 'CompCbleFecha', type: 'date', readOnly: true, description: 'Fecha del comprobante' },
  { name: 'CompCbleFechas', type: 'string', length: 10, readOnly: true, description: 'Fecha del comprobante en formato texto' },
  { name: 'CompCbleAnio', type: 'number', readOnly: true, description: 'Anio del comprobante' },
  { name: 'CompCbleMes', type: 'number', readOnly: true, description: 'Mes del comprobante' },
  { name: 'CompCbleSemana', type: 'number', readOnly: true, description: 'Semana del comprobante' },
  { name: 'CompCblendia', type: 'number', readOnly: true, description: 'Dia del comprobante' },
  { name: 'CompCbleTrimestre', type: 'number', readOnly: true, description: 'Trimestre del comprobante' },
  { name: 'DetAcceso', type: 'number', readOnly: true, description: 'Codigo de acceso de la linea del comprobante' },
  { name: 'DetPlaAcc', type: 'number', readOnly: true, description: 'Codigo de acceso de la cuenta del plan de cuentas' },
  { name: 'DetPlaCodigo', type: 'string', length: 500, readOnly: true, description: 'Codigo de la cuenta contable' },
  { name: 'DepPlaNombre', type: 'string', length: 1000, readOnly: true, description: 'Nombre de la cuenta contable' },
  { name: 'DetValDebe', type: 'number', readOnly: true, description: 'Valor al debito de la linea' },
  { name: 'DetValHaber', type: 'number', readOnly: true, description: 'Valor al credito de la linea' },
  { name: 'DetCentroCosto', type: 'string', length: 5, readOnly: true, description: 'Codigo de centro de costo' },
  { name: 'DetProyecto', type: 'string', length: 2, readOnly: true, description: 'Codigo de proyecto' },
  { name: 'DetObervacion', type: 'string', length: 500, readOnly: true, description: 'Observacion de la linea' },
  { name: 'peracceso', type: 'number', readOnly: true, description: 'Codigo de acceso de la persona relacionada' },
  { name: 'percodigo', type: 'number', readOnly: true, description: 'Codigo de la persona/cliente relacionado (puede ser nulo)' },
  { name: 'nombre', type: 'string', length: 500, readOnly: true, description: 'Nombre de la persona relacionada' },
  { name: 'ci', type: 'string', length: 13, readOnly: true, description: 'Cedula/identificacion de la persona relacionada' },
];
