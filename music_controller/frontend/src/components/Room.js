import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomCode } = useParams();

  // Your state and other logic can be handled using the useState and useEffect hooks
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  function getRoomDetails() {
    fetch("/api/room/" + roomCode)
        .then((response) => response.json())
        .then((data) => {
          setVotesToSkip(data.votes_to_skip)
          setGuestCanPause(data.guest_can_pause)
          setIsHost(data.is_host)
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
