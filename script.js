let mainContainer = document.getElementById('mainContainer');
const color = ['#008160', '#eee', '#bcbcbc', '#5b5b5b', '#1a1a1a', '#fff']
let i = 0;



function changeColor() {
  mainContainer.style.backgroundColor = color[i++]

  if (i >= color.length) {
    i = 0;
  }
};