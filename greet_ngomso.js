import chalk from "chalk"

import greet from "./greet.js"

const styledMessage = chalk.bgBlue.white(greet('Ngomso'))
console.log(styledMessage)

