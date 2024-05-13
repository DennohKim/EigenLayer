import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AvsCard from "./avs_card";
import { Avs, iAvs } from "@/types/types";

const HoleskyAvsList = ({ data }: iAvs) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.data.map((operator: any) => (
            <AvsCard key={operator.address} data={operator} />
          ))
    }
    </div>
  );
};

export default HoleskyAvsList;
