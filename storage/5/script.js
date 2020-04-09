let tex = document.querySelector('textarea');
let td = document.querySelectorAll('td');
let calendar = document.querySelector('input[type="date"]');
let i = localStorage.length;

load();

function save(){
	if(tex.value == "" || calendar.value == ""){
		alert('Поля не могут быть пустыми.')
	}
	else if(tex.value.length > 150 || i >= 9){
		alert('Длина записи не более 150 символов. Количство записей не может больше девяти.');
	}
	else{
		let date = calendar.value;
		let obj = {dat: date, note: tex.value};
		console.log(obj, i);
		let json = JSON.stringify(obj);
		localStorage.setItem(`obj${i}`, json);	
		load();
		i++;
	}
}

function load(){
	for(let j = 0; j < 9; j++){
		json = localStorage.getItem(`obj${j}`);
		obj = JSON.parse(json);
		if(obj == null){
			break;
		}
		else{
			td[j].innerHTML = obj.dat + "<br><br>" + obj.note;
		}
	}
}

function del(){
	localStorage.clear();
	location.reload();
}