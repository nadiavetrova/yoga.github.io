function startTicTacToe() {

  const tttBox = document.getElementById('ticTacToeBox');
  let step = 1;

  const ticTacToeArr = Array(9).fill(0);

  //рисую игровое поле

  ticTacToeArr.forEach((item, index) => {
    const div = document.createElement('div');
    div.setAttribute('data-n', index);
    tttBox.append(div);
  });

  function click(event) {
    //получаю номер элемента по которому кликнули
    const n = +event.target.getAttribute('data-n');
    //полe пустое?
    if (ticTacToeArr[n] !== 0) return;
    // поле не занято - ставлю ход!
    ticTacToeArr[n] = step;
    //визуализируем
    draw();
    //проверяем победу
    checkWinner(step);
    //меняем крестик-нолик
    if (step === 1) {
      step = 2
    }
    else {
      step = 1
    }
  }

  const tttDivs = document.querySelectorAll('#ticTacToeBox > div');

  function draw() {
    ticTacToeArr.forEach((item, index) => {
      switch (item) {
        case 1:
          tttDivs[index].textContent = 'x';
          break;

        case 2:
          tttDivs[index].textContent = 'o';
          break;
      }
    });
  }

  function checkWinner(step) {
    const winnerArr = ['012', '345', '678', '036', '147', '258', '048', '246'];
    //массив индексов
    let indexStep = [];
    ticTacToeArr.forEach((item, index) => {
      if (item === step) indexStep.push(index);
    })
    for (let i = 0; i < winnerArr.length; i++) {
      const winPattern = winnerArr[i];
      let count = 0;
      winPattern.split('').forEach((item) => {
        if (indexStep.includes(+item)) count++
      })
      if (count === 3) {
        showWin(step)
        return;
      }
    }
    if (!ticTacToeArr.includes(0)) showDraw();
  }

  function showWin(step) {
    tttBox.removeEventListener('click', click)
    tttBox.style.opacity = 0.5;
    document.querySelector('.win').textContent = 'Победил ' + (step === 1 ? 'x' : 'o');

  }

  function showDraw() {
    tttBox.removeEventListener('click', click)
    tttBox.style.opacity = 0.5;
    document.querySelector('.win').textContent = 'Ничья';
  }

  tttBox.addEventListener('click', click);

  document.querySelector('.buttonStartNewGame').onclick = function () {
    location.reload();
  }































}

startTicTacToe()