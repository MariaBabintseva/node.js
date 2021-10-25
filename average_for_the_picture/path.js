const fs = require('fs')
const { getAverageColor } = require('fast-average-color-node');

const img = process.env.PIC

if (!img) {
    console.error('ERROR')
    return true;
}

const fileExists = fs.existsSync(img)
if (!fileExists) {
    console.error('ERROR')
    return true;
}

getAverageColor(img).then(color => {
    console.log(color);
});

