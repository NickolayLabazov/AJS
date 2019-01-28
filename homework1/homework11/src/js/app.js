 "use strict";
   
  const sales=[200, 550, 4000, 23, 58, 5000, 485, 711];      // Массив исходных данных
  	
  const add=(array)=>{                                       // Объявление функции для вычисления бонуса
    
	let summa=0;
	
	for (let value of array){                                // Суммирование всех покупок
      summa=summa+value;
	}
		
	const bonus=(summa-10000)*0.05;                          //  Вычисление бонуса
	
	if (bonus>0){
	  document.write(`Ваш бонус: ${Math.ceil(bonus)}.`);     //  Округление бонуса и вывод на экран в случае его наличия
	} 
	else {
	  document.write(`У вас нет бонусов.`);                  //  Вывод на экран сообщения об отсутствии бонусов
	}
  }
	
  add (sales);                                               // Вызов функции для вычисления бонуса        
