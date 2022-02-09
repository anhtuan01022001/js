// super    

class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) { // method nhận vào số lượng damage ,
        //khi bị tc thì  hp bị trừ = damage - giáp(=0)
        this.hp -= damage;
    }

    attack(anemy) {
        anemy.applyDamage(this.damage);
    }
}

class RangeHero extends Hero { //subclass
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy); // dùng super để thay thế this gọi ra attack
        this.hp += this.damage; // hút máu = 100% damage
    }
}


const heroA = new Hero('A', 100, 10);
const heroB = new Hero('B', 200, 5);
console.log({ heroA, heroB });
heroA.attack(heroB);
console.log({ heroA, heroB });