import { generateUsers, type User } from "./mockDataGenerator";

// simulates network latency

export async function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateUsers(10000));
    }, 800);
  });
}
