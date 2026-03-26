import { getUsers } from "../../../services/api";

export async function fetchUsers() {
  return await getUsers();
}
