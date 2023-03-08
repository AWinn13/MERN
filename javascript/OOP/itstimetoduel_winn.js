class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    
}


class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= target.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat; 
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const e1 = new Effect('Hard Algorithm', 2, 'increase targets resilience by 3', 'resilience', +3 )
const e2 = new Effect('Unhandled Promise Rejection', 1, 'reduce targets resilience by 2', 'resilience', -2 )
const e3 = new Effect('Pair Programming', 2, 'increase targets power by 2', 'power', +2 )

console.log(e1, e2, e3)



const red = new Unit('Red Belt', 3,3,4)
const black = new Unit('Black Belt', 4,5,4)
console.log(red, black)


 