import React, { useEffect, useRef } from "react";
import getRandomColor from "../utils/getRandomColor";
import Loading from "./Loading";
import { MessageProps } from "../services/message";

type MessageBoardProps = {
  messages: MessageProps[] | undefined;
  last: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement>;
};

export default function MessageBoard({
  messages,
  loadMoreRef,
  last,
}: MessageBoardProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  });

  const showMessages = messages?.map((message) => {
    let color = getRandomColor();
    return (
      <div key={message._id} ref={messagesEndRef} className="messages-animate">
        <div className="message-header">
          <h3>{message.username}</h3>
          <p>
            {new Date(message.added).toLocaleDateString("default", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <p
          className="message"
          style={{
            backgroundColor: color,
            borderColor: color,
          }}
        >
          {message.text}
        </p>
      </div>
    );
  });

  return (
    <div className="message-board">
      {!!messages && (
        <section className="messages-section">
          {!last && (
            <div
              className={`loader ${messages.length === 0 && "height"}`}
              ref={loadMoreRef}
            >
              <Loading />
            </div>
          )}
          {showMessages}
        </section>
      )}
    </div>
  );
}
