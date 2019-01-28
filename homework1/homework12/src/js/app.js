"use strict";
  
const balanseWrite=(string, numberOfBalanse)=>{                          // Объявление функции вывода баланса
    let ost10=numberOfBalanse%10;                                        // Определение остатка от деления на 10 для выбора окончания слова ""Балл
    let ost100=numberOfBalanse%100;                                      // Определение остатка от деления на 100 для выбора окончания слова ""Балл
    let ball = " баллов";
    if ((ost10==1) & ((ost100<11)||(ost100>19))){
      ball = " балл";          
    }
    else if (((ost10>=2)&(ost10<=4))&((ost100<11)||(ost100>19))){
      ball = " балла";
    }
    document.write(`${string}${numberOfBalanse}${ball}<br>`);            // Вывод на экран сообщения о балансе
}

const string = 'Ваш баланс: ';
let numberOfBalanse = 523;
balanseWrite(string, numberOfBalanse);                                   // Вызов функции вывода баланса

numberOfBalanse = 6000;
balanseWrite(string, numberOfBalanse);

numberOfBalanse = 5001;
balanseWrite(string, numberOfBalanse);

numberOfBalanse = 5013;
balanseWrite(string, numberOfBalanse);
