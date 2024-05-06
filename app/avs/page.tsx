import React from 'react';

async function getAVSMetrics() {
    const res = await fetch("https://api.eigenexplorer.com/avs", {
      next: { revalidate: 3600 },
    });
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

const AvsPage = async () => {

    const data = await getAVSMetrics();

    console.log(data);
    
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {/* <DashboardView data={data} /> */}
      AVS
    </main>
  )
}

export default AvsPage
