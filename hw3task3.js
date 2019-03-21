function drawTriangle (char, rows) {
	let line;
	if (rows <= 3) 
		for (line = char; line.length <=3; line += char) {
			console.log(line + '    Сработало условие 1');
		} else if (rows > 3 && rows <= 100)
		for (line = char; line.length <= Math.ceil(rows); line += char) {
			console.log(line + '    Сработало условие 2');
    } else if (rows == undefined)
      console.log('Введите значение второго аргумента(число)');
      else console.log('Значение второго аргумента должно быть меньше или равно 100');
}
drawTriangle('$', 3.78);

/*Думал и про Math.round(rows), но тогда 3.49 округляется до 3,
а по математике и по логике задания 3.49 - это всё-таки больше 3.
С другой стороны, Math.ceil(rows) округляет до большего ближайшего,
что мне показалось более приемлемым, ведь вывести дробное кол-во строк нельзя.
*/
