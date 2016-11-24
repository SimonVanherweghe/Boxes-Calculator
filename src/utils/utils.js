const pushN = (amout, arr) => {
  const result = [];
  for (let i = 0;i < amout;i ++) {
    result.push(...arr);
  }
  return result;
};

const orderBySize = (a, b) => {
  const collator = new Intl.Collator();
  if (a.size2 > b.size2) {
    return - 1;
  } else if (a.size2 === b.size2) {
    if (a.size1 > b.size1) {
      return - 1;
    } else if (a.size1 === b.size1) {
      return collator.compare(a.name, b.name);
    }
  }
  return 1;
};

export const calculateSides = (blocks, depth) => {
  return blocks.map((block, i) => {
    const {width, height} = block.size;
    const letter = String.fromCharCode(65 + i);
    const horizontalPanel = {
      size1: width,
      size2: depth,
      name: `${letter}-H`
    };
    const verticalPanel = {
      size1: height,
      size2: depth,
      name: `${letter}-V`
    };

    return pushN(block.amount, [horizontalPanel, horizontalPanel, verticalPanel, verticalPanel]);
  }).reduce((a, b) => a.concat(b)).sort(orderBySize);
};

export const calculateBacks = (blocks, groove) => {
  return blocks.map((block, i) => {
    const {width, height} = block.size;
    const letter = String.fromCharCode(65 + i);
    const backPanel = {
      size1: height - (groove * 2),
      size2: width - (groove * 2),
      name: `${letter}-B`
    };

    return pushN(block.amount, [backPanel]);
  }).reduce((a, b) => a.concat(b)).sort(orderBySize);
};

export const groupPieces = pieces => {
  const result = new Map();
  pieces.forEach(piece => {
    const name = `${piece.size1}-${piece.size2}`;
    if (!result.has(name)) {
      result.set(name, []);
    }
    const arr = result.get(name);
    arr.push(piece);
    result.set(name, arr);
  });

  return [...result];
};
