import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import logo from "./Images/AbstractComposition.png";
import "./App.css";

function App() {
  return (
    <Container className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="App-header"
      >
        <Grid item>
          <img src={logo} className="App-logo" alt="Abstract Composition" />
          <Typography variant="subtitle1" fontSize={10} sx={{ mt: 1, mb: 1 }}>
            Illustration by Icons 8 from Ouch!
          </Typography>
        </Grid>
        <Typography sx={{ mt: 3, mb: 3 }} variant="h5">
          Get your creative juices flowing
        </Typography>
      </Grid>
    </Container>
  );
}

export default App;
