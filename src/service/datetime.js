function DateTime() {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
  
    return (
      <div className="datetime">
        <span>{currentDate}</span>
        <span>{currentTime}</span>
      </div>
    );
  }

export default DateTime;
  