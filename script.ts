import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

// ---------------TEST
// async function main() {
// write Prisma Client queries here
//   const user = await prisma.user.create({ data: { name: "Akela" } });
//   const users = await prisma.user.findMany();
//   console.log(users);
//   await prisma.user.deleteMany();
// }
// ----------------------

// async function main() {
//   await prisma.user.deleteMany();
//   const user = await prisma.user.create({
//     data: {
//       name: "Ronie",
//       email: "ronie@test.com",
//       age: 12,
//       userPreference: {
//         create: {
//           emailUpdates: true,
//         },
//       },
//     },
//     // can only do a include or select, not both
//     // include: {
//     //   userPreference: true,
//     // },
//     select: {
//       name: true,
//       userPreference: { select: { id: true } },
//     },
//   });
//   console.log(user);
// }

// -----------------------------------

// async function main() {
//   const users = await prisma.user.createMany({
//     data: [
//       {
//         name: "Ronie",
//         email: "ronie@test.com",
//         age: 12,
//       },
//       {
//         name: "Scooter",
//         email: "scoot@test.com",
//         age: 5,
//       },
//     ],
//   });
//   console.log(users);
// }

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 12,
        name: "Ronie",
      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
