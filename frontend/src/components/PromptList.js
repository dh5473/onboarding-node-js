import React, { useState } from "react";

function PromptList() {
  const [prompts, setPrompts] = useState([
    { id: 1, title: "Example Prompt 1", content: "This is an example content.", createdAt: new Date().toISOString() },
  ]);

  const [form, setForm] = useState({ id: null, title: "", content: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.title || !form.content) return;
    setPrompts([...prompts, { ...form, id: Date.now(), createdAt: new Date().toISOString() }]);
    setForm({ id: null, title: "", content: "" });
  };

  const handleEdit = (prompt) => {
    setForm(prompt);
  };

  const handleUpdate = () => {
    setPrompts(prompts.map((p) => (p.id === form.id ? { ...form, updatedAt: new Date().toISOString() } : p)));
    setForm({ id: null, title: "", content: "" });
  };

  const handleDelete = (id) => {
    setPrompts(prompts.filter((p) => p.id !== id));
  };

  return (
    <div className="my-6 p-6 max-w-lg mx-auto space-y-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800">Prompt Manager</h1>

      {/* 입력 폼 */}
      <div className="border p-4 rounded-lg shadow-md space-y-2 bg-gray-100 sticky top-0 z-10">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Prompt Title"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Prompt Content"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={form.id ? handleUpdate : handleAdd}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {form.id ? "Update Prompt" : "Add Prompt"}
        </button>
      </div>

      {/* 프롬프트 리스트 */}
      <ul className="space-y-4 max-h-[400px] overflow-y-auto">
        {prompts.map((prompt) => (
          <li key={prompt.id} className="border p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800">{prompt.title}</h2>
            <p className="text-gray-700">{prompt.content}</p>
            <p className="text-sm text-gray-500">Created at: {new Date(prompt.createdAt).toLocaleString()}</p>

            <div className="mt-2 flex space-x-2 justify-end">
              <button onClick={() => handleEdit(prompt)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Edit
              </button>
              <button onClick={() => handleDelete(prompt.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromptList;
