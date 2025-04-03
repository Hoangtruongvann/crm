import { Customer, CustomerQueryParams } from "@/app/_interfaces";
import { da } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { number } from "zod";

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
    orderBy: {
      last_contacted: "desc",
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
  const { name, email, phone, address, status, last_contacted } = customer;
  const data = { name, email, phone, address, status, last_contacted };
  return await prisma.customer.create({
    data: data,
  });
};

const updateCustomer = async (id: number, customer: Customer) => {
  const { name, email, phone, address, status, last_contacted } = customer;
  const data = { name, email, phone, address, status, last_contacted };
  return await prisma.customer.update({
    where: {
      id,
    },
    data: data,
  });
};

const getCustomerByID = async (id: number) => {
  return await prisma.customer.findUnique({
    where: {
      id,
    },
  });
};

export {
  getAllCustomers,
  getCustomersByQuery,
  createCustomer,
  getCustomerByID,
  updateCustomer,
};
