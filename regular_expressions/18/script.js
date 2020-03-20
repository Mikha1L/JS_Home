let inp = document.querySelector('#inp');

function http(){
	alert('Проверка на http и https. Ответ: '+/^http:|^https:/.test(inp.value));
}
function jpg(){
	alert('Проверка на jpg и jpeg. Ответ: '+/\.jpg$|\.jpeg$/.test(inp.value));
}
function twelve(){
	alert('Проверка на длину числа. Ответ: '+(inp.value.length > 0 && inp.value.length < 12 &&/^\d+$/.test(inp.value)));
}
function date(){
	let spl = inp.value.split('.');
	if(/^\d{2}\.\d{2}\.\d{4}$/.test(inp.value)){		//Не смог придумать более "красивого" варианта проверки, но и так сойдёт.
		if(spl[0] <= '29' && spl[1] == '02'){			
		alert('Проверка на дату в формате дд.мм.гггг. Ответ: true');
		}
		else if (spl[0] <= '30' && (spl[1] == '04' || spl[1] == '06' || spl[1] == '09' || spl[1] == '11')){
		alert('Проверка на дату в формате дд.мм.гггг. Ответ: true');
		}
		else if (spl[0] <= '31' && (spl[1] == '01' || spl[1] == '03' || spl[1] == '05' || spl[1] == '07' || spl[1] == '08' || spl[1] == '10' || spl[1] == '12')){
		alert('Проверка на дату в формате дд.мм.гггг. Ответ: true');
		}
		else{
		alert('Ошибка ввода');
		}
	}
	else{
		alert('Ошибка ввода');
	}
}
function mail(){
	alert('Проверка на почту. Ответ: '+/.+@.+\.[a-z]+$/.test(inp.value));
}

