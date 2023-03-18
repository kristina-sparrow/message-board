import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { FaSmile } from "react-icons/fa";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Button from "./Button";

type EmojiProps = {
  setEmoji: React.Dispatch<React.SetStateAction<any>>;
};

export default function Emoji({ setEmoji }: EmojiProps) {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const handlePicker = () => setIsPickerVisible(!isPickerVisible);

  useOnClickOutside(emojiPickerRef, () => handlePicker());

  return (
    <div className="emoji-container">
      {isPickerVisible && (
        <div ref={emojiPickerRef} className="picker">
          <EmojiPicker
            onEmojiClick={(e) => {
              setEmoji(e.emoji);
              handlePicker();
            }}
          />
        </div>
      )}
      <Button type="button" onClick={() => handlePicker()}>
        <FaSmile />
      </Button>
    </div>
  );
}
