import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const data = [
    {
        title: "Take a quiz!",
        description: "Learn and earn $CKB",
        image: "https://t4.ftcdn.net/jpg/04/99/47/15/360_F_499471589_VmiG326taETG3vQ8Z41rtr0JlNt3E4jO.jpg",
    },
    {
        title: "Portfolio 🔥",
        description: "Track your trades in one place not all over the place",
        image: "https://www.patriotsoftware.com/wp-content/uploads/2022/01/what-is-blockchain-1.jpg",
    },
    {
        title: "Portfolio",
        description: "Track your trades in one place not all over the place",
        image: "https://hbr.org/resources/images/article_assets/2016/11/nov16-17-499178960.jpg",
    },
];

const CustomCard = ({ title, description, image }) => (
    <Card sx={{ minWidth: 350, maxHeight: 150, borderRadius: "13px" }} raised>
        <CardContent sx={{ display: "flex" }}>
            <CardMedia
                component="img"
                sx={{
                    width: 70,
                    height: 70,
                    marginRight: "1em",
                    borderRadius: "20px",
                }}
                // className={classes.media}
                image={image} // require image
                title="Contemplative Reptile"
                // style={styles.media} // specify styles
            />
            <div>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: {
                            lg: 14,
                            md: 11,
                            sm: 10,
                            xs: 10,
                        },
                        wordWrap: "break-word",
                        width: "13rem",
                        fontWeight: "bold",
                    }}
                >
                    {description}
                </Typography>
            </div>
        </CardContent>
    </Card>
);

const Cards = () => {
    // return a carousel of cards
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "2em",
            }}
            gap={3}
        >
            <ArrowCircleLeftIcon
                sx={{ fontSize: 25, color: "#808080", alignSelf: "center" }}
            />
            {data.map((item, key) => (
                <CustomCard {...item} key={key} />
            ))}
            <ArrowCircleRightIcon
                sx={{ fontSize: 25, color: "#808080", alignSelf: "center" }}
            />
        </Box>
    );
};

export default Cards;
