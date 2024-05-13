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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  formatNumber,
  formatWholeNumberWithCommas,
  firstTwoLower,
} from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

interface DashboardViewProps {
  data: {
    tvl: number;
  tvlRestaking: number;
  tvlStrategies: { [strategy: string]: number };
  tvlBeaconChain: number;
  totalAvs: number;
  totalOperators: number;
  totalStakers: number;
  }
}

const DashboardViewHolesky = ({ data }: DashboardViewProps) => {
  console.log("data", data);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">TVL</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${formatNumber(data?.tvl)}</div>
            {/* <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p> */}
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Restaking TVL</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${formatNumber(data?.tvlRestaking)}
            </div>
            {/* <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p> */}
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Beacon Chain TVL
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${formatNumber(data?.tvlBeaconChain)}
            </div>
            {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
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
            {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Operators
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatWholeNumberWithCommas(data?.totalOperators)}
            </div>
            {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
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
            {/* <p className="text-xs text-muted-foreground">+201 since last hour</p> */}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 pt-8">
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>TVL Strategies</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {Object.entries(data?.tvlStrategies).map(([strategy, value]) => (
              <div key={strategy} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>{firstTwoLower(strategy)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{strategy}</p>
                </div>
                <div className="ml-auto font-medium">
                  $ {formatNumber(value)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardViewHolesky;
