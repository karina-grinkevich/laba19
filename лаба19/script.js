var mas = ['СТОП!', 'ГОВОРЮ ЖЕ, НЕ НАЖИМАТЬ!', 1];
var first = mas[0];
alert (first);

var second = mas[1];
alert (second);

mas[2] = 'МОИ СОВЕТЫ ДЛЯ ВАС ШУТКА?';
alert (mas[2]);
var third = mas[2];

mas.splice(0, 0, 'ОСТАНОВИТЕСЬ!');
mas.splice(4, 0, '??');

var phrase = mas[0] + ' ' + first + ' ' + second + ' ' + third + mas[4];

alert (phrase);
document.write("Число элементов " + mas.length);

document.write("</br>");
document.write("</br>");

var re = /woman/gi;
var str = 'Every man in the world! Every woman on earth!';
var newstr = str.replace(re, 'person');
console.log(newstr);

var re = /man/gi;

var newwstr = newstr.replace(re, 'person');
console.log(newwstr);

document.write(newwstr);