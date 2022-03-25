let count = 0
function ranRan(id){
    let ranX = Math.floor(Math.random() * 81)
    let ranY = Math.floor(Math.random() * 81)
    document.getElementById(id).style.visibility = "visible"
    document.getElementById(id).style.top = ranY + "%"
    document.getElementById(id).style.left = ranX + "%"
    console.log(ranX, ranY);
}
function imInHellMac(){
    let countH = 0
    while (countH != 38) {
        countH++
        ranRan("hell" + countH)
    }
}
function why1() {
    let countHe = 39
    while (countHe != 1) {
        countHe--
        document.getElementById("hell" + countHe).style.visibility = "hidden"
    }
    document.getElementById("butt4").style.visibility = "hidden"
}
function dum1() {
    ranRan("butt2");
    count++;
    if (count >= 5) {
        document.getElementById("butt3").style.visibility = "visible"
    } else {
        ranRan("butt3")
        document.getElementById("butt3").style.visibility = "hidden"
    }
}
function dum2() {
    ranRan("ch1")
    ranRan("ch2")
    ranRan("ch3")
    document.getElementById("ch2").style.visibility = "hidden"
    document.getElementById("ch3").style.visibility = "hidden"
}
function dum3a() {
    document.getElementById("ch1").style.visibility = "hidden"
    document.getElementById("ch2").style.visibility = "visible"
}
function dum3b() {
    document.getElementById("ch2").style.visibility = "hidden"
    document.getElementById("ch3").style.visibility = "visible"
}
function dum3c() {
    document.getElementById("butt1").style.visibility = "hidden"
    document.getElementById("butt2").style.visibility = "hidden"
    document.getElementById("butt3").style.visibility = "hidden"
    document.getElementById("ch3").style.visibility = "hidden"
    imInHellMac()
}