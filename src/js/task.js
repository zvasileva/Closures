export default function findBy(item1, item2) {
  return function (x) {
    return x[item1] === item2;
  };
}
