import API_BASE_URL from "./api";

const request = async (endpoint, method = "", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("API request error:", error);
    return null;
  }
};

export const getPrompt = (id) => request(`/prompts/${id}`, "GET");
export const getPrompts = () => request("/prompts", "GET");
export const addPrompt = (promptData) => request("/prompts", "POST", promptData);
export const updatePrompt = (id, promptData) => request(`/prompts/${id}`, "PUT", promptData);
export const deletePrompt = (id) => request(`/prompts/${id}`, "DELETE");
