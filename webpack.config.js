module.exports = [{
    entry: ["./host/host.js"],
    output: {
        path: "./",
        filename: "host.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel"
        }]
    },
    resolve: {
        extensions: [
            "", ".js"
        ],
        modulesDirectories: [
            "node_modules",
        ]
    }
}, {
    entry: ["./participant/participant.js"],
    output: {
        path: "./",
        filename: "participant.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel"
        }]
    },
    resolve: {
        extensions: [
            "", ".js"
        ],
        modulesDirectories: [
            "node_modules",
        ]
    }
}];
