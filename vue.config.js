module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        // additionalData
      },
    },
  },
};
