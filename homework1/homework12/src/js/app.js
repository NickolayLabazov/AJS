"use strict";
  
const balans=[523, 6000, 5001];                            // Массив исходных данных

const balanseWrite=(array)=>{                              // Объявление функции вывода баланса
  let b="Баланс: ";
  for (let value of array){                                // Цикл обхода элементов массива
    let ost=value%10;                                      // Определение остатка от деления на 10 для выбора окончания слова ""Балл
    let ball = " баллов";
    if (ost==1){
      ball = " балл";          
    }
    else if ((ost>=2)&(ost<=4)){
      ball = " балла";
    }
    document.write(`${b}${value}${ball}<br>`);              // Вывод на экран сообщения о балансе
  }
}

balanseWrite(balans);                                       // Вызов функции вывода баланса
