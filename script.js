class Calculator {
  constructor() {
    this.buffer = "0";
    this.total = 0;
    this.operator = "";
  }

  setScreen(number) {
    document.querySelector(".screen").innerHTML = number;
  }

  numberButton(number) {
    if (this.buffer === "0") {
      this.buffer = number;
    } else {
      this.buffer += number;
    }
    this.setScreen(this.buffer);
  }

  calculate(value) {
    if (this.total === 0) {
      this.total += value;
    } else {
      switch (this.operator) {
        case "+":
          this.total += value;
          break;
        case "−":
          this.total -= value;
          break;
        case "×":
          if (value !== 0) {
            this.total *= value;
          }
          break;
        case "÷":
          if (value !== 0) {
            this.total /= value;
          }
          break;
      }
    }
    this.setScreen(this.total);
  }

  symbolButton(symbol) {
    switch (symbol) {
      case "C":
        this.buffer = "0";
        this.total = 0;
        this.operator = "";
        this.setScreen(this.buffer);
        break;

      case "←":
        if (this.buffer.length !== 1) {
          this.buffer = "0";
        } else {
          this.buffer = this.buffer.substring(0, this.buffer.length - 1);
        }
        this.setScreen(this.buffer);

      case "=":
        this.calculate(parseFloat(this.buffer));
        this.operator = "";
        this.buffer = "0";
        break;

      case "÷":
      case "×":
      case "−":
      case "+":
        this.operator = symbol;
        this.calculate(parseFloat(this.buffer));
        this.buffer = "0";
        this.setScreen(this.buffer);
        break;

      default:
    }
  }

  clickButton(button) {
    if (!isNaN(button)) {
      this.numberButton(button);
    } else {
      this.symbolButton(button);
    }
  }
}

const click = new Calculator();

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    click.clickButton(button.textContent);
  });
});
