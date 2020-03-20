let str = 'a1b c34d x567z';
sum = 0;
for(let i of str.match(/\d+/g)){
	sum += +i;
}
document.write(str + '<br>' + sum);
// В условии сказано "сумма чисел", а не "цифр".