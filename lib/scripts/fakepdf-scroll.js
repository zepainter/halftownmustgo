let pdfs = document.querySelectorAll('.fakepdf-pages');
for (ix=0 ; ix<pdfs.length ; ix++) {
  pdfs[ix].onscroll = function(event) {
    updateCurrentPage(event.target);
  }
}

function updateCurrentPage(pdf) {
  pageHeight = parseFloat(window.getComputedStyle(pdf.querySelector('.fakepdf-page')).height);
  currentPage = Math.floor(pdf.scrollTop/pageHeight) + 1;
  currentPageLabel = pdf.parentNode.querySelector('.fakepdf-currentpage');
  currentPageLabel.textContent = currentPage;
}