import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.78,
  scaleRatio: 2.8,
  paragraphSpacing: 0.7,
  headerFontFamily: ["Work Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  // See below for the full list of options.
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    h1: {
      fontWeight: 700
    },
    small: {
      fontSize: rhythm(1 / 2),
      marginTop: rhythm(1 / 2),
      marginBottom: rhythm(1 / 2)
    }
  })
});

export default typography;
