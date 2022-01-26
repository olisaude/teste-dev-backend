const listClients = require('../models/listClients');

module.exports = async () => {
  const clients = await listClients();

  const getCriticalClients = clients.map(client => {
    const problemSum = client.problems.reduce((acc, problem) => acc + problem.level, 0);

    const score = (1 / (1 + Math.pow(Math.E, -(2.8 + problemSum / client.problems.length)))) * 100;
    return {...client, problemSum: score}
  });


  return getCriticalClients.sort((a, b) => a.problemSum < b.problemSum ? 1 : -1).slice(0, 10);
};