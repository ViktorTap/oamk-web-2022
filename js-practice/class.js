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

let banana = new Food('Banana', 5);
banana.whatIsThis();
banana.howMuch();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();