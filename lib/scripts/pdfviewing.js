document.addEventListener("adobe_dc_view_sdk.ready", function() {
  let pdfsToView = document.getElementsByClassName('embpdf');
  for (ix=0 ; ix<pdfsToView.length ; ix++) {
    pdfId = pdfsToView[ix].id;
    pdfUrl = "lib/materials/" + pdfId;
    pdfUrl += (pdfId=="Keel-Decision-20110819") ? ".PDF" : ".pdf";
    pdfName = pdfId + ".pdf";
    let adobeDCView = new AdobeDC.View({clientId: "d6d0d652ee764ccc9cbd1a2b35d62c75", divId: pdfId});
    adobeDCView.previewFile({
      content:   {location: {url: pdfUrl}},
      metaData: {fileName: pdfName}
    });
  }
});