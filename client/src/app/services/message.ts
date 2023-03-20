export type MessageProps = {
  _id: string;
  username: string;
  text: string;
  added: string;
};

export const getMessages = async (since: number) => {
  const apiURL = "https://messageboard-ks.onrender.com/api";

  const res = await fetch(`${apiURL}${since ? `/?since=${since}` : ""}`);
  const data = await res.json();

  return [...data.allMessages.reverse()] as MessageProps[];
};

export const createNewMessage = async (
  data: Omit<MessageProps, "_id" | "added">
) => {
  try {
    const apiURL = "https://messageboard-ks.onrender.com/api";

    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();

    return json;
  } catch (error) {
    alert("server not");
  }
};
