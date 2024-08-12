import "./Board.css";

function Board() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="grid grid-cols-3">
        <div className="border-2">01</div>
        <div className="border-2">02</div>
        <div className="border-2">03</div>
        <div className="border-2">04</div>
        <div className="border-2">05</div>
        <div className="border-2">06</div>
        <div className="border-2">07</div>
        <div className="border-2">08</div>
        <div className="border-2">09</div>
      </div>
    </>
  );
}

export default Board;
