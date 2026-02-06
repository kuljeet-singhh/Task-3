// Create a function to calculate the distance between two points defined by their (x, y) coordinates.
// Example:
// Input: (0,0) and (3,4)
// Output: 5


function Distance(x1, y1, x2, y2) {
  let distancex = x2 - x1;
  let distancey = y2 - y1;

  return Math.sqrt(distancex * distancex + distancey * distancey);
}
console.log(Distance(0, 0, 3, 4));
