const getNextPieceIndex = (pieces, space) => {
  return pieces.findIndex(piece => {
    if (piece.size1 <= space) {
      return true;
    }
    return false;
  });
};

const isSpaceLeftOnPlate = (piece, y, plate, plateCounter) => {
  return y + piece.size2 > ((plate.height + plate.space) * plateCounter) + plate.height;
};

const calculatePositions = (pieces, plate, sawWidth) => {
  
  let y = 0;
  let x = 0;

  let maxY = 0;
  let restx = plate.height;

  let plateCounter = 0;
  
  const resultPieces = [];
  const sawLines = [];
  const plates = [0];


  while (pieces.length > 0) {
    const index = getNextPieceIndex(pieces, restx);
    
    if (index === - 1) {
      sawLines.push(y + maxY);
      x = 0;
      y = y + maxY + sawWidth;
      maxY = 0;
    } else {
      
      const piece = Object.create(pieces.splice(index, 1)[0]);
      
      if (piece.size2 > maxY) {
        maxY = piece.size2;
      }

      if (isSpaceLeftOnPlate(piece, y, plate, plateCounter)) {
        plateCounter ++;
        y = (plate.height + plate.space) * plateCounter;
        plates.push(y);
      }
      
      piece.x = x;
      piece.y = y;
      resultPieces.push(piece);
      x += piece.size1 + sawWidth;
    }
    restx = plate.width - x;
  }
  return {pieces: resultPieces, plates, sawLines};
};

export default calculatePositions;