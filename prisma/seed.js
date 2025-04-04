import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Hash passwords
  const password1 = await bcrypt.hash("password123", 10);
  const password2 = await bcrypt.hash("securepass456", 10);

  // Create Users
  await prisma.user.createMany({
    data: [
      {
        fullname: "Admin User",
        email: "admin@example.com",
        password: password1,
      },
      {
        fullname: "Regular User",
        email: "user@example.com",
        password: password2,
      },
    ],
  });

  console.log("✅ Users seeded!");

  // Create 20 Customers with Random Names
  const customers = Array.from({ length: 100 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
  }));

  await prisma.customer.createMany({ data: customers });

  console.log("✅ 100 Customers seeded!");

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
