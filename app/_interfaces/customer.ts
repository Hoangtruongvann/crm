import { Status } from "@prisma/client";

interface Customer {
  id?: string | number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: Status;
  last_contacted: string;
}

interface CustomerQueryParams {
  page: number;
  limit: number;
  search: string;
}

export type { Customer, CustomerQueryParams };
