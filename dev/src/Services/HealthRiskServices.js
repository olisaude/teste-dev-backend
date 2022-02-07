// const {ObjectId} = require('mongodb');
const {healthRisk, creatScore} = require('../Models/HealthRiskModel');
const {listClients} = require('../Models/ListClientsModel');

const healthRiskServices = async () => {
  const clients = await listClients();
  // console.log(clients, 'LOG CLIENTS');

  for (i=0; i <= clients.length -1; i++) {
    // console.log('entrei no 1 for');
    let sd = 0;
    for (index=0; index <= clients[i].healthProblems.length - 1; index++) {
      // console.log('entrei no 2 for');
      if (typeof clients[i].healthProblems[index] === 'number') {
        // console.log('entrei no IF');
        sd = sd + clients[i].healthProblems[index];
      };
    };
    const score = (1 / (1 + Math.E-(-2.8 + sd ))) * 100;
    await creatScore(clients[i]._id, score);
  };

  return await healthRisk();
};

module.exports = {
  healthRiskServices,
};

// Ref: https://pt.wikipedia.org/wiki/E_(constante_matem%C3%A1tica);
