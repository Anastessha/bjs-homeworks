'use strict'

//=====Задача 1=======

class Weapon {
	constructor (name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		const originDurability = durability;
	}
	
	takeDamage(damage) {
		if (this.durability >= damage) {
			return this.durability = this.durability - damage;
		} else {
			return this.durability = 0;
		}
	}
	
	getDamage() {
		if (this.durability >= this.originDurability * 0.3) {
			return this.attack;
		} else {
			return this.attack / 2;
		}
		if (this.durability === 0) {
			return this.attack === 0;
		}
	}
	
	isBroken() {
		return this.durability <= 0; 
	}
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const poleax = new Weapon('Секира', 27, 800, sword.range);
const stormStick = new Weapon('Посох Бури', 10, stick.durability, 3);


sword.takeDamage(5);
console.log(sword.durability); 

sword.takeDamage(50);
console.log(sword.durability); 

arm.takeDamage(20);
console.log(arm.durability); 

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability); 

console.log(bow.durability); 
console.log(bow.getDamage()); 

console.log(arm.durability); 
console.log(bow.getDamage()); 

console.log(bow.durability); 
console.log(bow.isBroken()); 

console.log(arm.durability); 
console.log(bow.isBroken()); 

//=====Задача 2=======

class Arm extends Weapon {
	constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1) {
		super(name, attack, durability, range);
	}
};

class Bow extends Weapon {
	constructor(name = 'Лук', attack = 10, durability = 200, range = 3) {
		super(name, attack, durability, range);
	}
};

class Sword extends Weapon {
	constructor(name = 'Меч', attack = 25, durability = 500,
			range = 1) {
		super(name, attack, durability, range);
	}
};

class Knife extends Weapon {
	constructor(name = 'Нож', attack = 5, durability = 300,
			range = 1) {
		super(name, attack, durability, range);
	}
};

class Stick extends Weapon {
	constructor(name = 'Посох', attack = 8, durability = 300,
			range = 2) {
		super(name, attack, durability, range);
	}
};

class LongBow extends Bow {
	constructor (name = 'Длинный лук', attack = 15, durability, range = 4) {
		super (name, attack, durability, range);
	}
};

class Poleax extends Sword {
	constructor (name = 'Секира', attack = 27, durability = 800, range) {
		super (name, attack, durability, range);
	}
};

class StormStick extends Stick {
	constructor (name = 'Посох Бури', attack = 10, durability, range = 3) {
		super (name, attack, durability, range);
	}
};

const Arm1 = new Arm();
const Bow1 = new Bow();
const Knife1 = new Knife();
const Sword1 = new Sword();
const Stick1 = new Stick();
const LongBow1 = new LongBow();
const Poleax1 = new Poleax();
const StormStick1 = new StormStick();


console.log(Bow1.name); // Лук
console.log(Bow1.attack); // 10
console.log(Bow1.durability); // 200
console.log(Bow1.range); // 3



