import Nav from "@/components/common/nav";
import DashboardViewHolesky from "@/components/dashboard/dashboard_view_holesky";
import DashboardViewMainnet from "@/components/dashboard/dashboard_view_mainnet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getMainnetMetricsSummary() {
  const res = await fetch("https://api.eigenexplorer.com/metrics", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHoleskyMetricsSummary() {
  const res = await fetch("https://api-holesky.eigenexplorer.com/metrics", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const mainnetData = await getMainnetMetricsSummary();
  const holeskyData = await getHoleskyMetricsSummary();


  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Tabs defaultValue="mainnet" className="">
        <TabsList>
          <TabsTrigger value="mainnet">Mainnet</TabsTrigger>
          <TabsTrigger value="holesky">Holesky</TabsTrigger>
        </TabsList>
        <TabsContent value="mainnet">
          <DashboardViewMainnet data={mainnetData} />
        </TabsContent>
        <TabsContent value="holesky">
          <DashboardViewHolesky data={holeskyData} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
