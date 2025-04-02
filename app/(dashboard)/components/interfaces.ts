import { Customer } from "@/app/_interfaces";

interface CustomerRowProps {
  customer: Customer;
  index: number;
  onDelete: (index: number) => void;
}

export type { CustomerRowProps };
