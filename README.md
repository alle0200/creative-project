# [Creative Final Project: Phrase Colors]

A creative final project for Creative Web Development. This project was developed using the colord npm package (https://www.npmjs.com/package/colord) and created with HTML5, dart-sass, and JavaScript.

Phrase Colors is an interactive website where a user can type in a phrase and receive a color generated from what they typed. The site stores the last nine phrases and colors that the user generated, and displays their respective hexadecimal codes.

This project is meant to help bring fun to words, as well as to simmulate synesthesia (experiencing multiple senses at once, such as seeing colors when words are spoken).

## How It Works

Phrase Colors runs largely on JavaScript and the colord node package. It works by taking an input string, splitting that string into thirds, and then taking the ASCii value of every character within each respective third. Once it finds all the ASCii values of a third, it adds them all together and averages them. From there, each of these thirds represent a color value in RGB color. All values are locked within the range of 0 and 255, so there is no worry about an invalid color value being generated. Once a color is created, it is applied to the text at the top of the screen. It is also stored into an array so that the user can view their last nine generated colors.

Additionally, once a RGB color is created, Phrase Colors uses the colord node package to draw information about said color. It uses built-in functions like .isLight() and .isDark() to check the brightness of the color. If a color is too bright or dark, the background color is changed so that the text is still readable. Additionally, functions like .toHex() allows for Phrase Colors to convert the RGB colors it generates into hexadecimal code. Other functions like .toHSL() and .toRgb() can also convert the colors to their respective color codes, although these functions are not implemented in Phrase Colors.

## Used Resources

* Colord NPM: (https://www.npmjs.com/package/colord)
* Animated Background: (https://wweb.dev/resources/animated-css-background-generator/)
* Gradient Background: (https://cssgradient.io)