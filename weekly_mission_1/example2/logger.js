// Esta es una función que se guardara en este módulo como info
console.log(exports)

exports.info = message =>{
    console.log(`Info: ${message}`)
}

// Esta es una función que se guardara en este módulo como message
exports.verbose =  message => {
    console.log(`Verbose: ${message}`)
}
