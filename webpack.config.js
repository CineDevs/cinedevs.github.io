module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        path: __dirname + "/src/scripts",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },
}