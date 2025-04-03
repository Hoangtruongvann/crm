import {
  createCustomer,
  getCustomersByQuery,
} from "@/app/api/v1/_services/CustomerServices";

const index = async (req: Request) => {
  // Destructure the necessary parameters
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const search = searchParams.get("search") || "";

  //   Validate the parameters (optional but recommended for better error handling)

  // Fetch customers using the service function
  const customers = await getCustomersByQuery({ page, limit, search });

  // Return the list of customers
  return new Response(JSON.stringify(customers), { status: 200 });
};

const create = async (req: Request) => {
  const body = await req.json();
  const customer = createCustomer(body);
  return new Response(JSON.stringify(customer), { status: 201 });
};
export { index, create };
