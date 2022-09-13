import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ fortunes = defaultFortunes }) => {
  const initialFortune = { msg: "Think of a question", color: "black" };
  const [fortune, setFortune] = useState(initialFortune);
  const pickFortune = () =>
    fortunes[Math.floor(Math.random() * fortunes.length)];
  return (
    <div className="EightBall">
      <div
        className="EightBall-circle"
        style={{ backgroundColor: fortune.color }}
      >
        <span className="EightBall-msg">{fortune.msg}</span>
      </div>
      <button
        onClick={() => setFortune(pickFortune())}
        className="EightBall-button"
      >
        Receive Doubtful Advice!
      </button>
    </div>
  );
};

interface Fortune {
  msg: string;
  color: string;
}

const defaultFortunes = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

export default EightBall;
