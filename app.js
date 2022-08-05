
function getHistory(){
    return document.getElementsByClassName(".history-value").innerText
}
// alert(getHistory());
function printHistory(num){
    document.getElementsByClassName(".history-value").innerText=num;
}
printHistory("9*9+9")