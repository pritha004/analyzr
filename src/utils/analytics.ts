import type { User } from "../features/users/types/userType";

// users active in the last 24 hours
export function getActiveUsers(users: User[]) {
  const now = new Date().getTime();

  return users.filter((user) => {
    const lastActive = new Date(user.lastActive).getTime();
    return now - lastActive < 1000 * 60 * 60 * 24;
  }).length;
}

// users grouped by signup month for growth chart
export function getUserGrowth(users: User[]) {
  const growthMap: Record<string, number> = {};

  users.forEach((user) => {
    const date = new Date(user.signupDate);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;

    growthMap[key] = (growthMap[key] || 0) + 1;
  });

  return Object.entries(growthMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, count]) => ({
      month,
      users: count,
    }));
}

// counts users by device type for device pie chart
export function getDeviceDistribution(users: User[]) {
  const result: Record<string, number> = {};

  users.forEach((user) => {
    result[user.device] = (result[user.device] || 0) + 1;
  });

  return Object.entries(result).map(([device, count]) => ({
    device,
    count,
  }));
}

// finds the top topCount countries for country bar chart
export function getTopCountries(users: User[], topCount: number) {
  const countryMap: Record<string, number> = {};

  users.forEach((user) => {
    countryMap[user.country] = (countryMap[user.country] || 0) + 1;
  });

  return Object.entries(countryMap)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topCount);
}

// tracks feature engagement for product analytics chart
export function getFeatureUsage(users: User[]) {
  const usageMap: Record<string, number> = {};

  users.forEach((user) => {
    usageMap[user.featureUsed] = (usageMap[user.featureUsed] || 0) + 1;
  });

  return Object.entries(usageMap).map(([feature, count]) => ({
    feature,
    count,
  }));
}

// for aggregate dashboard metrics for metric card
export function getDashboardMetrics(users: User[]) {
  return {
    totalUsers: users.length,
    activeUsers: getActiveUsers(users),
    deviceDistribution: getDeviceDistribution(users),
  };
}
