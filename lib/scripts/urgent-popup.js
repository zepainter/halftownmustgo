let urgent = document.querySelector('#urgent');
if (!(urgent===null)) {
  setTimeout(() => {
    addPopup();
  },1000)
}

function addPopup() {
  mask = document.createElement('div');
  mask.className = 'mask';
  mask.onclick = () => { mask.parentNode.removeChild(mask); }
  document.body.appendChild(mask);

  popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = urgent.innerHTML;
  popup.onclick = (event) => { event.stopPropagation(); }
  mask.appendChild(popup);

  xout = document.createElement('div');
  xout.className = 'xout';
  xout.textContent = 'X';
  xout.onclick = () => { mask.parentNode.removeChild(mask); }
  popup.appendChild(xout);
}