import { Customer, CustomerQueryParams } from "@/app/_interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  return await prisma.customer.findMany();
};

const getCustomersByQuery = async (queryParams: CustomerQueryParams) => {
  const { page, limit, search } = queryParams;
  const customers = await prisma.customer.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      name: {
        contains: search,
      },
    },
  });

  const totalItems = await prisma.customer.count({
    where: {
      name: {
        contains: search,
      },
    },
  });

  const totalPages = Math.ceil(totalItems / limit);

  return {
    customers,
    totalItems,
    totalPages,
  };
};

const createCustomer = async (customer: Customer) => {
  return await prisma.customer.create({
    data: customer,
  });
};

export { getAllCustomers, getCustomersByQuery, createCustomer };
