import React from "react";

export default function Open({ onToggle }: { onToggle?: () => void }) {
  return (
    <div className="bg-white text-black w-[383px] h-full shadow-xl flex items-center justify-center">
      <button
        onClick={onToggle}
        className="px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition"
      >
        Close
      </button>
    </div>
  );
}
