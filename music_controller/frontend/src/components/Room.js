/* jshint esversion: 6 */


import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

function Room() {
  "use strict";
  const { roomCode } = useParams();

  // Your state and other logic can be handled using the useState and useEffect hooks
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  function joinRoom(){
      const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: roomCode
            })
        };
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

  joinRoom()


  function getRoomDetails() {
    fetch("/api/room/" + roomCode)
        .then((response) => response.json())
        .then((data) => {
          setVotesToSkip(data.votes_to_skip);
          setGuestCanPause(data.guest_can_pause);
          setIsHost(data.is_host);
        });
  }
  getRoomDetails();

  return (
    <div>
        <h3>{roomCode}</h3>
        <p>VotesToSkip: {votesToSkip}</p>
        <p>GuestCanPause: {guestCanPause.toString()}</p>
        <p>IsHost: {isHost.toString()}</p>
    </div>
  );
}

export default Room;
