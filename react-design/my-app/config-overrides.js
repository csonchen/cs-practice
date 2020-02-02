const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    // enable legacy decorators babel plugin
  
    // disable eslint in webpack
  
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    }),
  
    // adjust the underlying workbox
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    )
  );