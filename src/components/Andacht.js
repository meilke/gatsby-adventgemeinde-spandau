import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
      display: "block",
    },
    iframe: {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      width: 200,
      height: 200,
      border: "none",
    },
    grid: {
      height: 220,
    },
    cardRoot: {
      height: 200,
    },
  })
)

export default function Andacht() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={2} className={classes.grid}>
        <div className={classes.root}>
          <div>
            <iframe
              title="andacht"
              src="https://www.stimme-der-hoffnung.de/podcast/iframe/pc///aHR0cDovL2xvY2FsaG9zdDo4MDAw/"
              className={classes.iframe}
            ></iframe>
          </div>
        </div>
      </Grid>
      <Grid item xs={10}>
        <Card className={classes.cardRoot}>
          <CardHeader title="Angedacht | STIMME DER HOFFNUNG - Tägliche Andacht"></CardHeader>
          <CardContent>
            Die tägliche Andacht aus dem Andachtsbuch des Advent-Verlags
            Lüneburg, einer Einrichtung der Freikirche der
            Siebenten-Tags-Adventisten.
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href="https://www.stimme-der-hoffnung.de/taegliche-andacht/"
              target="_blank"
            >
              Abonnieren
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
