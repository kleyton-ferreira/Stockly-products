import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { productTableColumns } from "./table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany({});

  return (
    <div className="w-full p-6">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-semibold text-textColor-primary">
            Produtos
          </p>
          <h1 className="text-xl font-semibold">Gestão de produtos</h1>
        </div>
        <div className="[&_svg]:size-auto">
          <Button variant="destructive">
            <PlusIcon size={18} /> Criar Produto
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <DataTable
          columns={productTableColumns}
          data={JSON.parse(JSON.stringify(products))}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
