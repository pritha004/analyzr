import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../types/userType";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: (info) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: "device",
    header: "Device",
    cell: (info) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: (info) => info.getValue(),
    size: 300,
  },
];
