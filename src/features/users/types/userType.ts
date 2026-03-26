export type DeviceType = "mobile" | "desktop" | "tablet";

export type FeatureType = "search" | "messages" | "profile" | "settings";

export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  device: DeviceType;
  signupDate: string;
  lastActive: string;
  featureUsed: FeatureType;
}
