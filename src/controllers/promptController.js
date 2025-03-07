const prisma = require("../loaders/prisma");
const promptService = require("../services/promptService");

async function createPrompt(req, res) {
  const { promptTitle, promptContent } = req.body;
  try {
    const newPrompt = await promptService.createPrompt({
      data: {
        promptTitle,
        promptContent,
      },
    });
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(500).json({ error: "프롬프트 생성 중 오류가 발생했습니다." });
    console.log(error);
  }
}

async function getPrompt(req, res) {
  const { id } = req.params;
  try {
    const prompt = await promptService.getPrompt({ id });
    if (!prompt) {
      return res.status(404).json({ error: "프롬프트를 찾을 수 없습니다." });
    }
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ error: "프롬프트 조회 중 오류가 발생했습니다." });
  }
}

async function getPrompts(req, res) {
  try {
    const prompts = await promptService.getPrompts();
    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({ error: "프롬프트 조회 중 오류가 발생했습니다." });
  }
}

async function updatePrompt(req, res) {
  const { id } = req.params;
  const { promptTitle, promptContent } = req.body;
  try {
    const updatedPrompt = await promptService.updatePrompt({
      id,
      data: {
        promptTitle,
        promptContent,
      },
    });
    res.status(200).json(updatedPrompt);
  } catch (error) {
    res.status(500).json({ error: "프롬프트 수정 중 오류가 발생했습니다." });
  }
}

async function deletePrompt(req, res) {
  const { id } = req.params;
  try {
    const result = await promptService.deletePrompt({ id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "프롬프트 삭제 중 오류가 발생했습니다." });
  }
}

module.exports = {
  createPrompt,
  getPrompt,
  getPrompts,
  updatePrompt,
  deletePrompt,
};
