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

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: knowitColors.sand,
            light: lighten(knowitColors.sand, 0.2),
            dark: darken(knowitColors.sand, 0.2),
        },
        secondary: {
            main: knowitColors.forest,
            light: lighten(knowitColors.forest, 0.1),
            dark: darken(knowitColors.forest, 0.2),
        },
        background: {
            default: knowitColors.forest,
        },
        common: {
            white: knowitColors.white,
            black: knowitColors.black,
        },
        action: {
            selected: knowitColors.clay,
            disabled: knowitColors.mint,
            focus: knowitColors.pear
        },
        text: {
            primary: darken(knowitColors.forest, 0.2),
            secondary: lighten(knowitColors.forest, 0.2),
        },
        info: {
            main: knowitColors.mint
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
        fontSize: 13,
        htmlFontSize: 16,
        // fontWeightLight: 600,
        fontWeightRegular: 500,
        // fontWeightMedium: 400,
        // fontWeightBold: 600,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*:focus': { outline: 'none !important' },
                // button: { borderRadius: '0 !important' },
                button: {
                    borderRadius: '0 !important',
                    fontFamily: 'Arial',
                    fontSize: '10px !important',
                    fontWeight: 600,
                },
                html: { WebkitFontSmoothing: 'auto' },
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: darken(knowitColors.white, 0)
            }
        },
    },
})
