import React from "react";
import OperatorList from "@/components/operator/mainnet_operator_list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainnetOperatorList from "@/components/operator/mainnet_operator_list";
import HoleskyOperatorList from "@/components/operator/holesky_operator_list";


async function getMainnetOperatorMetrics() {
  const res = await fetch("https://api.eigenexplorer.com/operators", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHoleskyOperatorMetrics() {
  const res = await fetch("https://api-holesky.eigenexplorer.com/operators", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const OperatorsPage = async () => {
  const mainnetOperatorData = await getMainnetOperatorMetrics();
  const holeskyOperatorData = await getHoleskyOperatorMetrics();


  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Tabs defaultValue="mainnet" className="">
        <TabsList>
          <TabsTrigger value="mainnet">Mainnet</TabsTrigger>
          <TabsTrigger value="holesky">Holesky</TabsTrigger>
        </TabsList>
        <TabsContent value="mainnet">
        <MainnetOperatorList data={mainnetOperatorData} />
        </TabsContent>
        <TabsContent value="holesky">
          <HoleskyOperatorList data={holeskyOperatorData} />
        </TabsContent>
      </Tabs>
     
    </main>
  );
};

export default OperatorsPage;
