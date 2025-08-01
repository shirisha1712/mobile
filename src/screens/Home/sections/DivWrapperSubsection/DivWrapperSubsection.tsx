import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[383px] mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
      {/* Restaurant Image Section */}
      <div className="relative w-full h-48 rounded-t-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Discount Badge */}
        <div className="flex w-[169px] items-start gap-[7.82px] absolute top-0 left-0">
          <div className="relative w-[168.9px] h-[40.44px]">
            <Badge className="relative w-[169px] h-10 bg-orange-500 rounded-lg p-0 shadow-md">
              <div className="w-10 h-10"></div>
              <div className="flex items-center h-[27px] ml-[19px]">
                <div className="font-normal text-white text-lg leading-tight whitespace-nowrap">
                  tag
                </div>
                <div className="ml-1 font-bold text-white text-xl leading-tight whitespace-nowrap">
                  20% off
                </div>
              </div>
            </Badge>
          </div>
        </div>

        {/* Vector Image */}
        <div className="absolute top-2 right-4 w-6 h-8 bg-white/20 rounded-full"></div>
      </div>

      <CardContent className="p-4">
        {/* Restaurant Info Section */}
        <div className="space-y-3">
          {/* Restaurant Name and Cuisine */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-2xl text-gray-800 leading-tight">
                Pasta Al Manal
              </h3>
              <p className="font-medium text-gray-500 text-sm mt-1">
                North Indian
              </p>
            </div>
            
            {/* Delivery Service Logos */}
            <div className="flex space-x-1">
              <div className="w-9 h-9 bg-orange-500 rounded-full"></div>
              <div className="w-9 h-9 bg-green-500 rounded-full"></div>
              <div className="w-9 h-9 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Delivery Fee */}
              <div className="flex items-center gap-1">
                <img
                  className="w-4 h-3"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span className="font-bold text-gray-800 text-xs">
                  7 AED
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <img
                  className="w-3 h-3"
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <span className="font-bold text-gray-800 text-xs">
                  4.8
                </span>
              </div>

              {/* Delivery Time */}
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="font-medium text-red-500 text-xs">
                  50 mins
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="font-bold text-gray-800 text-lg">
              70 AED
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
