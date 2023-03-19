import React, { useCallback, useEffect, useState } from "react";
import Card from "./components/Card";
import MessageBoard from "./components/MessageBoard";
import SendMessage from "./components/SendMessage";
import { MessageProps, getMessages } from "./services/message";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [last, setLast] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { loadMoreRef, skip } = useInfiniteScroll();

  const fetchMessages = useCallback(async () => {
    try {
      if (!last) {
        getMessages(skip).then((data) => {
          setMessages((prev) => [...data, ...prev]);
          if (data.length < 10 && data.length > 0) {
            setLast(true);
          }
        });
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [skip, last]);

  useEffect(() => {
    if (hasMounted) {
      fetchMessages();
    } else {
      setHasMounted(true);
    }
  }, [fetchMessages, hasMounted]);

  return (
    <>
      <Header />
      <main className="main">
        <Card>
          <section className="main-content">
            <MessageBoard
              messages={messages}
              loadMoreRef={loadMoreRef}
              last={last}
            />
          </section>
          <SendMessage setMessages={setMessages} />
        </Card>
      </main>
      <Footer />
    </>
  );
}
