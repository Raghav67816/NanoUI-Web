# Font Converter

Font converter generate a .bin file for a given .ttf file. Instead of storing glyph as raw C array, this tool allows generate a .bin file which can be read during the runtime.

Source Code: [here](https://github.com/Raghav67816/NanoTools)

## How to use ?

```bash
usage: font_converter.bin [-h] [-fc FIRST_CHAR] [-lc LAST_CHAR] ttf_path output_path font_size

A utility tool to convert .ttf font to NanoUI compatible font format

positional arguments:
  ttf_path              Target .ttf file
  output_path           Save location of output file
  font_size             Desired font size.

options:
  -h, --help            show this help message and exit

Additional Options:
  -fc, --first-char FIRST_CHAR
                        Index of first character
  -lc, --last-char LAST_CHAR
                        Index of last character
```
