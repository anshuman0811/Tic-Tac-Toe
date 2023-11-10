let flag = "X";
let isOver = false;


const changeTurn = () =>{
    return flag === "X" ? "0" : "X";
}



const checkWinner = ()=> {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[6,7,8]];
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) 
            && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== "")){
                document.querySelector(".info").innerText = "Winner is " + boxtext[e[0]].innerText;
                isOver = true;
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.visibility = "visible";
            }
    })
}





let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(isOver == false && boxText.innerText === ''){
            boxText.innerText = flag;
            flag = changeTurn();
            document.getElementsByClassName("info")[0].innerText = flag + "'s turn";
            checkWinner();
        }
    })
})

let ele = document.getElementById("reset");

reset.addEventListener("click",() => {
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = '';
        
    })
    isOver = false;
    turn = "X";
    document.querySelector(".info").innerText = "X's turn";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.visibility = "hidden";
});