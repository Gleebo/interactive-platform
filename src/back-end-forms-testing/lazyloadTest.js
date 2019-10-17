import React, { useState } from "react";
import { getSupportTickets } from "../firebase";

export default function LazyLoad() {
  const [requests, setRequests] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  let key = 0;
  const handleClick = async () => {
    let results = await getSupportTickets.next();
    console.log(results);
    if (results.length > 0) {
      setRequests([...requests, ...results]);
    } else {
      setIsDisabled(true);
    }
  };
  return (
    <div>
      <ul>
        {requests.map(req => (
          <li key={key++}>{JSON.stringify(req)}</li>
        ))}
      </ul>
      <button onClick={handleClick} disabled={isDisabled}>
        Click to load
      </button>
      <button
        onClick={() => {
          getSupportTickets.reset();
          setRequests([]);
          setIsDisabled(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}
