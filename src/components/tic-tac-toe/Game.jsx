import React, { useEffect, useState } from 'react'

const Square = ({value, onClick})=>{
    return <button onClick={onClick} className='bg-gray-200 text-2xl font-semibold border border-red-600 h-20 w-20 float-left cursor-pointer mr-[-1px] mt-[-1px] text-center'>{value}</button>
}

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXturn, setIsXturn] = useState(true);
    const [status, setStatus] = useState('');

    const getWinner = (squares)=>{
        const winningPattern = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
        ]

        for(let i=0; i<winningPattern.length; i++){
            const [x,y,z] = winningPattern[i];
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
                return squares[x];
            }
        }

        return null;
    }

    useEffect(()=>{
        if(!getWinner(squares) && squares.every(item=>item !== '')){
            setStatus("This is a draw! please restart the game");
        }else if (getWinner(squares)) {
            setStatus(`The Winnner is player ${getWinner(squares)}! please restart the game`);
        } else {
            setStatus(`Player ${isXturn?'X':'O'} please take your turn`)
        }
    },[squares,isXturn]);

    const handleClick = (getCurrentSquare)=>{
        let copySquares = [...squares];
        if(getWinner(squares) || copySquares[getCurrentSquare]) return;
        copySquares[getCurrentSquare] = isXturn?'X':'O';
        setIsXturn(!isXturn);
        setSquares(copySquares);
    }

    const handleRestart = ()=>{
        setSquares(Array(9).fill(''));
        setIsXturn(true);
    }

  return (
    <div className='flex flex-col items-center my-20'>
      <div>
        <Square onClick={()=>handleClick(0)} value={squares[0]}/>
        <Square onClick={()=>handleClick(1)} value={squares[1]}/>
        <Square onClick={()=>handleClick(2)} value={squares[2]}/>
      </div>
      <div>
        <Square onClick={()=>handleClick(3)} value={squares[3]}/>
        <Square onClick={()=>handleClick(4)} value={squares[4]}/>
        <Square onClick={()=>handleClick(5)} value={squares[5]}/>
      </div>
      <div>
        <Square onClick={()=>handleClick(6)} value={squares[6]}/>
        <Square onClick={()=>handleClick(7)} value={squares[7]}/>
        <Square onClick={()=>handleClick(8)} value={squares[8]}/>
      </div>

      <div className='text-center my-8'>
        <h1 className='text-xl font-semibold'>{status}</h1>
        <button className='border rounded mt-8 w-32 bg-amber-500 text-lg shadow-sm shadow-black active:scale-98' onClick={handleRestart}>Restart</button>
      </div>
    </div>
  )
}

export default Game
