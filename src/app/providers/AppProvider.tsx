import type { ReactNode } from "react";
import QueryProvider from "./QueryProvider";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return <QueryProvider>{children}</QueryProvider>;
}
