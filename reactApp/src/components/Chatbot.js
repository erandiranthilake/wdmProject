import React from "react";

import './Chatbot.css';

import robot from '../Images/bot.png';

const Chatbot = () => {
  return (
    <React.Fragment>
    <div id="container1" class="container1">
		<div id="chat" class="chat">
			<div id="messages" class="messages"></div>
			<input id="chatinput" type="text" placeholder="Say something..." autocomplete="off" autofocus="true" />
		</div>
		<img src={robot} alt="Robot cartoon" height="500vh"/>
	</div>
    </React.Fragment>
  );
}

export default Chatbot;
