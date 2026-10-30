// Tutorial setzt keine Sprache -> Lighthouse meldet fehlendes <html lang>
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "de" })
}
