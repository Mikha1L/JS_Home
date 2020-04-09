let tex = document.querySelector('textarea');
let i;
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');


if (localStorage.length > 0) {
i = localStorage.length-1;
load();
let parent = document.querySelector('#but');

let prev = document.createElement('button');
    prev.id = 'prev';
    prev.innerText = 'Предыдущая запись';
	prev.addEventListener('click', function(){
		i--
			if (i < 0) {
			i = localStorage.length-1;
			}
		load();
	});
	parent.appendChild(prev);
	

let next = document.createElement('button');
    next.id = 'next';
    next.innerText = 'Следующая запись';
	next.addEventListener('click', function(){
		i++
			if (i > localStorage.length-1) {
			i = 0;
			}
		load();
	});
	parent.appendChild(next);
}


function save(){
	if(tex.value.length > 150){
		alert('Длина записи не более 150 символов.')
	}
	else{
		i = localStorage.length;
		let d = new Date();
		let date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
		let obj = {id: i, dat: date, note: tex.value};
		let json = JSON.stringify(obj);
		localStorage.setItem(`obj${i}`, json);	
		load();
	}
	if(localStorage.length-1 <= 0){
	location.reload();
	}
}

function update(){
	if(tex.value.length > 150){
		alert('Длина записи не более 150 символов.')
	}
	else{
		let d = new Date();
		let date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
		let obj = {id: i, dat: date, note: tex.value};
		let json = JSON.stringify(obj);
		localStorage.setItem(`obj${i}`, json);	
		load();
	}
}

function load(){
	json = localStorage.getItem(`obj${i}`);
	obj = JSON.parse(json);
    p1.innerHTML = "Номер записи: "+obj.id;
	p2.innerHTML = "Время записи: "+obj.dat;
	p3.innerHTML = "Текст записи:<br>"+obj.note;
}