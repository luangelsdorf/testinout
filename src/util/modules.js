export function getMaxHeight(elements = NodeList) {
  let height = 0;
  elements.forEach((element, index) => {
    if (index === 0 || index === elements.length - 1) {
      height += (element.clientHeight / 2);
    } else {
      height += element.clientHeight;
    }
  });
  height += 50 * (elements.length - 1);
  return height;
}