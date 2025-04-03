import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "@/app/_hooks";

export default function useCustomerDetail(id: string) {
  const fetchCustomerByID = async () => {
    const { data } = await axiosPrivate.get(`/customers/${id}`);
    return data;
  };

  const {
    data: customerData,
    isLoading: isCustomerLoading,
    error: customerError,
  } = useQuery({
    queryKey: ["customers", id],
    queryFn: fetchCustomerByID,
  });

  return {
    customerData,
    isCustomerLoading,
    customerError,
  };
}
