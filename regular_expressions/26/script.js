let str = 'aaa [2] bbb [3] ccc [12] ddd';
let res = str.replace(/[(\d+)]/g, function(match){
	return match*2;
});
document.write('Было: ' + str + '<br> Стало: ' + res);