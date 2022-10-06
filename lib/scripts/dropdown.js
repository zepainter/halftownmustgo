dropdownBtns = document.querySelectorAll('.dropdown-triangle');
for (ix=0 ; ix<dropdownBtns.length ; ix++) {
  dropdownBtns[ix].onclick = (event) => { dropdown(event.target) };
}

function dropdown(btn) {
  target = document.querySelector('#' + btn.id + '-target');
  if (window.getComputedStyle(target).display=='none') {
    target.style.display = 'grid';
    btn.classList.remove('dropdown-closed');
    btn.classList.add('dropdown-open');
  } else {
    target.style.display = 'none';
    btn.classList.remove('dropdown-open');
    btn.classList.add('dropdown-closed');
  }
}