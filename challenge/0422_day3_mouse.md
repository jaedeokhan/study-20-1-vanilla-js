### Vanilla JS Day 3

#### Requirements
1. The text of the title should change when the mouse is on top of it.
   * The mouse is here! , colors[0] 
2. The text of the title should change when the mouse is leaves it.
   * The mouse is gone! , colors[1]
3. When the window is resized the title should change.
   * You just rizsed
4. On right click the title should also change.
   * That was a right key!
5. The colors of the tittle should come from a color from the colors array.
6. DO NOT CHANGE .css, or .html files.
7. ALL functions handlers should be INSIDE of "superEventHandler"

IF ANY OF THE REQUIREMENTS ARE NOT fulfilled you will get an (x)

> index.js
```js
// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");

const superEventHandler = {
  mouseOver: function mouseOver() {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLevae: function mouseLeave() {
    title.innerHTML = "The mouse is gone";
    title.style.color = colors[1];
  },
  resize: function resize() {
    title.innerHTML = "You just resized";
    title.style.color = colors[2];
  },
  contextMenu: function contextMenu() {
    title.innerHTML = "That was a right key!";
    title.style.color = colors[4];
  }
  // handleResize: function() {
  //   title.innerHTML = "Your juse resized";
  //   title.style.color = colors[0];
  // },
  // handleOnMouse: function() {
  //   title.innerHTML = "YThe mouse is here!";
  //   title.style.color = colors[1];
  // }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLevae);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
// The mouse is here ! 1
// The mouse is gone 2
// you just resized 3
// That's was a right click! 4

```

> style.css
```css
body {
  font-family: sans-serif;
}
```

> index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h2>Hello!</h2>
    <script src="src/index.js"></script>
  </body>
</html>
```
