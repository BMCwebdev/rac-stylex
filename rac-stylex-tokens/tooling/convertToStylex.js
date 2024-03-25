import fs from 'fs';

function convertColorsToStylex(inputFilePath, colorsOutputPath, aliasOutputPath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        const jsonData = JSON.parse(data);
        const { color, ...aliasTokens } = jsonData.s; // Destructure to separate color tokens and aliases.

        const stylexVars = Object.entries(color).reduce((acc, [group, shades]) => {
            Object.entries(shades).forEach(([shade, { value }]) => {
                const varName = `${group}${shade}`; // Keep original variable name format.
                acc[varName] = value;
            });
            return acc;
        }, {});

        // Handle aliases separately, modifying the format as specified.
        const aliasVars = Object.entries(aliasTokens).reduce((acc, [key, value]) => {
            // Modify value format: remove curly brackets, replace `color` with `colors`, and adjust separators.
            const modifiedValue = value.replace(/\{|\}/g, '').replace('color.', 'colors.').replace(/\./g, '-');
            acc[key] = modifiedValue;
            return acc;
        }, {});

        // Prepare and write the direct color definitions to colorsOutputPath.
        const colorsCode = `import { defineVars } from '@stylexjs/stylex';\n\nexport const colors = defineVars(${JSON.stringify(stylexVars, null, 2)});`;
        fs.writeFile(colorsOutputPath, colorsCode, (writeErr) => {
            if (writeErr) {
                console.error("Error writing the file:", writeErr);
            } else {
                console.log(`Successfully written to ${colorsOutputPath}`);
            }
        });

        // Prepare and write the alias definitions to aliasOutputPath.
        const aliasCode = `import { defineVars } from '@stylexjs/stylex';\n\nexport const aliases = defineVars(${JSON.stringify(aliasVars, null, 2)});`;
        fs.writeFile(aliasOutputPath, aliasCode, (writeErr) => {
            if (writeErr) {
                console.error("Error writing the alias file:", writeErr);
            } else {
                console.log(`Successfully written to ${aliasOutputPath}`);
            }
        });
    });
}

// Call the function with paths for the JSON input, colors output, and alias output files.
convertColorsToStylex('stitch-tokens.json', 'colors.stylex.js', 'aliasColors.stylex.js');
