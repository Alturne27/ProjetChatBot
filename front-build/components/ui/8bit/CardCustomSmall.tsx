import React from "react";
import SpotlightCard from "../reactbits/Components/SpotlightCard/SpotlightCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { VariantProps } from "class-variance-authority";

interface CardCustomSmallProps extends React.PropsWithChildren {
  image?: string;
  title: string;
}

const CardCustomSmall = React.forwardRef<HTMLDivElement, CardCustomSmallProps>(
  ({ children, image = "", title }, ref) => {
    return (
      <div className="h-full max-h-[280px]" ref={ref}>
        <SpotlightCard
          className="h-full"
          spotlightColor="rgba(43, 76, 196, 0.5)"
        >
          <Card className="w-full h-full py-0">
            <div className="flex flex-row h-full">
              <img
                className="w-[50%] h-full object-cover flex-shrink-0"
                src={image}
                alt=""
              />
              <div className="flex flex-col py-6 px-2 gap-5 flex-1 min-w-0">
                <CardHeader className="p-0">
                  <CardTitle className="lg:text-lg text-sm leading-relaxed">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-y-auto">
                  <p className="card-text text-sm">{children}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        </SpotlightCard>
      </div>
    );
  }
);

CardCustomSmall.displayName = "CardCustomSmall";

export default CardCustomSmall;
