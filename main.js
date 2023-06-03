//   Вивести на сторінку в один рядок через кому числа від 10 до 20

let str = '';
for (let i = 10; i <= 20; i++) {
  if (i !== 20) {
    str = str + i + ", ";
  } else {
    str = str + i;
  }
}
console.log(str);


//   Вивести квадрати чисел від 10 до 20

for (let i = 10; i <= 20; i++) {
  console.log(`${i} в квадраті = ${i * i}`);  // або i ** 2
}


//   Вивести таблицю множення на 7

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i }`);
}

//   Знайти суму всіх цілих чисел від 1 до 15

let sum = 0;
for (let i = 1; i <=  15; i++) {
  sum += i;
}
console.log(`Сума всіх цілих чисел від 1 до 15 дорівнює ${sum}`);


//   Знайти добуток усіх цілих чисел від 15 до 35

let product = 1;

for (let i = 15; i <=  35; i++) {
  product = product * i;
}

console.log(`Добуток усіх цілих чисел від 15 до 35 дорівнює ${product}`);



//   Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let mySum = 0;
for (let i = 1; i <= 500; i++) {
  mySum += i;
}
console.log(`Cереднє арифметичне всіх цілих чисел від 1 до 500 дорівнює ${mySum / 500}`);


//   Вивести суму лише парних чисел у діапазоні від 30 до 80

let sumOfEvenNumbers = 0;

for (let i = 30; i < 80; i++) {
  if (i % 2 === 0) {
    sumOfEvenNumbers += i;
  }
}

console.log(`Сума лише парних чисел у діапазоні від 30 до 80 дорівнює ${sumOfEvenNumbers}`);


//   Вивести всі числа в діапазоні від 100 до 200 кратні 3

for (let i = 100; i <=  200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

//   Визначити кількість його парних дільників

//   Знайти суму його парних дільників


let naturalNumber = 536;
let counterOfEvenDivisors = 0;
let sumOfEvenDivisiors = 0;

for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    console.log(`${i} є дільником натурального числа ${naturalNumber}`);
  }

  if (naturalNumber % i === 0 && i % 2 === 0) {
    sumOfEvenDivisiors += i;
    counterOfEvenDivisors++;
  }
}

console.log(`${counterOfEvenDivisors} чисел є парними дільниками числа ${naturalNumber}`);
console.log(`${sumOfEvenDivisiors} - сума парних дільників числа ${naturalNumber}`);



//   Надрукувати повну таблицю множення від 1 до 10

for (let i = 2; i <= 10; i++) {
  console.log('');

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

