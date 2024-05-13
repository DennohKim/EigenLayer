"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { truncateAddr } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Globe, X } from "lucide-react";
import { TbBrandTelegram } from "react-icons/tb";
import { RiDiscordLine } from "react-icons/ri";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Avs } from "@/types/types";

const AvsCard = ( { data } : Avs) => {
  console.log(data);
  return (
    <div>
      <Card className="">
        <CardHeader>
          <div className="flex space-x-2 items-center ">
            <Avatar>
              <AvatarImage src={data?.metadataLogo} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>{truncateAddr(data?.metadataName)}</CardTitle>
          </div>

          <CardDescription className="text-black text-md">
            {truncateAddr(data?.address)}
          </CardDescription>

          <div>
            {data?.tags?.map((tag: any) => {
              return (
                <Badge key={tag} className="mr-2">
                  {tag}
                </Badge>
              )
            })}
          </div>

          <CardDescription>{data?.metadataDescription}</CardDescription>
          <div className="flex space-x-10 items-center py-4">
            <a href={data?.metadataWebsite} target="_blank" className="hover:text-gray-500">
              <Globe size={20} />
            </a>
            <a href={data?.metadataX} target="_blank" className="hover:text-gray-500">
              <X size={20} />
            </a>
            <a href={data?.metadataTelegram} target="_blank" className="hover:text-gray-500">
              <TbBrandTelegram size={20} />
            </a>
            <a href={data?.metadataDiscord} target="_blank" className="hover:text-gray-500">
              <RiDiscordLine size={20} />
            </a>
          </div>
        </CardHeader>

        {/* <Separator className="my-1" /> */}
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex flex-col ">
              <p className="text-sm">Total Stakers</p>

              <p className="font-semibold text-xl">{data?.totalStakers}</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-sm">Total Operators</p>

              <p className="font-semibold text-xl">{data?.totalOperators}</p>
            </div>
          </div>
          <Separator className="my-3" />
          <p className="text-md font-semibold">Shares</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Shares</TableHead>
                <TableHead>Strategy Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.shares?.map((share: any) => {
                return (
                  <TableRow key={share?.strategyAddress}>
                    {" "}
                    <TableCell>{truncateAddr(share?.shares)}</TableCell>
                    <TableCell>
                      {truncateAddr(share?.strategyAddress)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvsCard;
