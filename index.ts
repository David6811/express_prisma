import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const device = await prisma.device.create({
    data: {
      name: 'Alice',
      data: { key: 'value' } // Example JSON data
    },
  })
  console.log(device)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })