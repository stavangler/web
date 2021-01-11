import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { theme } from "./common/theme"
import ProtectedRoute from './components/protected-route'
import DashboardPage from './pages/dashboard-page'
import TripPage from './pages/trip-page'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: { flexGrow: 1 },
        menuButton: { marginRight: theme.spacing(2) },
        title: { flexGrow: 1 },
    }),
)

const App = () => {
    const classes = useStyles()
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppBar position="static" elevation={0}>
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        {/* <Route path='/login' component={LoginPage} /> */}
                        {/* <Route path='/about' component={AboutPage} /> */}
                        <Route exact path='/' component={DashboardPage} />
                        <Route path='/dashboard' component={DashboardPage} />
                        <ProtectedRoute path='/trip/:id' component={TripPage} />
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}
export default App
