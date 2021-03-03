import React, { useEffect, useState, useRef } from "react";

import { Message } from "./components/Message";
import { steps, stepsOptions, messageType } from "./data";
import logo from "./images/logo.svg";
import "./App.scss";
import "./fonts.css";

function App() {
  const [step, setStep] = useState<stepsOptions>("greeting");
  const [messages, setMessages] = useState<messageType[]>([]);
  const scrollRef = useRef<HTMLLIElement | null>(null);
  const currentStep = steps[step];

  useEffect(() => {
    setMessages((prevMessages) => prevMessages.concat(currentStep.messages));
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView();
    }, 10);
  }, [messages]);

  return (
    <div className="app">
      <div className="chat">
        <div className="chat__head">
          <img src={logo} alt="" />
        </div>
        <div className="chat__body">
          <ul className="messages">
            {messages.map((message, id) => (
              <Message key={id} {...message} />
            ))}
            <li ref={scrollRef} />
          </ul>
        </div>
        <div className="chat__footer">
          {currentStep.options.map((option, id) => (
            <button
              key={id}
              className="full"
              onClick={() => {
                setMessages((prevMessages) =>
                  prevMessages.concat([
                    {
                      jsx: () => <span>{option.text}</span>,
                      me: true,
                    },
                  ])
                );
                setStep(option.next);
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
