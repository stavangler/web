import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@material-ui/core'
import { knowitColors, theme } from './common/theme'
import ProtectedRoute from './components/protected-route'
import DashboardPage from './pages/dashboard-page'
import TripPage from './pages/trip-page'
import * as Icon from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { userStore } from './stores/user-store'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        stdButton: { width: 40, height: 40 }, // todo: move to common styles
        title: { marginLeft: 8, flexGrow: 1 },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            background: theme.palette.common.white
        },
        testColor: {
            width: 6,
            height: 10,
            float: 'left'
        }
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
                            <Link to="/dashboard">
                                <IconButton edge="start" className={classes.stdButton} color="inherit" aria-label="menu">
                                    <Icon.Menu color={theme.palette.secondary.main} size={16} />
                                </IconButton>
                            </Link>
                            <Typography variant="h6" className={classes.title}>
                                Bratur
                            </Typography>
                            {
                                userStore?.isAuthenticated ?
                                    <>
                                        { /* theme color test  */}
                                        <Box>
                                            {
                                                Object.values(knowitColors).map((x) =>
                                                    <Box key={uuidv4()} m={.2} style={{ background: x }} className={classes.testColor}></Box>
                                                )
                                            }
                                        </Box>

                                        <IconButton title="New trip" className={classes.stdButton}>
                                            <Icon.PlusCircle color={theme.palette.common.black} size={16} />
                                        </IconButton>
                                        <IconButton title="User" className={classes.stdButton}>
                                            <Avatar className={classes.small} />
                                        </IconButton>
                                    </>
                                    :
                                    <IconButton title="Login" className={classes.stdButton}>
                                        <Icon.LogIn size={16} />
                                    </IconButton>
                            }
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        {/* <Route path='/login' component={LoginPage} /> */}
                        {/* <Route path='/about' component={AboutPage} /> */}
                        <Route exact path='/' component={DashboardPage} />
                        <Route path='/dashboard' component={DashboardPage} />
                        <Route path='/trip/:id/' component={TripPage} />
                        {/* <Route path='/trip/:id/:section?' component={TripPage} /> */}
                        {/* <ProtectedRoute path='/trip/:id/edit' component={TripPage} />
                        <Route path='/trip/:id/agenda' component={TripPage} /> */}
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}
export default App
