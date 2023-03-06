function Message({ messages, currentMember }) {
  
  function renderMessage(message) {
    const { data, id, member } = message;
    const className =
      member.clientData.name === currentMember.name
        ? "Messages-message currentMember"
        : "Messages-message";
    const today = new Date();
    const todayDS = today.toDateString();
    
    const addZero = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };
    
    let h = addZero(today.getHours());
    let m = addZero(today.getMinutes());
    // let s = addZero(today.getSeconds());
  

    return (
      <li className={className} key={id}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.name}</div>
          <div className="date-content">{todayDS}</div>
          <div className="text">
            {data}
            <span className="time-content">
              {h}:{m}
            </span>
          </div>
        </div>
      </li>
    );
  }
  

  return (
    <div className="message-list-wrap">
      <ul className="Messages-list">
        {messages.map((message) => renderMessage(message))}
      </ul>
    </div>
      
  );
}

export default Message;
