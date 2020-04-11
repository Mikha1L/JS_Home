class Validator{
	isEmail(value){
		return (/.+@.+\.[a-z]+$/.test(value));
	}
	isDomain(value){
		return (/.+\.[a-z]+$/.test(value));
	}
	isDate(value){
		return (/(\d{2})\.(\d{2})\.(\d{4})/.test(value));
	}
	isPhone(value){
		return (/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(value));
		//Не знаю, насколько универсальна такая проверка телефона, но абонентов России точно пропустит =D
	}
}




let validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+79102212222'));