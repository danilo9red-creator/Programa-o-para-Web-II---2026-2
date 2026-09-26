import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Fiódor Dostoiévski',
      books: {
        create: [
          {
            name: 'Crime e Castigo'
          },
          {
            name: 'Noites Brancas'
          }
        ]
      }
    },
    include: {
      books: true
    }
  });

  console.log(result);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });