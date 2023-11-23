import React from "react";
import { useSelector } from "react-redux";
import Loader from "./loader";


const ChatOutput = () => {
	const { loading, messages } = useSelector((state) => state.messageStore);


	return (
		<div className="chat-output">
			{messages?.map((message) => (
				<div className={`message ${message.type}`}>
					<p>{message.message}</p>
					<i className={`far ${message.type === "send"? "fa-user" : "fa-robot"}`}></i>
				</div>
			))}

            {loading? <Loader/>: ""}
		</div>
	);
};

export default ChatOutput;
