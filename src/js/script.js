
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
//    else if(number == 1 ){
//     alert('!');
//    }
//   else if(number == 2 ){
//     alert('@');
//    }
//   else if(number == 3 ){
//     alert('#');
//    }
//   else if(number == 4 ){
//     alert('$');
//    }
//   else if(number == 5 ){
//     alert('%');
//    }
//   else if(number == 6 ){
//     alert('^');
//    }
//   else if(number == 7 ){
//     alert('&');
//    }
//   else if(number == 8 ){
//     alert('*');
//    }
//   else if(number == 9 ){
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

// let number = prompt("Введіть пятизначне число","");
// let arrNumber = number.split('');
// let b;
// let a;
//    if(number > 9999 && number < 100000 ){
//   for(let i = 0; i < arrNumber.length; i++){
//      a = (arrNumber.length - 1) - i;
//      b = arrNumber[a] - arrNumber[i];
//     if(b != 0){
//         break;
//     }
//   }
//   if(b == 0){
//     alert("Паліндр");
// }else{
//     alert("не паліндр");
// }
//    }else{
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



// 9

// let questionOne = prompt("1. Скільки буде 2 + 2, (3. 4. 6.)",);
// let counter = 0;
// while(questionOne == 4){
//         counter++;
//         break;
// }
// let questionTwo = prompt("2. Скільки буде 2 + 3, (4. 5. 6.)",);
// while(questionTwo == 5){
//     counter++;
//     break;

// }
// let questionThree = prompt("3. Скільки буде 2 + 4, (3. 1. 6.)",);
// while(questionThree == 6){
//     counter++;
//     break;
// }
// alert(`ви набрали ${counter} бали`);

// 10

// const day = prompt('Введіть день');
// const month = prompt('Введіть місяць');
// const year = prompt('Введіть рік');
// let dayOne;
// let monthOne;
// let yearOne;
// let yearTwo;

// if (year > 0 && month > 0 && month <= 12 && day > 0) {
//     if (day > 0 && day <= 31) {
//         if (day == 31){
//             dayOne = "1";
//         }else{
//             dayOne = (Number(day) + Number(1));
//     }
// }
// if(month > 0 && month <= 12){
//     if (month == 12){
//         monthOne = "1";
//     }else{
//        monthOne = (Number(month) + Number(1)); 
// }
// }
// if(year >= 1500){
//     if (year % 4 == 0 && year % 100 != 0) {
//         yearTwo = "Високосний";
//         yearOne = (Number(year) + Number(1));
//     } else {
//         yearTwo = "Не високосний";
//         yearOne = (Number(year) + Number(1));
//     }
//     alert(dayOne + "." + monthOne + "." + yearOne + " " + yearTwo);
// }else{
//     alert("Введіть рік від '1500 років'");
// }
// } else {
//     alert("Помилка");
// }













