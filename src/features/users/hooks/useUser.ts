import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/userApi";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
