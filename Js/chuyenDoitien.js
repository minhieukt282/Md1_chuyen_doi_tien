function convert() {
    let am = document.getElementById("amount").value;
    let a = document.getElementById("sl1").value;
    let b = document.getElementById("sl2").value;

    if (a == b) {
        document.getElementById("result").innerHTML = am;

    }

    if (a == "vn" && b == "us") {

        document.getElementById("result").innerHTML = am / 23000;
    }

    if (a == "us" && b == "vn") {

        document.getElementById("result").innerHTML = am * 23000;
    }


}

