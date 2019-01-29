"use strict";
  
const balanseWrite=(string, numberOfBalanse)=>{                          // Объявление функции вывода баланса
    let str = string[0];
	let ost10=numberOfBalanse%10;                                        // Определение остатка от деления на 10 для выбора окончания слова ""Балл
    let ost100=numberOfBalanse%100;                                      // Определение остатка от деления на 100 для выбора окончания слова ""Балл
    let ball = " баллов";
    if ((ost10==1) & ((ost100<11)||(ost100>19))){
      ball = " балл";          
    }
    else if (((ost10>=2)&(ost10<=4))&((ost100<11)||(ost100>19))){
      ball = " балла";
    }
    return `${str}${numberOfBalanse}${ball}`;                            // Возвращение сообщения о балансе
}

let numberOfBalanse = 523;
let string = balanseWrite`Ваш баланс: ${numberOfBalanse}`;               // Вызов функции вывода баланса
console.log(string);                                                     // Вывод баланса в консоль 
 
numberOfBalanse = 6000;
string = balanseWrite`Ваш баланс: ${numberOfBalanse}`;
console.log(string);


numberOfBalanse = 5001;
string = balanseWrite`Ваш баланс: ${numberOfBalanse}`;
console.log(string);

numberOfBalanse = 5013;
string = balanseWrite`Ваш баланс: ${numberOfBalanse}`;
console.log(string);
