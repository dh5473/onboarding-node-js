const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connectDB() {
    try {
        await prisma.$connect();
        console.log('데이터베이스에 연결되었습니다.');
    } catch (error) {
        console.error('데이터베이스 연결 중 오류가 발생했습니다.');
        process.exit(1);
    }
}

module.exports = { prisma, connectDB };