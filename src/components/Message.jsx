function Message({ messages, currentMember }) {
  
  function renderMessage(message) {
    const { data, id, member, timestamp } = message;
    const className =
      member.clientData.name === currentMember.name
        ? "Messages-message currentMember"
        : "Messages-message";
    const messageTime = new Date(timestamp * 1000).toLocaleTimeString();
    const messageDate = new Date(timestamp * 1000).toDateString();
    console.log(timestamp);
  
    return (
      <li className={className} key={id}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.name}</div>
          <div className="date-content">{messageDate}</div>
          <div className="text">
            {data}
            <span className="time-content">{messageTime}</span>
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
