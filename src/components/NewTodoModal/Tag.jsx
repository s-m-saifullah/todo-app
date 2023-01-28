import React, { useState } from "react";

const Tag = ({ tag }) => {
  const [tagSelected, setTagSelected] = useState(false);
  console.log(`${tag.id} ${tagSelected}`);
  return (
    <label
      key={tag.id}
      onClick={(e) => {
        e.preventDefault();
        setTagSelected(!tagSelected);
      }}
      htmlFor={tag.tagName}
      className={`mr-10 flex items-center cursor-pointer px-3 py-2 rounded-lg ${
        tagSelected && "bg-gray-300"
      }`}
    >
      <div
        className={`w-10 h-10 bg-[${tag.color}] rounded-full inline-block mr-2`}
      ></div>
      <input
        type="checkbox"
        name="tag"
        id={tag.tagName}
        value={tag.tagName}
        className=""
      />
      <span>{tag.tagName}</span>
    </label>
  );
};

export default Tag;
