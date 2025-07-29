const names = require(`./names`)
const hobbiesFunction = require(`./hobbies`)

const people = () => ( { fullNames: names, hobbies: hobbiesFunction} )

people()