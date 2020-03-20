let str = '2025-12-31 12:59:59';

//28.1
let res = str.split(/[- :]/);
document.write('Было: ' + str + '<br><br>Стало: ' + res);