import IconLibrary from '../../icons.js';

export default async function handler(request, response) {
    const { icon } = request.query;
    response.end(IconLibrary.icon(icon));
}