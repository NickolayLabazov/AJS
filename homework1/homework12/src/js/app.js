"use strict";
  
const balans=[523, 6000, 5001];                            // Массив исходных данных
for (let value of balans){                                 // Цикл обхода элементов массива
  let ost=value%10;                                        // Определение остатка от деления на 10 для выбора окончания слова ""Балл
  if (ost==1){
    document.write(`Баланс: ${value} балл <br>`);          // Вывод баланса на экран
  }
  else if ((ost>=2)&(ost<=4)){
    document.write(`Баланс: ${value} баллa <br>`);         // Вывод баланса на экран 
  }
  else {
    document.write(`Баланс: ${value} баллов <br>`);        // Вывод баланса на экран
    }
}
