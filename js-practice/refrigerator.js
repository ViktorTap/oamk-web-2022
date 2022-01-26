class Refrigerator {
    constructor() {
        this.refrigerator = [];    
    }

    putFood(food) {
        this.refrigerator.push(food);
    }

    getContents() {
        console.log(this.refrigerator);
    }

    getAndEatFood(foodName) {
        let searchedFoodIdx = this.refrigerator.findIndex(function (food){
            if(food.ingredient === foodName) {
                return true;
            }
            else {
                return false;
            }
        });

        if(searchedFoodIdx == -1) {
            console.log('Sorry, no such food in this refrigerator!');
            return;
        }

        this.refrigerator[searchedFoodIdx].eatOne();
        if(this.refrigerator[searchedFoodIdx].howMuch() == 0)
        {
            this.refrigerator.splice(searchedFoodIdx, 1);
        }
    }
}

class Food {
    constructor(ingredient, amount)
    {
        this.ingredient = ingredient;
        this.amount = amount;
    }

    whatIsThis() {
        console.log(this.ingredient);
    }

    howMuch() {
        console.log("There is: " + this.amount + " " + this.ingredient.toLowerCase() + " left");
        return this.amount;
    }

    eatOne() {
        this.amount -= 1;
        if(this.amount < 0) {
            console.log("There is no " + this.ingredient + " anymore. Sorry");
        }
        else {
        console.log("Slurp! One " + this.ingredient + " eaten. " + this.amount + " remaining");
        }
    }
}

let r = new Refrigerator();

let apple = new Food('Apple', 2);

r.getContents();

r.putFood(apple);

r.getContents();

let banana = new Food('Banana', 3);
r.putFood(banana);
r.getContents();

r.getAndEatFood('Banana');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');