let turn= "X"
let gameover=false;
const changeTurn = ()=>{
    return turn === "X"?"O": "X"
}
const checkWin= ()=>{
    let bxtxt =document.getElementsByClassName('bxtxt');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
]
wins.forEach(e=>{
if((bxtxt[e[0]].innerText===bxtxt[e[1]].innerText) && (bxtxt[e[1]].innerText===bxtxt[e[2]].innerText) && (bxtxt[e[0]].innerText !== '')){
    document.querySelector('.info').innerText=bxtxt[e[0]].innerText + " Won"
    gameover=true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="400px"
    // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
}
})
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let bxtxt = element.querySelector('.bxtxt');
element.addEventListener('click', ()=>{
    if(bxtxt.innerText===''){
        bxtxt.innerText=turn;
        turn=changeTurn();
        checkWin();
        if(!gameover){
        document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
        }
    }
})
}) 
reset.addEventListener('click', ()=>{
    let bxtxts = document.querySelectorAll('.bxtxt');
    Array.from(bxtxts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})