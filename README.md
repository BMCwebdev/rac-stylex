# RAC tailwind starter kit to StyleX

* React Aria Components starter kit, Tailwind version.
* Converted into the begining of a component library.
* Implemented Stylex.
* Button component converted to Stylex.
* Stylex tokens (vars) in the `tokens` directory.
* Not sure how to implement tokens. Tried exporting them in the main entry file (index.ts). Seemed to be the wrong approach.
* Everything works fine while you are here, inside the component library. You can run `npm run dev` and success!
* When you import this component libary into another app, that's when you start to have issues. Example app can be found here https://github.com/BMCwebdev/remix-app
* If you remove the use of the `colors` vars in the Button component (import statement and actual usage), everything will work fine in the consuming app.
* However I'm still not sure how to incorperate the tokens into the component library. How will users of this library use them in their own app (how will they import them)?

* The other big to-do on the list. Figure a way to get the React Aria Component render props into the Stylex spread function.
[React Aria Components Render Props](https://react-spectrum.adobe.com/react-aria/styling.html#render-props )
[React Aria Components Button Styling](https://react-spectrum.adobe.com/react-aria/Button.html#styling)
[Stylex using styles](https://stylexjs.com/docs/learn/styling-ui/using-styles/)
[Stylex discussion about helper function possible answer](https://github.com/facebook/stylex/discussions/224#discussioncomment-7931984)


