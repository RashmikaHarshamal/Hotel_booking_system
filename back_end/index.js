import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const comments = await prisma.comment.findMany();
    console.log(comments);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 