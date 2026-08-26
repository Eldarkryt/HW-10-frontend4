let time = 1;

const intervalId = setInterval(() => {
  time++;
    console.log('Сповіщення про роботу таймера');
    if (time === 5) {
      clearInterval(intervalId)
      console.log("Все всі 5 сповіщень!")
    }

}, 1000);

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

let timeTask2 = 1;

const intervalId2 = setInterval(() => {
    timeTask2++
    if (timeTask2 % 3) {
        box1.classList.add("box1Big")
    }
     if (timeTask2 % 2) {
       box1.classList.remove("box1Big");
     }
        if (timeTask2 % 3) {
          box2.classList.add('box2Long');
        }
        if (timeTask2 % 2) {
          box2.classList.remove('box2Long');
        }
        if (timeTask2 % 3) {
          box3.classList.add('box3Wide');
        }
        if (timeTask2 % 2) {
          box3.classList.remove('box3Wide');
        }
}, 1000)