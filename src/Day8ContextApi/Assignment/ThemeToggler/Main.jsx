import { useState } from "react";

import { ThemeProvider } from "styled-components";
import Splash from "./SplashScreen";

const LightTheme = {
    pageBackground: "white",
    titleColor: "#EA4D93",
    tagLineColor: "black",
};

const DarkTheme = {
    pageBackground: "#181818",
    titleColor: "#EA4D93",
    tagLineColor: "lavender",
};

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

function Main() {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeProvider theme={themes[theme]}>
            <Splash theme={theme} setTheme={setTheme} />
        </ThemeProvider>
    );
}

export default Main;