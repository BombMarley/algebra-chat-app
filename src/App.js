import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Input from "./components/Input";

function randomName() {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

const currentMember = {
  name: randomName().charAt(0).toUpperCase() + randomName().slice(1),
  color: randomColor(),
};
const drone = new window.Scaledrone("UAhDk7QK54dVYoVx", {
  data: {
    name: currentMember.name,
    color: currentMember.color,
  },
});
const room = drone.subscribe("observable-room");

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage(message) {
    drone.publish({
      room: "observable-room",
      message: message,
    });
  }

  useEffect(() => {
    room.on("message", (message) => {
      const messageList = messages;
      messageList.push(message);
      setMessages([...messageList]);
    });
  });

  return (
    <div className="App">
      <Header />
      <Message messages={messages} currentMember={currentMember} />
      <Input sendMessage={sendMessage} />
    </div>
  );
}

export default App;
