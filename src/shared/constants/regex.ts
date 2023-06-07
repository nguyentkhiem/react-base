export const regex = {
  number: new RegExp('^d+$'),
  numberDecimal: new RegExp('/^d*(.d+)?$/'),
  emailAddress: new RegExp('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'),
  notEmpty: new RegExp('/S+/'),
  url: new RegExp('[a-zA-z]+://[^\\s]*'),
  phone: new RegExp('^\\d{9}$'),
};
