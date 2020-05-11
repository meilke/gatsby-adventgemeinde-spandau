import React, { useState, useEffect } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import axios from "axios"

import Layout from "../components/Layout"
import BackgroundCard from "../components/BackgroundCard"

const CONST = {
  calendar: {
    calendarId: "0b3qhbnd5mtjm6cddtb3fjm76k@group.calendar.google.com",
    key: "AIzaSyCauTfwFZE3qJVTLjm0u6PTot1aT_mhV3s",
    maxResults: 3,
  },
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cardRoot: {
      height: "100%",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
)

export default function Home() {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const now = new Date().toISOString()
      const result = await axios(
        `https://www.googleapis.com/calendar/v3/calendars/${CONST.calendar.calendarId}/events?key=${CONST.calendar.key}&orderBy=startTime&timeMin=${now}&maxResults=${CONST.calendar.maxResults}&singleEvents=true`
      )

      setData(result.data.items)
    }
    fetchData()
  })

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BackgroundCard />
          </Grid>
          {data.map(renderEvent)}
        </Grid>
      </div>
    </Layout>
  )

  function renderEvent(e) {
    return (
      <Grid item xs={4} key={e.id}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {e.start.dateTime}
            </Typography>
            <Typography variant="h5" component="h2">
              {e.summary}
            </Typography>
            <Typography variant="body2" component="p">
              {e.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
