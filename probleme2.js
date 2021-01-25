const visibleCubes = (n) => {
  const fullFace = Math.pow(n, 2);
  const topBottom = n * 2;

  const edges = n * 4;
  const sideFaces = (fullFace - topBottom) * 4;
  const frontAndBackFaces = (fullFace - (topBottom + (n - 2) * 2)) * 2;

  return edges + sideFaces + frontAndBackFaces;
};

console.log("long", visibleCubes(5));

const short = (n) => {
  const result = Math.pow(n, 3) - Math.pow(n - 2, 3);
  return result;
};

console.log("short", short(5));
