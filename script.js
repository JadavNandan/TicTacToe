const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".winner");
let textO = true;

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      if (textO) {
        box.innerHTML = "O";
        textO = false;
      } else {
        box.innerHTML = "X";
        textO = true;
      }
    }

    checkWinner();
  });
});

const checkWinner = () => {
  for (const pattern of winPattern) {
    const box1 = boxes[pattern[0]].innerText;
    const box2 = boxes[pattern[1]].innerText;
    const box3 = boxes[pattern[2]].innerText;

    if (
      box1 !== "" &&
      box2 !== "" &&
      box3 !== "" &&
      box1 === box2 &&
      box2 === box3
    ) {
      showWinner(box1);
    }
  }
};

const showWinner = (winner) => {
  enableBoxes(false);

  heading.innerText = `Winner : ${winner}`;
};

const enableBoxes = (enable = true) => {
  boxes.forEach((box) => {
    if (enable) {
      box.disabled = false;
      box.innerText = "";
    } else {
      box.disabled = true;
    }
  });
};

const restBtn = document.querySelector(".reset");
restBtn.addEventListener("click", () => {
  //   console.log("game reset");
  enableBoxes();
  heading.innerText = "";
  textO = true;
});
