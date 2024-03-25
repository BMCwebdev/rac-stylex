This directory is a work in progress.

The file `tokens.json` are the orginal tokens provided by the UX team.

In the `tooling` directory is an HTML file that creates a page to assist in converting the JSON into the format that Stylex requires. However, after experimenting with this I quickly realized that the originating JSON file is too complex, and that it didn't map well to the logic that would be needed for the component library.

Having said that, the HTML file was still helpful for doing this by hand, so it remains for now.

A system will have to be devised in order to maintain the tokens. We would like to have
* A single source of truth
* That can be consumed by both the component library and Figma.

In the meantime, in this directory can be found token variables for colors, sizing, fonts, and type definitions as well.


Defining variables: https://stylexjs.com/docs/learn/theming/defining-variables/
Theming in StyleX: https://stylexjs.com/docs/api/javascript/defineVars/