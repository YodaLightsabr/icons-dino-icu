import IconLibrary from '../../../../../icons.js';

export default async function handler(request, response) {
    let { color, glyph } = request.query;
    if (glyph.endsWith('.svg')) glyph = glyph.substring(0, glyph.length - 4);
    response.end(IconLibrary.icon(glyph, undefined, color));
}