/** @type {import('tailwindcss').Config} */
export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  //Colors Used in the Project
                  colors: {
                        primary: "#f6a64f",
                        secondary: "#b56141",
                        background: "#fffcf8",
                        white: "#fbfbfb",
                  },
                  backgroundImage: {
                        "gradient-primary":
                              "linear-gradient(to right, #faa44f, #ac573f)",
                  },
            },
      },
      plugins: [],
}
