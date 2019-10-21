# Figma Design Token Import Plugin

## NOT YET WORKING! (can't write color swatches!)

This currently only (partially) works with Theo-based design tokens.

Copy the URL to your raw theo JSON file (/web/token.raw.json) into the box. It will read tokens in the background-color category. You'll get to select which ones to import from the list.

## Todo's
1. Make this work at all :)
2. Save presets (previously imported etc)
3. Pass current document swatches into the ui section so we can have an "update?" screen
4. Clean up the ui styling (currently super minimal)

## From the Figma Plugin Template

This plugin template uses Typescript. If you are familiar with Javascript, Typescript will
look very familiar. In fact, valid Javascript code is already valid Typescript code.

Typescript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using Typescript requires a compiler to convert Typescript (code.ts) into Javascript (code.js)
for the browser to run.

To get the TypeScript compiler working:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Install the TypeScript compiler globally: `sudo npm install -g typescript`.
3. Open this directory in Visual Studio Code.
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
