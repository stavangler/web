import { createMuiTheme } from '@material-ui/core'
import { darken, lighten } from '@material-ui/core/styles'

export const knowitColors = {
    black: '#333333',
    white: '#F1F0ED',
    forest: '#4B6455',
    pear: '#B7DEBD',
    flamingo: '#FAC0B1',
    mint: '#DBEEDE',
    lollipop: '#FF00FF',
    sand: '#E4E1DB',
    clay: '#A5B1AA',
}

// const theme = createMuiTheme({
//     overrides: {
//         MuiAppBar: {
//             colorPrimary: {
//                 backgroundColor: "#FFC0CB" 
//             }
//         }
//     }, 
//     palette: { type: "dark" }
// });

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: knowitColors.mint,
            light: lighten(knowitColors.mint, 0.1),
            dark: darken(knowitColors.mint, 0.1),
        },
        secondary: {
            main: knowitColors.forest,
            light: lighten(knowitColors.forest, 0.1),
            dark: darken(knowitColors.forest, 0.1),
        },
        background: {
            default: knowitColors.forest,
        },
        common: {
            white: knowitColors.white,
            black: knowitColors.black,
        },
        action: {
            selected: knowitColors.sand,
            disabled: knowitColors.clay,
        },
        text: {
            primary: knowitColors.black,
        },
        type: 'dark',
    },
    typography: {
        fontFamily: [
            'Arial',
            'Liberation Sans',
            'Frutiger',
            'Frutiger Linotype',
            'Univers',
            'Calibri',
            'Gill Sans',
            'Gill Sans MT',
            'Myriad Pro',
            'Myriad',
            'DejaVu Sans Condensed',
            'Nimbus Sans L',
            'Tahoma',
            'Geneva',
            'Helvetica Neue',
            'Helvetica',
            'sans-serif',
        ].join(","),
        fontSize: 14,

        htmlFontSize: 16,
        button: {
            fontWeight: 'bold',
            fontFamily: 'Roboto',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*:focus': { outline: 'none !important' },
                button: { borderRadius: '0 !important' },
                html: { WebkitFontSmoothing: 'auto' },
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: darken(knowitColors.white, 0)
            }
        }
    },
})
