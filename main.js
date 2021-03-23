count = 1;

function start() {
    let bf = document.getElementById("bf").value.length;
    let gf = document.getElementById("gf").value.length;
    valuebf = document.getElementById("bf").value;
    valuegf = document.getElementById("gf").value;

    if (valuebf == "") {
        alert("please enter your name")
    }
    else if (count > 1) {
        alert("refresh the website")
    }
    else if (!isNaN(valuebf)) {
        alert("numbers are not allowed in name");
    }
    else if (valuegf == "") {
        alert("please enter your lover nam")
    }
    else if (!isNaN(valuegf)) {
        alert("numbers are not allowed in name");
    }
    else if (bf >= 3 && gf >= 3) {
        let Percentage = document.getElementById("Percentage");
        Percentage.style.fontSize = "30px";
        Percentage.style.color = "white";
        btn = document.getElementById("btn");
        let random_no = Math.floor(Math.random() * 100);
        if (count==1) {
             random_no=(random_no<50)?random_no+50:random_no;
            Percentage.innerHTML = random_no + "%";
            count++;
        }
    }
}