const main = document.querySelector(".main");
const restart = document.querySelector(".restart");

let started = false;

main.addEventListener("click", () => {
  if (started) {
    stopAction();
    main.textContent = "Start";
  } else {
    startAction();
    main.textContent = "Stop";
  }

  started = !started;
});

let stopAction = () => {
  console.log("Stopped timer.");
};

let startAction = () => {
  console.log("Started timer.");
};

restart.addEventListener("click", () => {
  console.log("Restart the timer.");

  main.textContent = "Start";
});
