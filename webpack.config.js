const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    plugins: [
      new CopyPlugin([{
        patterns: [
          { from: 'node_modules/@pdftron/webviewer/public', to: 'public/webviewer' },
        ]
        }]
      ),
    ],
  };