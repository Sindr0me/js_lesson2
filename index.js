'use strict'
var countOnStock = 10,
countInOrder = 8;

!(countInOrder > 10) ? console.log('Вы забираете весь товар c нашего склада!') :
 console.log('На складе нет такого количества товаров');

var moon = 'Луна',
crab = 'Крабовидная туманность',
andromeda = 'Галактика Туманность Андромеды',
orion =  'Туманность Ориона',
starOfDeath =  'Звезда смерти',
userChoose = 'Крабовидная туманность';

switch (userChoose) 
	{
		case moon: console.log(`Стоимость доставки для области ${moon}: 150 Q`);
		break;

		case crab: console.log(`Стоимость доставки для области ${crab}: 250 Q`);
		break;

		case andromeda: console.log(`Стоимость доставки для области ${andromeda}: 550 Q`);
		break;

		case orion: console.log(`Стоимость доставки для области ${orion}: 600 Q`);
		break;

		case starOfDeath: console.log(`Стоимость доставки для области ${starOfDeath}: договорная цена`);
		break;

		case crab: console.log(`Стоимость доставки для области ${crab}: 250 Q`);
		break;

		default : console.log('В ваш квадрант доставка не осуществляется');
	}


var price = '18';

try 
	{
		if (typeof(price) !== 'number') 
			{
				throw "Переменная не является числом";
			}else 
				{
					console.log (`Цена: ${price}`);
				}
	} catch (err) 
		{
			console.log(`Допущена ошибка: ${err}`);
		}


var planet = 'Земля', //земля или юпитер
age = 121; // 18 по земным, 120 по юпитерским

if(planet == 'Земля') {
	if (planet == 'Земля' && age >= 18) 
		{
			console.log('Приятных покупок');
		}else 
			{	
				console.log('Вы не достигли совершенолетия');
			}
}else{console.log('Спасибо, что пользуетесь услугами нашего магазина!');}

if (planet == 'Юпитер') {
	if (planet == 'Юпитер' && age >= 120)
		{
			console.log('Чистого неба и удачных покупок!');
		}else 
			{
				console.log('Сожалеем. Вернитесь на 120-й день рождения!');
			}
}else{console.log('Спасибо, что пользуетесь услугами нашего магазина!');}