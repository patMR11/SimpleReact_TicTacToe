import React, { useRef, useState } from "react";
import './TicTacToe.css'
import circle_icon from'../../assets/circle.png'
import cross_icon from'../../assets/cross.png'

let data = ["","","","","","","","",""]
const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];
const TicTacToe = ()=>{
    let [count,setCount] = useState(0)
    let [lock,setLock] = useState(false)
    let announceWinner = useRef(null)
    const toggle = (e,num)=>{
        if(lock){
            return 0
        }
        if(count%2==0){
            e.target.innerHTML = `<img src = '${cross_icon}'/>`
            data[num] = "x";
            setCount(++count)
        }else{
            e.target.innerHTML = `<img src = '${circle_icon}'/>`
            data[num]='o'
            setCount(++count)
        }
        checkWinner()
    }

    const checkWinner=()=>{
        for(let combination of winningCombinations){
            const [a,b,c] = combination 
            if(data[a] && data[a]=== data[b] && data[a]===data[c]){
                won(data[a])
                console.log(data[a])
            }
        }
    }   

    const won = (winner) =>{
        setLock(true)
        if(winner === 'x'){
            announceWinner.current.innerHTML = `<img src = '${cross_icon}'/> wins`
        }else{
             announceWinner.current.innerHTML = `<img src = '${circle_icon}'/> wins`
        }
    }

    const reset = () =>{
        window.location.reload()
    }

    return(

        <div className="container">
            <h1 className="title" ref = {announceWinner}>Simple TicTacToe Game</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe