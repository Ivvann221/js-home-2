
// 1.

// let age = prompt('Введіть ваш вік');
// if(age > 0){
//  if(age <= 12 ){
//   alert('дитина');
//  }
//  if(age > 12 && age <= 18 ){
//   alert('підліток');
//  }
//  if(age > 18 && age < 60 ){
//   alert('дорослий');
//  }
//  if(age >= 60){
//   alert('пенсіонер');
//  }
// }else{
//   alert('Помилка');
// }

// 2.

// let number = prompt('Введіть число від 0 до 9');
// if(number <= 9 && number >= 0){
//    if(number == 0 ){
//     alert('~');
//    }
//    if(number == 1 ){
//     alert('!');
//    }
//    if(number == 2 ){
//     alert('@');
//    }
//    if(number == 3 ){
//     alert('#');
//    }
//    if(number == 4 ){
//     alert('$');
//    }
//    if(number == 5 ){
//     alert('%');
//    }
//    if(number == 6 ){
//     alert('^');
//    }
//    if(number == 7 ){
//     alert('&');
//    }
//    if(number == 8 ){
//     alert('*');
//    }
//    if(number == 9 ){
//     alert('(');
//    }
//   }else{
//     alert('Помилка');
//   }


// 3.

//  let number = prompt("Введіть трьох значне число");
// if(number > 99 && number < 999){
//  if (number[0] == number[1] || number[0] == number[2] || number[1] == number[0] || number[1] == number[2] || number[2] == number[0] || number[2] == number[1]) {
//    alert("є")
//  } else {
//   alert("нема");
//  }
// }else{
//   alert("Помилка")
// }

// 4.

// let year = prompt("Введіть рік");
// if(year > 0){
//   if(year % 4 == 0 && year % 100 != 0 ){
//     alert("Високосний")
//   }else{
//     alert("Не високосний")
//   }
// }else{
//   alert("Помилка")
// }

// 5


// let number = prompt("Введіть пятизначне число","")
//    if((number > 9999)&&(number < 100000)){
//  ---------------------------------
//    }
// else{
// alert("Помилка");

// }


// 6
// let euro = 10;
// let ukr = 3;
// let azerb = 6;
// let usd = prompt("Введіть кількість USD", )
// if(usd > 0){
//     let choice = prompt("Виберіть валюту: eur, uan, azn");
//         if(choice == "eur" ){
//             let countsEUR = usd * euro;
//             alert(countsEUR);
//          }else if (choice == "uan" ){
//              let countsUan =  usd * ukr;
//              alert(countsUan);
//          }else if (choice == "azn"){
//              let countsAzn =  usd * azerb;
//              alert(countsAzn);
//          }
// }else{
//     alert("Помилка")
// }

// 7

// let suma = prompt("Введіть суму покупки");
// let sum;
// let sale;

// if(suma > 200){
//     if(suma >= 200 && suma < 300){
//         sale = suma * 0.03;
//          sum = suma - sale;
//         alert(`Сума до сплати ${sum}`) 
//     }
//     else if(suma >= 300 && suma < 500){
//         sale = suma * 0.05;
//          sum = suma - sale;
//         alert(`Сума до сплати ${sum}`) 
//     }else{
//         sale = suma * 0.07;
//          sum = suma - sale;
//         alert(`Сума до сплати ${sum}`) 
//     }
// }else{
//     alert(`Сума без знижки ${suma}`)
// }

// 8 

// let lenght = prompt("Введіть довжину кола")
// let a = 2 * 3.14 * lenght;
// let b  = 30;
// if (a <= b){ 
//  alert("Вписується")
// }else{
//     alert("не вписується")
// }
