import React, { useState, useEffect } from "react";

function Clock() {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date());
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
   }, []);

   return (
      <div>
         <h1>안녕, 리엑트</h1>
         <h2>현재 시간 : {time.toLocaleTimeString()} </h2>
      </div>
   );
}

export default Clock;
