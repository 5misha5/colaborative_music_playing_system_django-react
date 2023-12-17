/* jshint esversion: 8 */
import React, {Component, useState, useEffect} from "react";
import {Grid, Button, ButtonGroup, Typography} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";


function HomePage() {
    "use strict";

    const [roomCode, setRoomCode] = useState(null);
    const navigate = useNavigate();

    async function componentDidMount(){
        fetch("/api/user_in_room")
            .then((response) => response.json())
            .then((data) => {
                setRoomCode(data.code);
            });
    }
    componentDidMount();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align={"center"}>
                <Typography variant={"h3"} component={"h3"}>
                    House Party
                </Typography>
            </Grid>
            <Grid item xs={12} align={"center"}>
                <ButtonGroup disableElevation variant={"contained"} color={"primary"}>
                    <Button color={"primary"} to={"/join"} component={ Link }>
                        Join a Room
                    </Button>
                    <Button color={"secondary"} to={"/create_room"} component={ Link }>
                        Create a Room
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} align={"center"}>
                <Button variant="contained" color={"info"} to={`/room/${roomCode}`} component={ Link }>
                    Join Last Room
                </Button>
            </Grid>
        </Grid>
    );
}

export default HomePage;