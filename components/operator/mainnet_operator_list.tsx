import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import OperatorCard from "./operator_card";
import { Operators, iOperators } from "@/types/types";

const MainnetOperatorList = ({ data }: iOperators) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.data.map((operator: any) => (
            <OperatorCard key={operator.address} data={operator} />
          ))
    }
    </div>
  );
};

export default MainnetOperatorList;
