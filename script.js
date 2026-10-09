const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".calculator button");

let expression = "";

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent;

        if (value === "AC") {
            expression = "";
        }

        else if (value === "DEL") {
            expression = expression.slice(0, -1);
        }

        else if (value === "=") {
            try {
                expression = eval(expression);
            } catch {
                expression = "Error";
            }
        }

        else {
            expression += value;
        }

        input.value = expression;
    });

});

