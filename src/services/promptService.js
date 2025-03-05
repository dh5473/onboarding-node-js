const prisma = require('../loaders/prisma');

async function createPrompt({ data }) {
    const newPrompt = await prisma.prisma.prompt.create({ data });
    return newPrompt;
}

async function getPrompt({ id }) {
    const prompt = await prisma.prisma.prompt.findUnique({
        where: { id: parseInt(id) },
    });
    return prompt;
}

async function updatePrompt({ id, data }) {
    const updatedPrompt = await prisma.prisma.prompt.update({
        where: { id: parseInt(id) },
        data,
    });
    return updatedPrompt;
}

async function deletePrompt({ id }) {
    await prisma.prisma.prompt.delete({
        where: { id: parseInt(id) },
    });
}

module.exports = { createPrompt, getPrompt, updatePrompt, deletePrompt };