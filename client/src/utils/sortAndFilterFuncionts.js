export const sortArray = (array, type, normal) => {
    if(typeof array[0][type] === 'number') {
      if(normal) {
        const sortedArray = array.sort((a, b) => a[type] - b[type]);
        return sortedArray
      }
      const sortedArray = array.sort((a, b) => b[type] - a[type]);
      return sortedArray
    }
    const sortedArray = array.sort(function(a, b) {
        var keyA = a[type].toLowerCase(); 
        var keyB = b[type].toLowerCase(); 
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });
    if(normal) return sortedArray
    return sortedArray.reverse() 
}

export const filterArray = (array, diet) => {
  const lowCaseDiet = diet.toLowerCase()
  if(lowCaseDiet === 'no diet selected') return array
  return array.filter(recipe => recipe.diets.includes(lowCaseDiet))
}


