const imgPath = "assets";
const playerScore = document.querySelector("#player1-score");
const botScore = document.querySelector("#player2-score");
const message = document.querySelector("#round-message");
const botShowArea = document.querySelector("#player2 .selected-option .option");
const reset = document.querySelector(".reset");



const arr = [
  {
    name: "Lizard",
    image: "lizard.png",
  },
  {
    name: "Paper",
    image: "paper.png",
  },
  {
    name: "Rock",
    image: "rock.png",
  },
  {
    name: "Scissor",
    image: "scissor.png",
  },
  {
    name: "Spock",
    image: "spock.png",
  },
];

const rules = {
  Lizard: ["Paper", "Spock"],
  Rock: ["Scissor", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissor: ["Paper", "Lizard"],
  Spock: ["Rock", "Scissor"],
};

const playerOptions = document.querySelectorAll(
  "#player1 .available-options .option"
);

const botOptions = document.querySelectorAll(
  "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
  "#player1 .selected-option .option"
);


playerOptions.forEach((e) => {
  e.addEventListener("click", (e) => {
    play(e);
  });
});


function play(e) {
  const playerIndex = e.target.getAttribute("data-index");

  const length = arr.length;

  const botIndex = Math.floor(Math.random() * length);

  show(playerIndex, playerShowArea);
  show(botIndex, botShowArea);

  highlighted(playerIndex, playerOptions);
  highlighted(botIndex, botOptions);

  calculator(playerIndex, botIndex);
}

let pScore = 0;
let bSocre = 0;
let flag = 2;

function calculator(pIndex, bIndex) {
  const player = document.querySelectorAll(
    "#player1 .available-options .option img"
  );

  const bot = document.querySelectorAll(
    "#player1 .available-options .option img"
  );


  const action = rules[player[pIndex].alt];
  
  if (player[pIndex].alt == bot[bIndex].alt) {
    return (message.textContent = "Draw");
  } 
  
  else if (action.includes(bot[bIndex].alt)) {
    pScore++;
    playerScore.textContent = pScore;
    message.textContent = "Player Win";
  } 
  
  else {
    bSocre++;
    botScore.textContent = bSocre;
    message.textContent = "Bot Win";
  }
}

function highlighted(index, options) {
  options.forEach((option) => {
    option.classList.remove("active");
  });
  options[index].classList.add("active");
}

function generateImg(index) {
  const imgElement = document.createElement("img");
  imgElement.src = `${imgPath}/${arr[index].image}`;
  imgElement.alt = arr[index].name;
  return imgElement;
}

function show(index, showArea) {
  const imgElement = generateImg(index);
  showArea.innerHTML = "";
  showArea.append(imgElement);
}

function resetMethod() {
  window.location.reload();
}


reset.addEventListener("click", resetMethod);