
export const capitalize = (lowerCaseWord) => {
    const lowerCaseWordComprobation = lowerCaseWord.toLowerCase()
    return lowerCaseWordComprobation.charAt(0).toUpperCase() + lowerCaseWordComprobation.slice(1)
}

export const capitalizeArray = (lowerCaseAray) => {
    const capArrar = lowerCaseAray.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    return capArrar
}

export function URLParameters() {
    this.parameters = {}
}

URLParameters.prototype.addParameters = function(string) {
    if(string) {
        const parametersArray = string.split('_').map(p => p.split(':')).filter(p => p[0] !== '')
        parametersArray.forEach(p => this.parameters[p[0]] = parseInt(p[1]) ? parseInt(p[1]) : p[1])
    }
}

URLParameters.prototype.checkParameter = function(parameter) {
    const keys = Object.keys(this.parameters)
    return keys.includes(parameter)
}

URLParameters.prototype.createURL = function(object, type) {
    const separeateValuesArray = Object.entries(object)
    const valuesArray = separeateValuesArray.map(e => e.join(':')).filter(e => !e.includes(type)).join('_')
    return valuesArray
}

function createURL(object, type) {
    const separeateValuesArray = Object.entries(object)
    const valuesArray = separeateValuesArray.map(e => e.join(':')).filter(e => !e.includes(type)).join('_')
    return valuesArray
}

var obj = {}
createURL(obj)