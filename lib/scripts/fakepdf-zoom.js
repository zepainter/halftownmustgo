let zoomBtns = document.querySelectorAll('.fakepdf-zoom');
for (ix=0 ; ix<zoomBtns.length ; ix++) {
  zoomBtns[ix].onclick = function(event) {
    pages = event.target.parentNode.parentNode.querySelectorAll('.fakepdf-page');
    if (event.target.matches('.fakepdf-zoomin')) {
      zoom(pages,'in');
    } else if (event.target.matches('.fakepdf-zoomout')) {
      zoom(pages,'out');
    } else {
      zoom(pages,'fit');
    }
  }
}

function zoom(pages,direction) {
  fitWidth = parseFloat(window.getComputedStyle(pages[1].parentNode).width);
  currentWidth = parseFloat(window.getComputedStyle(pages[1]).width)/fitWidth;
  newWidth = (direction=='in') ? currentWidth + .1 :
    (direction=='out') ? currentWidth - .1 : .95;
  if (newWidth<.05) { newWidth = .05; }
  for (ix=0 ; ix<pages.length ; ix++) {
    pages[ix].style.width = newWidth*100 + '%';
    pages[ix].style.justifySelf = (newWidth>1) ? 'left' : 'center';
  }
}