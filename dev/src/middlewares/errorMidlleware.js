module.exports = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  console.log('middleware de erro: ', err);
  return res.status(500).json({ message: 'Internal Server Error' });
};
