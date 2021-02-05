'use strict'

module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funchelloworldPOST'
  });
};
'use strict'

module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  res.send({
    message: 'Hello '+req.undefined.value.name
  });
};