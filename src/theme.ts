const theme = {
  color: {
    background: "#f9f7f7",
    blueBackground: "#dbe2ef",
    blue: "#3f72af",
    darkBlue: "#112d4e",
    dark: "#282c34",
  },
  size: {
    borderRadius: "5px",
  },
  breakpoint: {
    mobile: 320,
    tablet: 800,
    desktop: 1200,
    largeDesktop: 1600,
  },
  font: {
    heading: "IM Fell English SC",
    text: "Josefin Sans",
    title: "decadence",
  },
}

export type Theme = typeof theme

export default theme
