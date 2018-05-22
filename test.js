const un = require('./index');

const result = un.unflatten([
  {
    'cartaoId': 1,
    'datas[0].data': new Date(),
    'datas[0].qtd': 3,
    'datas[1].data': new Date(),
    'datas[1].qtd': 4,
    'datas[2].data': new Date(),
    'datas[2].qtd': 4,
    
  },
  {
    cartaoId: 2,
    'datas[0].data': new Date(),
    'datas[0].qtd': 4,
  },
]);

console.log(result);

