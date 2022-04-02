import IconLibrary from '../../../icons.js';

export default async function handler(request, response) {
    let { color, glyph } = request.query;
    if (color.startsWith('color:')) color = color.substring(6);
    if (glyph.startsWith('glyph:')) glyph = glyph.substring(6);
    response.setHeader('Content-Type', 'image/svg+xml');
    if (color.startsWith('0x') && color.length === 8) color = '#' + color.substring(2);
    if (glyph.endsWith('.svg')) glyph = glyph.substring(0, glyph.length - 4);
    response.end(IconLibrary.icon(glyph, undefined, color));
}

// What a request should look like:
// https://icons.dino.icu/icons/color:red/glyph:channels.svg