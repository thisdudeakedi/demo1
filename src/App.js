import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { Card } from "@mui/material";

function App() {
  const [email, setEmail] = React.useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <br />
        <Card sx={{ m: 1, p: 1 }}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={() => alert(email)}>
            Show email
          </Button>
        </Card>
      </header>
    </div>
  );
}

export default App;
