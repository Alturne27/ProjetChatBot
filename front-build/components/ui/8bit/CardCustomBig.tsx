"use client";
import React from "react";
import SpotlightCard from "../reactbits/Components/SpotlightCard/SpotlightCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

interface CardCustomBigProps extends React.PropsWithChildren {
  image?: string;
}

const CardCustomBig = React.forwardRef<HTMLDivElement, CardCustomBigProps>(
  ({ children, image = "" }, ref) => {
    return (
      <div
        ref={ref}
        className="row-span-2 col-span-1 h-full w-full max-h-[600px]"
      >
        <SpotlightCard
          spotlightColor="rgba(43, 76, 196, 0.5)"
          className="h-full w-full"
        >
          <Card className="h-full w-full py-0 ">
            <img className="h-[50%] w-full object-cover" src={image} alt="" />
            <div className="h-[50%] flex flex-col">
              <CardHeader>
                <CardTitle className="lg:text-2xl text-xl">
                  Concue par l'INSA pour L'INSA
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto">
                <p className="card-text pt-5">{children}</p>
              </CardContent>
            </div>
          </Card>
        </SpotlightCard>
      </div>
    );
  }
);

CardCustomBig.displayName = "CardCustomBig";

export default CardCustomBig;
