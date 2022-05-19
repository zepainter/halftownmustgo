let pdfs = document.getElementsByClassName('embpdf');
for (ix=0 ; ix<pdfs.length ; ix++) {
  pdfs[ix].addEventListener('load',function(event) {
    event.preventDefault();
  })
}