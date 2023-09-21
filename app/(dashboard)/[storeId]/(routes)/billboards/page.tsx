"use client";

import { Heading } from "@/components/ui/heading";
import BillboardClient from "./components/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";

const BillBoardPage = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Billboards (0)"
            description="Manage billboards for your store"
          />
          <Button
            onClick={() => {
              router.push(`/${params.storeId}/billboards/new`);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
          <BillboardClient />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default BillBoardPage;
