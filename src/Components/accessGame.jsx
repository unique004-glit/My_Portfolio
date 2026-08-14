import { useEffect, useState } from "react";

const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const Wrap = ({children}) => <main className="grid min-h-screen place-items-center bg-slate-950 p-5 text-white"><section className="w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-7 text-center shadow-2xl">{children}</section></main>;
const Won = () => <p className="mt-5 whitespace-pre-line text-lg font-semibold text-cyan-100">🎉 Congratulations!{"\n"}Opening my portfolio...</p>;

function Tic({onWin,back}) {
  const [board,setBoard]=useState(Array(9).fill(null)); const [turn,setTurn]=useState(false);
  const winner=LINES.find(([a,b,c])=>board[a]&&board[a]===board[b]&&board[a]===board[c])?.map(i=>board[i])[0]||(board.every(Boolean)?"draw":null);
  useEffect(()=>{if(turn||winner)return;const id=setTimeout(()=>{const open=board.map((v,i)=>v?null:i).filter(v=>v!==null);const move=open[Math.floor(Math.random()*open.length)];setBoard(old=>old.map((v,i)=>i===move?"O":v));setTurn(true)},450);return()=>clearTimeout(id)},[board,turn,winner]);
  useEffect(()=>{if(winner!=="X")return;const id=setTimeout(onWin,900);return()=>clearTimeout(id)},[winner,onWin]);
  const reset=()=>{setBoard(Array(9).fill(null));setTurn(false)};
  return <Wrap><button onClick={back} className="text-sm text-cyan-200">← Choose another game</button><h1 className="mt-3 text-3xl font-bold">Tic-Tac-Toe</h1><p className="mt-2 text-sm text-slate-300">Computer starts. You are X.</p><div className="mx-auto mt-6 grid max-w-xs grid-cols-3 gap-2">{board.map((cell,i)=><button key={i} disabled={!turn||!!cell||!!winner} onClick={()=>{setBoard(old=>old.map((v,j)=>j===i?"X":v));setTurn(false)}} className="aspect-square rounded-xl bg-slate-800 text-4xl font-bold text-cyan-300 disabled:cursor-not-allowed">{cell}</button>)}</div>{winner==="X"?<Won/>:<p className="mt-5">{winner==="O"?"Computer won — try again!":winner==="draw"?"Draw — try again!":turn?"Your turn":"Computer is thinking..."}</p>}{winner&&winner!=="X"&&<button onClick={reset} className="mt-4 rounded-lg bg-cyan-300 px-5 py-2 font-semibold text-slate-950">Play again</button>}</Wrap>;
}

function Snake({onWin,back}) {
  const [score,setScore]=useState(0);
  useEffect(()=>{if(score!==5)return;const id=setTimeout(onWin,900);return()=>clearTimeout(id)},[score,onWin]);
  return <Wrap><button onClick={back} className="text-sm text-emerald-200">← Choose another game</button><h1 className="mt-3 text-3xl font-bold">Snake</h1><p className="mt-2 text-slate-300">Eat 5 apples to unlock the portfolio.</p><div className="mt-7 rounded-2xl bg-slate-800 p-8"><span className="text-6xl">🐍</span><p className="mt-4 text-xl">Apples: {score} / 5</p><button onClick={()=>score<5&&setScore(score+1)} disabled={score===5} className="mt-4 rounded-lg bg-emerald-300 px-5 py-2 font-semibold text-slate-950 disabled:opacity-50">Eat apple 🍎</button></div>{score===5?<Won/>:<button onClick={()=>setScore(0)} className="mt-4 text-sm text-slate-300 underline">Reset game</button>}</Wrap>;
}

export default function Game({onWin}) {const [game,setGame]=useState(null);if(game==="tic")return <Tic onWin={onWin} back={()=>setGame(null)}/>;if(game==="snake")return <Snake onWin={onWin} back={()=>setGame(null)}/>;return <Wrap><span className="text-4xl">🏆</span><h1 className="mt-3 text-3xl font-bold">Win to unlock my portfolio</h1><p className="mt-2 text-slate-300">Choose a game.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><button onClick={()=>setGame("tic")} className="rounded-xl bg-slate-800 p-5 hover:bg-slate-700">❌<br/><b>Tic-Tac-Toe</b></button><button onClick={()=>setGame("snake")} className="rounded-xl bg-slate-800 p-5 hover:bg-slate-700">🐍<br/><b>Snake</b></button></div></Wrap>}
