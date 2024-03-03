let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let calculateAge = document.querySelector("button");

let age = document.getElementById("age");

calculateAge.addEventListener("click", () => {
    if (userInput.value == "") {
        alert("Enter the birth date!")
    }
    else {

        let birthDate = new Date(userInput.value);
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let presentDate = new Date();
        let m2 = presentDate.getMonth() + 1;
        let y2 = presentDate.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        }
        else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        age.innerText = `Your age is ${y3} years old`
    }
});

