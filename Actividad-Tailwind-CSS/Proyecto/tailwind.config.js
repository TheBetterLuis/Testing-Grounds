/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Aqui podemos definir nuestras clases personalizadas
    extend: {
      // Clases Personalizadas
      fontFamily: {
        firacode: ["Fira Code"],
        fixedsys: ["Fixedsys"],
        amazon: ["amazon"],
        amazonitalic: ["amazonitalic"],
        amazonbold: ["amazonbold"],
        amazonbolditalic: ["amazonbolditalic"],
      },

      colors: {
        bluescreen: "#0827F5",

        amazonorange: "#FF9900",
        amazonblack: "#000000",
        amazonorange: "#FF9900",
        amazonblue: "#146eb4",
        amazonsquidink: "	#232f3e",
        amazonwhite: "	#f2f2f2",
        amazonnav: "	#121920",
        amazonalexablue: "	#05A0D1",

        error: "#d32752",
        info: "#f6c31c",
        blue: "#1919e6",
        red: "#e61919",
        yellow: "#e6e619",
        green: "#19e635",
        orange: "#ffa600",
        purple: "#9900ff",

        gray: "#808080",
      },
    },
  },
  plugins: [],
};
