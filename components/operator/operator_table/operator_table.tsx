"use client";

import columns from './columns';
import { DataTable } from './data_table';


export default function OperatorTable({ data }: any) {
 

  return (
    <div className='container mx-auto py-6'>
      {
        <DataTable columns={columns} data={data} />
     }
    </div>
  );
}