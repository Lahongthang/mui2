import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <Grid container>
      <NavBar/>
      <Outlet/>
    </Grid>
  );
}

export default App;
