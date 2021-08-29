const sharp = require('sharp');
const compress_images = require('compress-images')

const fs = require('fs');


let path = process.argv[2];
let width = Number(process.argv[3]);


function resize(inputPath, outputPath, width) {
    sharp(inputPath).resize({ width: width }).toFile(outputPath, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Imagem redimencionada com sucesso")
            compress(outputPath, "./compressed/")
        }
    })
}

function compress(pathInput, outputPath) {

    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "webp", command: ['-q', '60'] } },
        { png: { engine: "pngquant", command: ["--quality=20-50"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "webp", command: ['-q', '60'] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log("-------------");
            console.log(completed);
            console.log("-------------");
            console.log(statistic);
            console.log("-------------");




            fs.unlink(pathInput, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(pathInput, "apagado!")
                }
            })
        });


}

resize(path, "./temp/output_resize.jpg", width)

