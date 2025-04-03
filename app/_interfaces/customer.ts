interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  last_contacted: string;
}

interface CustomerQueryParams {
  page: number;
  limit: number;
  search: string;
}

export type { Customer, CustomerQueryParams };
