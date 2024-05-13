import AvsList from "@/components/avs/holesky_avs_list";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HoleskyAvsList from "@/components/avs/holesky_avs_list";
import MainnetAvsList from "@/components/avs/mainnet_avs_list";

async function getMainnetAVSMetrics() {
  const res = await fetch("https://api.eigenexplorer.com/avs", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHoleskyAVSMetrics() {
  const res = await fetch("https://api-holesky.eigenexplorer.com/avs", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const AvsPage = async () => {
  const mainnetAvsData = await getMainnetAVSMetrics();
  const holeskyAvsData = await getHoleskyAVSMetrics();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Tabs defaultValue="mainnet" className="">
        <TabsList>
          <TabsTrigger value="mainnet">Mainnet</TabsTrigger>
          <TabsTrigger value="holesky">Holesky</TabsTrigger>
        </TabsList>
        <TabsContent value="mainnet">
          <MainnetAvsList data={mainnetAvsData} />
        </TabsContent>
        <TabsContent value="holesky">
          <HoleskyAvsList data={holeskyAvsData} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AvsPage;
