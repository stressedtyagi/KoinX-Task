import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const columns = [
    "name",
    "price",
    "24H",
    "7D",
    "market cap",
    "volumne(24h)",
    "circulating supply",
];

let rows = [];

export default function DisplayTable() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d
        const getData = async () => {
            const URL =
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d";
            const { data: dataFetched } = await axios.get(URL);
            console.log(dataFetched);
            dataFetched.forEach((itm) => {
                rows.push({
                    name: itm["name"],
                    price: itm["current_price"],
                    h_24: itm["price_change_percentage_24h"],
                    d_7: itm["price_change_percentage_7d_in_currency"],
                    market_cap: itm["market_cap"],
                    volume: itm["total_volume"],
                    circulating_supply: itm["circulating_supply"],
                });
            });
            setData(rows);
        };
        getData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "table-cell",
                                    fontWeight: "bold",
                                },
                            }}
                            align="left"
                        >
                            #
                        </TableCell>
                        {columns.map((item, key) =>
                            key < 3 ? (
                                <TableCell
                                    sx={{
                                        align: {
                                            xs: "left",
                                            sm: "right",
                                            fontWeight: "bold",
                                        },
                                    }}
                                    key={key}
                                >
                                    {item
                                        .split(" ")
                                        .map(
                                            (item) =>
                                                item[0].toLocaleUpperCase() +
                                                item.substring(1, item.length)
                                        )
                                        .join(" ")}
                                </TableCell>
                            ) : (
                                <TableCell
                                    align="right"
                                    key={key}
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    {item
                                        .split(" ")
                                        .map(
                                            (item) =>
                                                item[0].toLocaleUpperCase() +
                                                item.substring(1, item.length)
                                        )
                                        .join(" ")}
                                </TableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                {!data ? (
                    "Loading"
                ) : (
                    <TableBody>
                        {data.map((row, key) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {" "}
                                <TableCell
                                    // component="th"
                                    // scope="row"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                        },
                                    }}
                                >
                                    {key + 1}
                                </TableCell>
                                <TableCell
                                    // component="th"
                                    // scope="row"
                                    align="left"
                                    sx={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        align: {
                                            xs: "left",
                                            sm: "right",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    $
                                    {row.price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        align: {
                                            xs: "left",
                                            sm: "right",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    {row.h_24.toPrecision(2)}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    {row.d_7.toPrecision(2)}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    $
                                    {row.volume
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    $
                                    {row.market_cap
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        display: {
                                            xs: "none",
                                            sm: "table-cell",
                                            fontWeight: "bold",
                                        },
                                    }}
                                >
                                    {row.circulating_supply
                                        .toString()
                                        .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                        )}{" "}
                                    BTC
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    );
}
