"use client";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";

import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface SizesClientProps {
  data: SizeColumn[];
}

const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className="flex-col">
      <div className="flex justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button
          onClick={() => {
            router.push(`/${params.storeId}/sizes/new`);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <DataTable columns={columns} data={data} searchKey="name" />
      <div className="flex-col space-y-4">
        <Heading title="API" description="API calls for Sizes" />
        <Separator />
        <ApiList entityName="sizes" entityIdName="sizeId" />
      </div>
    </div>
  );
};

export default SizesClient;
