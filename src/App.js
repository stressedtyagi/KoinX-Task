import AppBar from "./components/AppBar";
import * as React from "react";
import DisplayTable from "./components/DisplayTable";
import { Grid } from "@mui/material";
import Cards from "./components/Cards";
import TestTable from "./components/TestTable";

let rows = [];

export default function App() {
    return (
        <Grid container direction="column">
            <AppBar />
            <Grid item>
                <Cards />
            </Grid>
            <Grid
                item
                textAlign="left"
                sx={{
                    padding: "0em 0em 1em 3.5em",
                    fontSize: "1.5em",
                    fontWeight: "bold",
                }}
            >
                {" "}
                Top 100 Cryptocurrencies by Market Cap
            </Grid>
            <Grid item sx={{ padding: "0em 5em 0em 5em" }}>
                <TestTable />
            </Grid>
        </Grid>
    );
}
