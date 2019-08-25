/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          '300': '#88DF45',
          '600': '#356F2D'
        },
        orange: {
          '300': '#F5A540',
          '600': '#68381C',
        },
        blue: {
          '300': '#67BDF1',
          '600': '#3364BE',
        },
        gray: {
          '100': '#EBD7C4',
          '200': '#69756C',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#333F3E',
          '800': '#172622',
          '900': '#212121'
        },
        brown: {
          '800': '#452917'
        }
      }
    },
    boxShadow: {
      'inner': 'inset 0 1px 3px 4px rgba(0,0,0,0.24)',
      'shadow': '0 4px 10px 1px rgba(0,0,0,0.50)',
      'bevel': 'inset 4px -4px 1px 3px #7E5A37, inset -4px 4px 0 3px rgba(54,26,21,0.86), inset 0 3px 8px 13px #E9D4C0, inset 0 0 47px 19px #A56D35',
      'green': 'inset 0 0 0 3px #356F2D, inset 0 1px 0 5px #62D466, inset 0 1px 0 6px #BBF45D',
      'orange': 'inset 0 0 0 3px #A05022, inset 0 1px 0 5px #E7793E, inset 0 1px 0 6px #F6B143',
      'blue': 'inset 0 0 0 3px #1F333A, inset 0 1px 0 5px #3362DA, inset 0 1px 0 6px #87C2F0',
    },
    fontFamily: {
      sans: ['Capriola', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
