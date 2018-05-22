const flat = require('flat');

module.exports.unflatten = (array) => {

  //  apply unflatten
  array = array.map((element) => {
    return flat.unflatten(element, { maxDepth: 2 });
  });

  //  unflat
  array.forEach((item, i) => {
    //console.log('---> item ', i);
    Object.keys(item).forEach((key) => {
      if(/\[([^)]+)\]/.test(key)) {
        if(!item[key.split('[')[0]]) {
          item[key.split('[')[0]] = [];
        }
        item[key.split('[')[0]].push(item[key]);
        delete item[key];
      }
    });
  });
  return array;
}