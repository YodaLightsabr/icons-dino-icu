import IconLibrary from '../../icons.js';

export default async function handler(request, response) {
    let { icon } = request.query;
    if (icon.endsWith('.svg')) icon = icon.substring(0, icon.length - 4);
    response.end(IconLibrary.icon(icon));
}