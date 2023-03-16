import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import MessageBoard from "./MessageBoard";
import SendMessage from "./SendMessage";
import { MessageProps, getAllMessages } from "../services/message";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function Main() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const { loadMoreRef, skip } = useInfiniteScroll();

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      if (!last) {
        getAllMessages(skip).then((data) => {
          setMessages((prev) => [...data.reverse(), ...prev]);
          if (data.length < 10 && data.length > 0) {
            setLast(true);
          }
        });
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [skip]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <main className="main">
      <Card>
        <MessageBoard
          messages={messages}
          loadMoreRef={loadMoreRef}
          last={last}
        />
        <SendMessage setMessages={setMessages} />
      </Card>
    </main>
  );
}
