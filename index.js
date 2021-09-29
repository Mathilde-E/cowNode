const userInfo = require('./information');


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello Wilders! I am ${userInfo.objet.nom} from the campus ${userInfo.objet.campus}`,
    e : "oO",
    T : "U "
}));