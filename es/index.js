import { applyStyle } from './apply-style';
import { cloneNode } from './clone-node';
import { embedImages } from './embed-images';
import { embedWebFonts, getWebFontCSS } from './embed-webfonts';
import { canvasToBlob, checkCanvasDimensions, createImage, getImageSize, getPixelRatio, nodeToDataURL, } from './util';
export async function toSvg(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const clonedNode = (await cloneNode(node, options, true));
    await embedWebFonts(clonedNode, options);
    await embedImages(clonedNode, options);
    applyStyle(clonedNode, options);
    // eslint-disable-next-line no-console
    console.log('clonedNode', clonedNode);
    const datauri = await nodeToDataURL(clonedNode, width, height);
    return datauri;
}
export async function toCanvas(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const svg = await toSvg(node, options);
    const img = await createImage(svg);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = options.pixelRatio || getPixelRatio();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
        checkCanvasDimensions(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
}
export async function toPixelData(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const canvas = await toCanvas(node, options);
    const ctx = canvas.getContext('2d');
    return ctx.getImageData(0, 0, width, height).data;
}
export async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
}
export async function toJpeg(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL('image/jpeg', options.quality || 1);
}
export async function toBlob(node, options = {}) {
    const canvas = await toCanvas(node, options);
    const blob = await canvasToBlob(canvas);
    return blob;
}
export async function getFontEmbedCSS(node, options = {}) {
    return getWebFontCSS(node, options);
}
//# sourceMappingURL=index.js.map