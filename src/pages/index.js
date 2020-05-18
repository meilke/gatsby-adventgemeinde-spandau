import React, { useState, useEffect } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/Layout"
import MainCard from "../components/MainCard"
import Andacht from "../components/Andacht"
import Map from "../components/Map"

const useDataFetch = url => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const loadData = async url => {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    }
    loadData(url)
  }, [url])
  return data
}

const CONST = {
  calendar: {
    calendarId: "0b3qhbnd5mtjm6cddtb3fjm76k@group.calendar.google.com",
    key: process.env.GATSBY_GOOGLE_API_KEY,
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

const now = new Date().toISOString()

export default function Home() {
  const classes = useStyles()

  const data = useDataFetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CONST.calendar.calendarId}/events?key=${CONST.calendar.key}&orderBy=startTime&timeMin=${now}&maxResults=${CONST.calendar.maxResults}&singleEvents=true`
  )

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Demnächst...</Typography>
          </Grid>
          {renderEvents()}
          <Grid item xs={12}>
            <Andacht />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              So können Sie uns erreichen
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Map />
          </Grid>
          <Grid item xs={6}>
            Test
          </Grid>
        </Grid>
      </div>
    </Layout>
  )

  function renderEvents() {
    if (!data) {
      return null
    }

    return data.items.map(renderEvent)
  }

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
