import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "@/app/_hooks";
import { CustomerQueryParams } from "@/app/_interfaces";

export default function useCustomers({
  page,
  limit,
  search,
}: CustomerQueryParams) {
  const fetchCustomers = async () => {
    const { data } = await axiosPrivate.get(
      `/customers?page=${page}&limit=${limit}&search=${search}`,
    );
    return data;
  };

  const {
    data: customersTableData,
    isLoading: isCustomersLoading,
    error: customersError,
  } = useQuery({
    queryKey: ["customers", page, limit, search],
    queryFn: fetchCustomers,
  });

  return {
    customersTableData,
    isCustomersLoading,
    customersError,
  };
}
