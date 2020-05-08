import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image="/back.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Adventgemeinde Spandau
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sie interessieren sich für Glauben und Leben in der heutigen Zeit?
              Sie sehnen sich danach, Ihren Glauben Tag für Tag aktiv zu leben?
              Sie suchen Gleichgesinnter, mit denen Sie Erfahrungen und
              Erkenntnisse austauschen können? Dann hoffen wir, Ihnen mit diesen
              Seiten weiterhelfen zu können. Sie finden hier vielfältige
              Informationen und Anregungen, wie christliches Leven heute
              Wirklichkeit sein kann - eine Brücke ins Leben!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Layout>
  )
}
