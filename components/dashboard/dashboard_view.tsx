"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { formatNumber, formatWholeNumberWithCommas } from "@/lib/utils";

interface DashboardViewProps {
  tvl: number;
  tvlRestaking: number;
  tvlStrategies: { [strategy: string]: number };
  tvlBeaconChain: number;
  totalAvs: number;
  totalOperators: number;
  totalStakers: number;
}
const DashboardView = ({ data }: DashboardViewProps) => {
  console.log("data", data);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">TVL</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${formatNumber(data?.tvl)}</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Restaking TVL</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${formatNumber(data?.tvlRestaking)}
          </div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Beacon Chain TVL
          </CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${formatNumber(data?.tvlBeaconChain)}
          </div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total AVS</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatWholeNumberWithCommas(data?.totalAvs)}
          </div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Operators</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatWholeNumberWithCommas(data?.totalOperators)}
          </div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Stakers</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatWholeNumberWithCommas(data?.totalStakers)}
          </div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardView;
