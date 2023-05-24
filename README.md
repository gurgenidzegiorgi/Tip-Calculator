# Tip calculator app solution


- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

### Screenshot

![project Preview](./src/assets/images/desktop-preview.jpg 'Project Preview')


## My process

### #useful-resources

- Fonts URL: [Space Mono](https://fonts.google.com/specimen/Space+Mono?query=spac)
- Icons URL: [Fav-Icon](https://icons8.com/)
- Resources: [ChatGPT](https://chat.openai.com/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned


```css
.tipAmountDiv input:focus-visible,
.inputDiv input:focus-visible {
  outline: 2px solid #26C2AE;
}
```
```js
function HandleCostumTip(e) {
    let value = e.target.value;
    const splitValue = String(value)
      .split("")
      .map((n) => Number(n));
    if (!isNaN(value) && !splitValue.includes(NaN)) {
      props.setTipPercent(Number(value));
      props.setCostumTip(Number(value));
    } else {
      props.setCostumTip(value);
      props.setTipPercent("");
    }
}
```

## Author

- GitHub Repo - [Tip Calculator](https://github.com/gurgenidzegiorgi/Tip-Calculator)
- Live URL - [Vercel](https://tip-calculator-gurgenidzegiorgi.vercel.app/)
- Author - [Giorgi Gurgenidze](https://www.linkedin.com/in/george-gurgenidze-5801501a0/)
