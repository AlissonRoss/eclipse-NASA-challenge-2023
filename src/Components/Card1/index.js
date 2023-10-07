import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    return (
      <Card sx={{ width: "50%" }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            How do eclipses occur?
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2">
          Eclipses happen when the Sun, Moon, and Earth line up just right. The Moon and Earth are the stars of this cosmic show, and there are two main types: lunar and solar eclipses.
        Imagine a lunar eclipse like Earth giving the Moon a hug. It's when Earth gets in the way of sunlight reaching the Moon because it's positioned right between the Moon and the Sun.
        Now, picture a solar eclipse as the Moon giving the Earth a hug. This time, it's the Moon that stands between Earth and the Sun, blocking the sunlight from reaching us down here on Earth. These eclipse events are like nature's amazing light shows in the sky!
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
  }