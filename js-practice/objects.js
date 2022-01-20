let person = {
    name: "A",
    sex: "male",
    prof: "Bookeeper",
    age: 25
}

for(prop in person) {
    console.log(prop + ": " + person[prop]);
}

function Character(attack, defence, hp, isHuman) {
    this.attack = attack;
    this.defence = defence;
    this.hp = hp;
    this.isHuman = isHuman;
    this.printInfo = function() {
        console.log("Attack is: " + this.attack);
        console.log("Defence is: " + this.defence);
        console.log("HP is: " + this.hp);
        console.log("Is this Char human: " + this.isHuman);
        if(this.isHuman != true) {
            console.log("NOT HUMAN BLA BLA");
        }
    }
}

let char1 = new Character(75, 50, 95, false);
let char2 = new Character(80, 50, 100, true);

// for(prop in char2) {
//     console.log(prop + ": " + char2[prop]);
//     if (char2.isHuman != true) {
//         console.log("NO HUMAN");
//     }
//     else {
//         console.log("YEAH");
//     }
    
// }

char1.printInfo();
char2.printInfo();