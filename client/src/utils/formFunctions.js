
//Validaciones
function validateTitle(title) {
    const titleErrors = []
    if(!title) titleErrors.push('A recipe name is requeried')
    if(!(/^[a-zA-Z\s()]*$/.test(title))) titleErrors.push('Recipe name must contain only letters, spaces and parentheses')
    if(title && !(/^.{8,}$/.test(title))) titleErrors.push('Recipe name must be 8 characters long minimum')
    if(titleErrors.length > 0) return titleErrors
}

function validateSummary(summary) {
    const summaryErrors = []
    if(!summary) summaryErrors.push('A summary is requeried')
    if(summary && !(/^.{100,}$/.test(summary))) summaryErrors.push('Summary must be 100 characters long minimum')
    if(summaryErrors.length > 0) return summaryErrors
}

function validateInstructions(instructions) {
    const instructionsErrors = []
    if(!instructions) instructionsErrors.push('Instructions are requeried')
    if(instructions && !(/^.{100,}$/.test(instructions))) instructionsErrors.push('Instructions must be 100 characters long minimum')
    if(instructionsErrors.length > 0) return instructionsErrors
}


function validateImgLink(imgLink) {
    const imgLinkErrors = []
    if(!imgLink) imgLinkErrors.push('A image URL is requeried')
    if(imgLink && !(/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g.test(imgLink))) imgLinkErrors.push('The image input must contain a URL of the recipe picture')
    if(imgLinkErrors.length > 0) return imgLinkErrors
}

function validateTypes(types) {
    const typesErrors = []
    if(!types) typesErrors.push('Please select at least 1 diet type')
    if(types && !(types.length > 0)) typesErrors.push('Please select at least 1 diet type')
    if(typesErrors.length > 0) return typesErrors
}

function validateSpoonacularScore(score) {
    const spoonacularScoreErrors = []
    if(!score) spoonacularScoreErrors.push('Please rate your recipe, be honest')
    if(spoonacularScoreErrors.length > 0) return spoonacularScoreErrors
}

function validateHealthScore(score) {
    const healthScoreErrors = []
    if(!score) healthScoreErrors.push('Please rate the healthiness of your recipe')
    if(healthScoreErrors.length > 0) return healthScoreErrors
}


export function mainValidation(obj) {
    const errors = {}

    const titleErrors = validateTitle(obj.title)
    if (titleErrors) errors.title = titleErrors

    const summaryErrors = validateSummary(obj.summary)
    if (summaryErrors) errors.summary = summaryErrors

    const instructionsErrors = validateInstructions(obj.instructions)
    if (instructionsErrors) errors.instructions = instructionsErrors

    const imageErrors = validateImgLink(obj.image)
    if (imageErrors) errors.image = imageErrors

    const typesErrors = validateTypes(obj.types)
    if (typesErrors) errors.types = typesErrors
    
    const scoreErrors = validateSpoonacularScore(obj.spoonacularScore)
    if (scoreErrors) errors.spoonacularScore = scoreErrors

    const healthScoreErrors = validateHealthScore(obj.healthScore)
    if (healthScoreErrors) errors.healthScore = healthScoreErrors
    
    return errors
}

//Funcion para cargar 10 iconos con su respectivo valor
export const scoreArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const resetInput = {
    title: '',
    summary: '',
    instructions: '',
    spoonacularScore: '',
    healthScore: '',
    image: '',
    types: []
}
