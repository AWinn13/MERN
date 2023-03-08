class Ninja {
    constructor(name, health = 5) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake() {
        this.health = this.health + 10;
    }
}

class Sensei extends Ninja {
    constructor(wisdom = 10) {
        super(200, 10, 10, wisdom);
    }
    speakWisdom() {
        super.drinkSake()
        console.log('Never do anything half.....')
    }

}

const ninja1 = new Ninja("Hattori Hanzo");
const sensi = new Sensei("Pai Mei");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
sensi.speakWisdom();
sensi.showStats();
