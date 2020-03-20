let str = '1 23 456 789';
document.write(str + '<br>Позиция первого трёхзначного числа: ' + str.search(/\d{3}/));