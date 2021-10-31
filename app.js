const currentDisplayField = document.querySelector(".current-display");
const previousDisplayField = document.querySelector(".previous-display");
const buttonsContainer = document.querySelector(".buttons-container");

buttonsContainer.addEventListener("click", e =>{
  if (e.target.classList.contains("number") && currentDisplayField.innerText.length <8) {
    if ((currentDisplayField.innerText == "" && e.target.classList.contains("number-0")) || currentDisplayField.innerText.split("")[0] == 0) {
      currentDisplayField.innerText = e.target.innerText;
    }    
    else{
      currentDisplayField.innerText += e.target.innerText;
    }
  }
  if (e.target.classList.contains("decimal") && !currentDisplayField.innerText.includes(",")) {
    currentDisplayField.innerText += e.target.innerText;
  }
  //*******// if (currentDisplayField.innerText.includes("0") && currentDisplayField.innerText.includes(",") ) {
  //   currentDisplayField.innerText += e.target.innerText;
  // }

  if (e.target.classList.contains("operator")) {
    const operator = e.target.innerText;
    switch (operator) {
      case "+":
        if (currentDisplayField.innerText !== "") {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = ""
        }
        break;

        case "-":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
          break;

        case "x":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
          break;
        
        case "÷":
          if (currentDisplayField.innerText !== "") {
            previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
            currentDisplayField.innerText = ""
          }
        
        case "=":
          if (currentDisplayField.innerText !== "") {
            if (previousDisplayField.innerText.includes("+")) {
              const currentNumber = Number(currentDisplayField.innerText);
              const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
              currentDisplayField.innerText = previousNumber + currentNumber;
              previousDisplayField.innerText = ""
            }

            
              if (previousDisplayField.innerText.includes("-")) {
                const currentNumber = Number(currentDisplayField.innerText);
                const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                currentDisplayField.innerText = previousNumber - currentNumber;
                previousDisplayField.innerText = ""
              }
    
                if (previousDisplayField.innerText.includes("÷")) {
                const currentNumber = Number(currentDisplayField.innerText);
                const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                if (currentNumber == 0) {
                  currentDisplayField.innerText = "HATA";
                }
                else{
                  currentDisplayField.innerText = previousNumber / currentNumber;
                }
                previousDisplayField.innerText = "";
              
                }
                if (previousDisplayField.innerText.includes("x")) {
                  const currentNumber = Number(currentDisplayField.innerText);
                  const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]);
                  currentDisplayField.innerText = previousNumber * currentNumber;
                  previousDisplayField.innerText = "";
                }
              }
              break;

      default:
        break;
    }
  }

  if (e.target.classList.contains("function")) {
    const func = e.target.innerText;
    switch (func) {
      case "AC":
        currentDisplayField.innerText = "";
        previousDisplayField.innerText = "";
        break;
      case "±":
        if (!currentDisplayField.innerText.includes("-")) {
          currentDisplayField.prepend("-");
        }
        else {
          currentDisplayField.innerText = currentDisplayField.innerText.split("-")[1];
        }
        break;
      case "%":
        if (currentDisplayField.innerText !== "") {
          currentDisplayField.innerText = currentDisplayField.innerText /100;
        }
        break;
    
      default:
        break;
    }
  }

})







































// Set up the time
// const uptadeTime = () => {
//     const currentTime = new Date();

//     const currentHour = currentTime.getHours();
//     const currentMinute = currentTime.getMinutes();

//     hourEl.textContent = currentHour.toString();
//     minuteEl.textContent = currentMinute.toString().padStart(2,"0");

// }
// setInterval(uptadeTime, 1000);
// uptadeTime();