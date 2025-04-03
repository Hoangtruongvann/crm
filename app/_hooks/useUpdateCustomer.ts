import { useMutation } from "@tanstack/react-query";
import { axiosPrivate } from "@/app/_hooks/useAxios";
import { Customer } from "@/app/_interfaces";

export default function useUpdateCustomer() {
  const updateCustomer = async ({
    id,
    customer,
  }: {
    customer: Customer;
    id: string;
  }) => {
    return await axiosPrivate.put(`/customers/${id}/`, customer);
  };

  const {
    data: customerDataUpdated,
    isSuccess: isCustomerUpdated,
    error: updateCustomerError,
    mutateAsync: handleUpdateCustomer,
  } = useMutation({
    mutationFn: updateCustomer,
    onError: (error: any) => {
      console.error(
        "Error creating customer:",
        error.response?.data || error.message,
      );
    },
  });

  return {
    customerDataUpdated,
    isCustomerUpdated,
    updateCustomerError,
    handleUpdateCustomer,
  };
}
