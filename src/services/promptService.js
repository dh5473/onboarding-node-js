const { prisma } = require('../loaders/prisma');

async function createPrompt({ data }) {
    const newPrompt = await prisma.prompt.create({ data });
    return newPrompt;
}

async function getPrompt({ id }) {
    const prompt = await prisma.prompt.findUnique({
        where: { id: parseInt(id) },
    });
    return prompt;
}

async function getPrompts() {
    const prompts = await prisma.prompt.findMany();
    return prompts;
}

async function updatePrompt({ id, data }) {
    const updatedPrompt = await prisma.prompt.update({
        where: { id: parseInt(id) },
        data,
    });
    return updatedPrompt;
}

async function deletePrompt({ id }) {
    try {
        await prisma.prompt.delete({
            where: { id: parseInt(id) },
        });
        return true; }
    catch (error) {
        return false;
    }
}

module.exports = { createPrompt, getPrompt, getPrompts, updatePrompt, deletePrompt };