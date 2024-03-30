import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
import { ITimeLineData } from "../../interfaces/ITimeLineData";
import CardActions from "@mui/material/CardActions";
export default function EventCard({ data }: { data: ITimeLineData[] }) {
  const buildEventCard = (data: ITimeLineData[]) => {
    return data.map((element, index) => {
      return (
        <Card
          sx={{ maxWidth: 200, minHeight: 200, maxHeight: 500 }}
          key={element.name}
          id={`EventCard-${index}`}
        >
          <CardHeader title={element.year} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {element.name}
            </Typography>
            <Typography variant="body1">{element.desc}</Typography>
          </CardContent>
          <CardActions className="CardButtonHolder">
            <Button size="small">{"<-"}</Button>
            <Button size="small">{"->"}</Button>
          </CardActions>
        </Card>
      );
    });
  };

  return <div className="EventCardHolder">{buildEventCard(data)}</div>;
}
