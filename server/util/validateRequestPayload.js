


const validateRequestPayload = (reqPayload = {}, validationConfiguration = []) => {
    const isError =[];

    for(let i =0; i< validationConfiguration.length; i++) {
        const keyObject = validationConfiguration[i]
        const {key, type, isRequired = false} = keyObject;
        const isKeyFound = reqPayload[key];
        if(isRequired && !isKeyFound) {
            isError.push({
                key,
                error: `${key} is Required`,
                massage: `required type is ${type}`
            })
        }
        if(isKeyFound && type === "number") {
            const keyAsNumber = parseFloat(isKeyFound);
            if(isNaN(keyAsNumber)) {
                isError.push({
                    key,
                    error: `${key} is Invalid Type`,
                    massage: `required type is ${type}`
                })
            }
        }
        else if(isKeyFound && type === "string" && type !== typeof isKeyFound) {
            isError.push({
                key,
                error: `${key} is Invalid Type`,
                massage: `required type is ${type}`
            })
        }
        console.log(typeof isKeyFound, type)
    }
    return isError;
}


module.exports = { validateRequestPayload};