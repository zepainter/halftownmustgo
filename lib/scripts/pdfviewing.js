document.addEventListener("adobe_dc_view_sdk.ready", function() {
    let adobeDCView = new AdobeDC.View({clientId: "d6d0d652ee764ccc9cbd1a2b35d62c75", divId: "may-2021-letter-pdf"});
    adobeDCView.previewFile({
      content:   {location: {url: "lib/materials/Council-of-Chiefs-Letter-May-2021.pdf"}},
      metaData: {fileName: "Council-of-Chiefs-Letter-May-2021.pdf"}
    });
});