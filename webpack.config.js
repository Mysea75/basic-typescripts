module.exports = {
    mode: 'development',
    entry: './index.ts',
    output:{
        filename:"main.js",
        publicPath: "dist"
    },
    devServer:{
        open:true,
        port:8080,
    },

    module:{
        rules:[
            {
                test:/\.tsx?$/,
                exclude: /node_modules/,
                loader:'ts-loader',
            }
        ]
    },
    resolve:{
        extensions:[".tsx",".ts",".js"]
    }
}