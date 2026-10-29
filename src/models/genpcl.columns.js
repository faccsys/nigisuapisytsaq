// Metadata de la tabla genpcl00 (Clientes), obtenida directamente del catalogo
// ODBC (SQLColumns) via la DSN 'sql sytsaq'.
// genpcl00 extiende a genper00 1 a 1: percodigo es PK y a la vez FK hacia
// genper00.percodigo (todo cliente es una persona previamente creada).
// A diferencia de otras instalaciones de esta base, esta DSN no tiene los
// campos de "plan contratado" (pclvalplan, pclfecinstalacion, etc.) ni las
// columnas de auditoria (usralt/usrchg/fecalt/fecchg) en esta tabla.
// Todas las columnas NOT NULL de esta tabla, salvo percodigo, tienen un
// default en la base de datos, por lo que no son 'required' en el API.
module.exports = [
  { name: 'percodigo', type: 'number', pk: true, required: true, description: 'Codigo de la persona (FK genper00.percodigo)' },
  { name: 'pvtcodigo', type: 'number', description: 'Codigo de pais/provincia de venta' },
  { name: 'pemcodigo', type: 'number', description: 'Codigo de metodo de pago' },
  { name: 'pvecodigo', type: 'number', description: 'Codigo de vendedor' },
  { name: 'pclcontacto', type: 'string', length: 100, description: 'Nombre de contacto' },
  { name: 'pclfecdsde', type: 'date', description: 'Fecha cliente desde' },
  { name: 'pcllimcre', type: 'number', description: 'Limite de credito' },
  { name: 'pclsuspendido', type: 'boolean', description: 'Cliente suspendido' },
  { name: 'pclfecsus', type: 'date', description: 'Fecha de suspension' },
  { name: 'zoncodigo', type: 'number', description: 'Codigo de zona' },
  { name: 'tpmcodigo', type: 'number', description: 'Codigo de tipo de medio' },
  { name: 'tpscodigo', type: 'number', description: 'Codigo de tipo de servicio' },
  { name: 'pclt1', type: 'string', length: 30, description: 'Texto libre 1' },
  { name: 'pclt2', type: 'string', length: 30, description: 'Texto libre 2' },
  { name: 'percodcorp', type: 'number', description: 'Codigo de persona corporativa relacionada' },
  { name: 'pclcontacto1', type: 'string', length: 100, description: 'Contacto adicional 1' },
  { name: 'pcltelefono1', type: 'string', length: 15, description: 'Telefono del contacto 1' },
  { name: 'pclcontacto2', type: 'string', length: 100, description: 'Contacto adicional 2' },
  { name: 'pcltelefono2', type: 'string', length: 15, description: 'Telefono del contacto 2' },
  { name: 'pcltelefono', type: 'string', length: 15, description: 'Telefono principal del cliente' },
  { name: 'pclfacturar', type: 'string', length: 1, description: 'Facturar (S/N)' },
  { name: 'pclnofacd', type: 'date', description: 'No facturar desde' },
  { name: 'pclnofach', type: 'date', description: 'No facturar hasta' },
  { name: 'pcldireccion1', type: 'string', length: 100, description: 'Direccion de facturacion 1' },
  { name: 'pclfireccion2', type: 'string', length: 100, description: 'Direccion de facturacion 2' },
  { name: 'pcldireccion', type: 'string', length: 100, description: 'Direccion del cliente' },
  { name: 'pclforpag', type: 'string', length: 3, description: 'Forma de pago (ej. REC)' },
  { name: 'pclclicta', type: 'string', length: 20, description: 'Numero de cuenta del cliente' },
  { name: 'pcltipcta', type: 'string', length: 3, description: 'Tipo de cuenta' },
  { name: 'bcocodigo', type: 'number', description: 'Codigo de banco' },
  { name: 'esccodigo', type: 'number', description: 'Codigo de escala/categoria' },
  { name: 'pclprecio', type: 'number', description: 'Nivel de precio' },
  { name: 'rutcodigo', type: 'number', description: 'Codigo de ruta' },
  { name: 'sctcodigo', type: 'number', description: 'Codigo de sector/sub-categoria' },
  { name: 'pclcodasesor', type: 'string', length: 10, description: 'Codigo de asesor' },
  { name: 'pclsecuencia', type: 'number', description: 'Secuencia' },
  { name: 'peremaildocumentoselec', type: 'string', length: 100, description: 'Email para documentos electronicos' },
  { name: 'pcltipologia', type: 'number', description: 'Tipologia del cliente' },
  { name: 'pclrelacionado', type: 'string', length: 1, description: 'Cliente relacionado (S/N)' },
  { name: 'pclfecnac', type: 'date', description: 'Fecha de nacimiento' },
  { name: 'pclenviapdfjv', type: 'string', length: 1, description: 'Envia PDF/JV (S/N)' },
  { name: 'descodigorating', type: 'number', description: 'Codigo de rating (FK gendes)' },
  { name: 'pelcodigo', type: 'number', description: 'Codigo de elemento relacionado' },
];
