const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        console.log("nombre superieur à 50 ");
        break;
    }

    // écrire dans le tableau excel

    console.log(numbers[i]);
}