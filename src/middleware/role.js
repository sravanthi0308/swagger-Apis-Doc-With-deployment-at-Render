// src/middleware/role.js
module.exports = (allowedRoles = []) => (req, res, next) => {
  if (typeof allowedRoles === 'string') allowedRoles = [allowedRoles];
  if (!allowedRoles.length || allowedRoles.includes(req.user.role)) return next();
  return res.status(403).json({ message: 'Forbidden' });
};
