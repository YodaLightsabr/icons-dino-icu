An attempt to make a CDN for the Hack Club icons.


API v2
**GET** `/icons/color:{color}/glyph:{glyph}.svg`
 * `{color}` - The color of the icon. If it's a hex color, prefix it with `0x`.
 * `{glyph}` The glyph you'd like to get. From https://icons.hackclub.com

An example: `https://icons.dino.icu/icons/color:0xec3750/glyph:clubs.svg`