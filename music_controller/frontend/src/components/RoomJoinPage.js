/* jshint esversion: 8 */
import React, {useState} from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";

function  RoomJoinPage(){
    "use strict";

    const [roomCode, setRoomCode] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function roomButtonPressed(){
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: roomCode
            })
        }

        fetch("/api/join_room", requestOptions).then((response) => {
            if (response.ok){
                navigate('/room/' + roomCode);
            }else{
                setError("Room not found");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    // function _handleTextFieldChange(e) {
    //     setRoomCode(e.target.value)
    // };

    return (
        <Grid container spacing={1}>

            <Grid item xs={12} align={"center"}>
                <Typography variant={"h4"} component={"h4"}>
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align={"center"}>
                <TextField
                    error={error.length > 0}
                    label={"Code"}
                    placeholder={"Enter a Room Code"}
                    value={roomCode}
                    helperText={error}
                    variant={"outlined"}
                    onChange={(e) => {setRoomCode(e.target.value)}}
                />
            </Grid>
            <Grid item xs={12} align={"center"}>
                <Button variant={"contained"} color={"primary"} onClick={roomButtonPressed}>
                    Enter Room
                </Button>
            </Grid>
            <Grid item xs={12} align={"center"}>
                <Button variant={"contained"} color={"secondary"} to={"/"} component={Link}>
                    Back
                </Button>
            </Grid>

        </Grid>
    )
}

export default RoomJoinPage;