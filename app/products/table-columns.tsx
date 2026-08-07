"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../_components/ui/badge";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (product: Product) => {
  if (product.stock === 0) {
    return "Fora de estoque";
  }
  if (product.status === "IN_STOCK") {
    return "Em estoque";
  }
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const products = row.row.original;
      const label = getStatusLabel(products);
      return (
        <Badge variant={label === "Em estoque" ? "destructive" : "outline"}>
          <div className="flex items-center gap-1">
            <CircleIcon
              size={10}
              className={`${label === "Em estoque" ? "fill-primary-foreground" : "fill-foreground"}`}
            />
            {label}
          </div>
        </Badge>
      );
    },
  },
];
