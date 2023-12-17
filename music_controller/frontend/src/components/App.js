import React, {Component} from "react";
import {render} from "react-dom";
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className={"center"}>

            <Router>

                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='/join' element={<RoomJoinPage/>}/>
                    <Route path='/create_room' element={<CreateRoomPage/>}/>
                    <Route path='/room/:roomCode' element={<Room/>}/>
                </Routes>

            </Router>

        </div>

    )
    }
}

const appDiv = document.getElementById("app")
const root = createRoot(appDiv)
root.render(<App />)