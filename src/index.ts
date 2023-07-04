import fs from 'node:fs';
import path from 'node:path';
import svgToIco from "svg-to-ico";

const inputFolder = path.join(__dirname, 'input/');
const outputFolder = path.join(__dirname, 'output/');

const svgs = fs.readdirSync(inputFolder).filter((file) => {
    return file.endsWith('.svg');
});

svgs.forEach((svg) => {
    const svgPath = inputFolder + svg;
    const icoPath = outputFolder + svg.replace('.svg', '.ico');
    svgToIco(svgPath, icoPath);
});