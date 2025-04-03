import { create, index } from "@/app/api/v1/_controllers/CustomerController";

export async function GET(req: Request) {
  return await index(req);
}

export async function POST(req: Request) {
  return await create(req);
}
