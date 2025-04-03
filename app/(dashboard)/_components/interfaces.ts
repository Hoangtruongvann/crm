import { Customer } from "@/app/_interfaces";

interface CustomerRowProps {
  customer: Customer;
  index: number;
  onDelete: (index: number) => void;
}

interface CustomerFormProps {
  id?: string | null;
  customer?: Customer;
  handler: any;
}

export type { CustomerRowProps, CustomerFormProps };
