import { detail, update } from "@/app/api/v1/_controllers/CustomerController";

export async function GET(req: Request) {
  return await detail(req);
}

export async function PUT(req: Request) {
  return await update(req);
}
