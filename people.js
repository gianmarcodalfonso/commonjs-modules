const names = require(`./names.js`)
const hobbiesFunction = require(`./hobbies.js`)

const people = () => ( { fullName: names(`aa`,`bb`), hobbies: hobbiesFunction(`aaa`,`bbb`,`ccc`)} )

console.log(people());