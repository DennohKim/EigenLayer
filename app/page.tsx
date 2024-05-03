


import Nav from "@/components/common/nav";
import DashboardView from "@/components/dashboard/dashboard_view";


async function getMetricsSummary() {
  const res = await fetch('https://api.eigenexplorer.com/metrics', { next: { revalidate: 3600 } })

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Dashboard() {

 
  const data = await getMetricsSummary();

  console.log("data", data)

  
  

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Nav />
      
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
       <DashboardView data={data}/>
      </main>
    </div>
  );
}
