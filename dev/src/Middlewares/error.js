const error = (err, _req, res, _next) => {
  if (err.status) {
    const {status, message} = err;

    return res.status(status).json({message});
  }

  console.log(err, 'log de erro');

  return res.status(500).json({message: 'Internal Error'});
};

module.exports = {error};
