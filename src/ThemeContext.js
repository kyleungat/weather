// import React, {createContext} from 'react'

// const ThemeContext = createContext();

// const defaultTheme = {
//     sunny: {
//         primary: "#449feb",
//         secondary: "#d2e8f5",
//         font: "#555555",
//         image: "/img/sunny.jpg",
//     },
//     rain: {
//         primary: "#b2b2b2",
//         secondary: "#4c4c4c",
//         font: "#ffffff",
//         image: "/img/rain.jpg",
//     },
//     cloud: {
//         primary: "#b2b2b2",
//         secondary: "#4c4c4c",
//         font: "#ffffff",
//         image: "/img/cloud.jpg",
//     },
//     snow: {
//         primary: "#d6d6d6",
//         secondary: "#eeeeee",
//         font: "#5f5f5f",
//         image: "/img/snow.jpg",
//     },
// }

// const themeChosen = (weather) => {
//     switch (weather) {
//         case "clear sky": {
//             return defaultTheme.sunny;
//         }
//         case "rain": {
//             return defaultTheme.rain;
//         }
//         case "cloud": {
//             return defaultTheme.cloud;
//         }
//         case "snow": {
//             return defaultTheme.snow;
//         }
//         default: {
//             return defaultTheme.sunny;
//         }
//     }
// }

// function ThemeProvider(props) {
//     return (
//         <ThemeContext.Provider value={themeChosen}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

// export {ThemeContext, ThemeProvider}
