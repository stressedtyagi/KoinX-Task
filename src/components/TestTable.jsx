import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
    { field: "id", headerName: "#", width: 5 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "h_24", headerName: "24H", width: 90 },
    {
        field: "d_7",
        headerName: "7D",
        width: 90,
    },
    {
        field: "market_cap",
        headerName: "Market Cap",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 180,
    },
    {
        field: "volume",
        headerName: "Volume",
        width: 180,
    },
    {
        field: "circulating_supply",
        headerName: "Circulating Supply",
        width: 180,
    },
];

const rows = [];

export default function DataTable() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d
        const getData = async () => {
            const URL =
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d";
            const { data: dataFetched } = await axios.get(URL);
            console.log(dataFetched);
            dataFetched.forEach((itm, index) => {
                rows.push({
                    id: index + 1,
                    name: itm["name"],
                    price: `$${itm["current_price"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                    h_24: `${itm["price_change_percentage_24h"].toPrecision(
                        2
                    )}%`,
                    d_7: `${itm[
                        "price_change_percentage_7d_in_currency"
                    ].toPrecision(2)}%`,
                    market_cap: `$${itm["market_cap"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                    volume: `$${itm["total_volume"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                    circulating_supply: `$${itm["circulating_supply"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
                });
            });
            setData(rows);
        };
        getData();
    }, []);

    return (
        <div style={{ height: 650, width: "100%" }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                sx={{ fontWeight: "bold" }}
            />
        </div>
    );
}
