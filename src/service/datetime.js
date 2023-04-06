import { useState, useEffect } from 'react';

function getDateTimeString() {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  return {time: timeString, date:dateString};
}

function DateTime() {
    const [datetime, setDateTime] = useState(getDateTimeString());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(getDateTimeString());
      }, 1000)
      return () => clearInterval(intervalId);
    }, []);

return (
  <div className="datetime">
    <span>{datetime.date}</span>
    <span>{datetime.time}</span>
  </div>
);
}

export default DateTime;
  