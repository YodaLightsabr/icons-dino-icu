export default function handler(request, response) {
    response.send(`
        <p>docs aren't here</p>
        <p>docs are on <a href="https://github.com/yodalightsabr/icons-dino-icu">github<a></p>
    `);
}

// What a request should look like:
// https://icons.dino.icu/icons/color:red/glyph:channels.svg