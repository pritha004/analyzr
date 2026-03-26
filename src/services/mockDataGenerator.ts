import { faker } from "@faker-js/faker";

export type User = {
  id: string;
  name: string;
  email: string;
  country: string;
  device: "mobile" | "desktop" | "tablet";
  signupDate: string;
  lastActive: string;
  featureUsed: "search" | "messages" | "profile" | "settings";
};

const devices = ["mobile", "desktop", "tablet"] as const;
const features = ["search", "messages", "profile", "settings"] as const;

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    country: faker.location.country(),
    device: devices[Math.floor(Math.random() * devices.length)],
    signupDate: faker.date.past({ years: 2 }).toISOString(),
    lastActive: faker.date.recent({ days: 30 }).toISOString(),
    featureUsed: features[Math.floor(Math.random() * features.length)],
  }));
}
