function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}
let fish ={
  cazan: 1,
  karac: 2,
  karp: 3
}
let fly = {};
alert(isEmpty(fly));
