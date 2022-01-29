module.exports = () => {
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = (dataAtual.getMonth() + 1);
  const ano = dataAtual.getFullYear();
  const date = `${dia}-${mes}-${ano}`;
  return date;
};
