const userInformation = require("./information");
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `Hello I'm ${userInformation.name} from ${userInformation.campus} campus`,
  })
);
