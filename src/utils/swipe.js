const foo = () => {}

export default (leftFunction=foo, rightFunction=foo, upFunction=foo, downFunction=foo) => {
  let initialX = null;
  let initialY = null;
  const container = document.querySelector("#image");

  const startTouch = event => {
    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
  };

  const moveTouch = event => {
    if (!initialX || !initialY) {
      container.addEventListener("touchstart", startTouch, { once : true });
      container.addEventListener("touchmove", moveTouch, { once : true });
      return;
    }

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    Math.abs(diffX) > Math.abs(diffY) ?
      diffX > 0 ? leftFunction() : rightFunction()
    :
      diffY > 0 ? upFunction() : downFunction()

    initialX = null;
    initialY = null;

    event.preventDefault();
  };

  container.addEventListener("touchstart", startTouch, { once : true });
  container.addEventListener("touchmove", moveTouch, { once : true });
}
