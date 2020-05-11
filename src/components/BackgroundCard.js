import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import back from "./back.jpg"

export default function BackgroundCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="200" image={back} />
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
  )
}
