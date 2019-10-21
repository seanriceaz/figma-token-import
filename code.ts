import { SSL_OP_SINGLE_DH_USE } from "constants";

// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-update-colors') {
    const importedColorKeys = Object.keys(msg.colors);
    const documentColors = figma.getLocalPaintStyles();
    const documentColorKeys = Object.keys(documentColors);
    const tempColors = {};
    for (let k in documentColorKeys) {
      // TODO: Warn about colors with duplicate names
      tempColors[documentColors[documentColorKeys[k]].name] = documentColors[documentColorKeys[k]];
    }
    for (let i = 0; i < importedColorKeys.length; i++) {
      //Construct our color object
      if (msg.colors[importedColorKeys[i]].value.indexOf("rgb") > 0){ // Simple check to make sure we've got the right format
        const colorValues = msg.colors[importedColorKeys[i]].value.match(/\([0-9]{1,3}/g);
        const tempPaint: SolidPaint = {
          type: 'SOLID',
          color: {
            r: parseInt(colorValues[0])/255,
            g: parseInt(colorValues[1])/255,
            b: parseInt(colorValues[2])/255,
          },
          opacity: colorValues[3] !== "undefined"? colorValues[3] : 1,
        };
        // CANT update paint styles yet... hmmm
        //if (tempColors[importedColorKeys[i]] !== "undefined") {
        //  // We're importing a color to overwrite the document one
        //  documentColors[tempColors[importedColorKeys[i]].key].paints[0] = tempPaint;
        //
        //} else {
          // We're creating a new one
        //}

        const tempPaintStyle: PaintStyle = {
          type: 'PAINT',
          name: msg.colors[importedColorKeys[i]].name,
          description: '',
          remote: false,
          paints: [tempPaint],
        }
        //DOESN't WORK EITHER :(
        //figma.createPaintStyle(tempPaintStyle);

      }
    }
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
