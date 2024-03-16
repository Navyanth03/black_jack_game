const messageEl=document.getElementById("message-el")
const cardsEl=document.getElementById("cards-el")
const sumEl=document.getElementById("sum-el")
const playerEl=document.getElementById("player-el")
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let player={
    name:"Navyanth",
    tokens: 100000000000000
}

playerEl.textContent=player.name+": $"+player.tokens

function getRandomCard(){
    let rand=Math.floor(Math.random()*13)+1
    if(rand===1)return 11
    else if(rand>10)return 10
    return rand
}

function startGame(){
    if(!isAlive){
        let firstCard=getRandomCard()
        let secondCard=getRandomCard()
        cards=[firstCard,secondCard]
        isAlive=true
        hasBlackJack=false
        sum=firstCard+secondCard
        renderGame()
    }
}

function renderGame(){
    if(sum>21){
        isAlive=false
        message="You're out of the game"
    }else if(sum<21){
        message="Do you want to pick another card"
    }else{
        hasBlackJack=true
        isAlive=false
        message="You have got a Black Jack"
    }
    messageEl.textContent=message
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)cardsEl.textContent+=`${cards[i]} `
    sumEl.textContent="Sum: "+sum
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}