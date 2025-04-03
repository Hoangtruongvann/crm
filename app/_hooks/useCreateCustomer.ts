import { useMutation } from "@tanstack/react-query";
import { axiosPrivate } from "@/app/_hooks/useAxios";
import { Customer } from "@/app/_interfaces";

export default function useCreateCustomer() {
  const createCustomer = (customer: Customer) => {
    return axiosPrivate.post("/customers", customer);
  };

  const {
    data: customerData,
    isSuccess: isCustomerCreated,
    error: createCustomerError,
    mutateAsync: handleCreateCustomer,
  } = useMutation({
    mutationFn: createCustomer,
    onError: (error: any) => {
      console.error(
        "Error creating customer:",
        error.response?.data || error.message,
      );
    },
  });

  return {
    customerData,
    isCustomerCreated,
    createCustomerError,
    handleCreateCustomer,
  };
}
