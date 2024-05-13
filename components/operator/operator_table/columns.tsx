'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { statuses } from './data/data';
import { OperatorMetadata } from './data/schema';




const columns: ColumnDef<typeof OperatorMetadata>[] = [

  {
    accessorKey: 'address',
    header: 'Address',
  
  },
  {
    accessorKey: 'metadataName',
    header: 'Name',

   
  },
  {
    accessorKey: 'metadataDescription',
    header: "Description",
  },
  {
    accessorKey: 'metadataDiscord',
    header: "Discord",

  },

  {
    accessorKey: 'metadataTelegram',
    header: "Telegram",

    
  },

  {
    accessorKey: 'metadataWebsite',
    header: "Website",

    
  },
  {
    accessorKey: 'metadataX',
    header: "X",

    
  },
  {
    accessorKey: 'shares',
    header: "Shares",
  },
  {
    accessorKey: 'totalStakers',
    header: "Total Stakers",
  },
  {
    accessorKey: 'tvl',
    header: "TVL",
  },
  {
    accessorKey: 'tvlRestaking',
    header: "TVL Restaking",
  },
  {
    accessorKey: 'tvlWETH',
    header: "TVL WETH",
  },
  {
    accessorKey: 'tvlBeacon',
    header: "TVL Beacon",
  },
  
 
];

export default columns;