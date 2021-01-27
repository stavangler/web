import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import * as Icon from 'react-feather'
import utils from '../common/utils'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            background: theme.palette.common.white,
            // maxWidth: 345,
        },
        // stdButton: { width: 40, height: 40 }, // todo: move to common styles
        // media: { height: 140 },
        // header: { margin: 16 },
        // content: { margin: 16, minHeight: 120 },
        // flexSplit: {
        //     display: 'flex',
        //     justifyContent: 'space-between'
        // },
        // hTitle: {
        //     color: theme.palette.background.default
        // },
        // hSubheader: {
        //     color: theme.palette.background.default
        // }
    }),
)

const TripEditItem = (props: any) => {
    const history = useHistory()
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Card className={classes.root}>
            {/* <CardActionArea onClick={() => history.push(`trip/${props.data.id}`)}>
                <CardMedia
                    className={classes.media}
                    image={props.data.imgUrl}
                    title="Contemplative Reptile"
                />
                <CardHeader
                    className={classes.header}
                    classes={{
                        title: classes.hTitle,
                        subheader: classes.hSubheader
                    }}
                    title={props.data.title}
                    subheader={utils.shortDate(props.data.date)}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {props.data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.flexSplit}>
                <IconButton title="Edit trip" className={classes.stdButton} onClick={() => {  }}>
                    <Icon.Edit2 color={theme.palette.common.black} size={16} />
                </IconButton>
            </CardActions> */}
        </Card>
    )
}
export default TripEditItem