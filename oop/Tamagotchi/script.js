class Pet{
	constructor(mood, food, health){
		this.mood = mood;
		this.food = food;
		this.health = health;
	}
	play(mood){
		this.mood += mood;
		if(this.mood > 3){
			this.mood = 3;
		}
		clearInterval(time1);
		time1 = setTimeout(sad, 10000);
	}
	feed(food){
		this.food += food;
		if(this.food > 3){
			this.food = 3;
		}
		clearInterval(time2);
		time2 = setTimeout(hungry, 30000);
	}
	heal(health){
		this.health += health;
		if(this.health > 3){
			this.health = 3;
		}
		clearInterval(time3);
		time3 = setTimeout(sick, 60000);
	}
}

let tex = document.querySelector('textarea');
let inp = document.querySelector('#inp');
let start = false;
let pet;
let time1;
let time2;
let time3;

inp.addEventListener('keyup', function(event){
		if(event.code == 'Enter'  && inp.value == 'start' && start == false){
		log(1, '');
		pet = new Pet(3, 3, 3);
		pet.play(1);
		pet.feed(1);
		pet.heal(1);
		start = true;
		console.log(pet);
		}
		if(event.code == 'Enter'  && inp.value == 'start' && start == true){
		alert('Игра начата.');
		}
		if(event.code == 'Enter'  && inp.value == 'play' && start == true){
		log(1);
		log(2, '=)');
		pet.play(1);
		}
		if(event.code == 'Enter'  && inp.value == 'feed' && start == true){
		log(1);
		log(2, '*Кусь*');
		pet.feed(1);
		}
		if(event.code == 'Enter'  && inp.value == 'heal' && start == true){
		log(1);
		log(2, 'Теперь не болит.');
		pet.heal(1);
		}

});

function log(type, mes){
		if(tex.value.length >= 100)
		tex.value = '';
	switch(type){
		case 1: 
		tex.value += inp.value+'\n'; 
		inp.value = '';
		break;
		case 2:
		tex.value += mes+'\n'; 
		break;
	}
}

function sad(){
	pet.play(-1);
	switch(pet.mood){
		case 2: log(2, 'Играть!'); break;
		case 1: log(2, 'Про меня забыли...'); break;
		case 0: log(2, 'Умерчик!!!'); gameover(); break;
	}
	
}

function hungry(){
	pet.feed(-1);
		switch(pet.food){
		case 2: log(2, 'Кушать!'); break;
		case 1: log(2, 'Много кушать!'); break;
		case 0: log(2, 'Умерчик!!!'); gameover(); break;
	}
}

function sick(){
	pet.heal(-1);
	switch(pet.health){
		case 2: log(2, 'Апчхи!'); break;
		case 1: log(2, 'Что это такое красное?..'); break;
		case 0: log(2, 'Умерчик!!!'); gameover(); break;
	}
}

function gameover(){
	alert('Game over!');
	location.reload();
}