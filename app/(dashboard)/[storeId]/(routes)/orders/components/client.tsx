"use client";

import { Heading } from "@/components/ui/heading";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <div>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <DataTable columns={columns} data={data} searchKey="products" />
    </div>
  );
};

export default OrderClient;
