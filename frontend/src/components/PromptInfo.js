import React from "react";

function PromptInfo({ title, content, createdAt }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
      <p className="mt-4 text-sm text-gray-500">Created at: {new Date(createdAt).toLocaleString()}</p>
    </div>
  );
}

export default PromptInfo;
