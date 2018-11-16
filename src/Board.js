import React from 'react';

import './Board.css';

const WIDTH = 800; //px
const HEIGHT = 600; //px
const CELL_SIZE = 20; //px

const boardStyle = {
  width: WIDTH,
  height: HEIGHT,
  backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
};

const Board = () => (
  <div className="board" style={boardStyle}>
  </div>
);

export default Board;

