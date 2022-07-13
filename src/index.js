export const paintCards = () => {
  const redCart = document.querySelectorAll('.item:nth-child(odd)');
  redCart.forEach((item) => item.style.backgroundColor = "red");
};

export const findElement = () => {
  let blueCart = document.querySelector('li');
  while (blueCart) {
    if (blueCart.matches('.likedItem')) {
      blueCart.style.backgroundColor = "blue";
      break;
    } else {
      blueCart = blueCart.nextElementSibling;
    }
  }
};
