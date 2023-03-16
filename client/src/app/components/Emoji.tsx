import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import useOnClickOutside from "../hooks/useOnClickOutside";

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
      <button type="button" onClick={() => handlePicker()}>
        <BsEmojiSmile />
      </button>
    </div>
  );
}
