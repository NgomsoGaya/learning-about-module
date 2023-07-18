import chalk from "chalk"

import figlet from "figlet"

import greet from "./greet.js"



figlet(greet("Ngomso"), function (err, data) {
  if (err) {
    // console.log(styledMessage + "-----------")
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  const styledMessage = chalk.bgBlue.white(data)
    console.log(styledMessage);
  });
  