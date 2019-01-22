"use strict";
   
  const sales=[200, 550, 4000, 23, 58, 5000, 485, 711];      // Массив исходных данных
  	
  const add=(array)=>{                                       // Объявление функции для вычисления бонуса
    
	let summa=0;
	
	for (let value of array){                                // Суммирование всех покупок
      summa=summa+value;
	}
		
	const bonus=(summa-10000)*0.05;                          //  Вычисление бонуса
	
	if (bonus>0){
	  return `Ваш бонус: ${Math.ceil(bonus)}.`;              //  Округление до целого и передача бонуса  в случае его наличия
	} 
	else {
	  return `У вас нет бонусов.`;                           //  Передача сообщения об отсутствии бонуса
	}
  }
	
  document.write(add (sales));                               //  Вывод бонуса на экран
