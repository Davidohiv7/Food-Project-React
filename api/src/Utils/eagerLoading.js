const { v4: uuidv4 } = require('uuid');
const { Type } = require('../db.js');

function createTypes() {
    const typesList = ['gluten free', 'dairy free', 'ketogenic', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'pescatarian', 'paleolithic', 'primal', 'whole 30', 'fruitarian', 'omnivore', 'clean eating', 'mediterranean', 'weight-watcher', 'grain free', 'GAPS-diet', 'fodmap friendly']
     typesList.forEach(async (type) => {
        await Type.create({ name: type, id: uuidv4()})
    });
}

module.exports = {
    createTypes
}