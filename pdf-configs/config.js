module.exports = {
  stylesheet: "./pdf-configs/style.css",
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: false,
  },
  pdf_options: {
    format: "A4",
    margin: "15mm 17mm 17mm",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<section></section>",
    footerTemplate: "<section style=\"margin: 0 auto; color: #5b6573; font-size: 8px;\"><span class=\"pageNumber\"></span> / <span class=\"totalPages\"></span></section>",
  },
  stylesheet_encoding: "utf-8",
};
