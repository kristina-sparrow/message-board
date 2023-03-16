import React from "react";
import Card from "./Card";
import MessageBoard from "./MessageBoard";

export default function Main() {
  return (
    <main className="main">
      <Card>
        <MessageBoard
          messages={messages}
          loadMoreRef={loadMoreRef}
          last={last}
        />
      </Card>
    </main>
  );
}
