import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame4Subsection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[383px] rounded-[15px_15px_16.54px_16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="relative w-full h-[193px] rounded-[15px_15px_0px_0px] overflow-hidden [background:url(..//frame-45-5.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)]">
        <div className="flex w-[169px] items-start gap-[7.82px] absolute top-0 left-0">
          <div className="relative w-[168.9px] h-[40.44px]">
            <Badge className="relative w-[169px] h-10 bg-[#f17228] rounded-[7.82px] p-0">
              <img className="w-10 h-10" alt="Talabat logo" />
              <div className="flex items-center h-[27px] ml-[19px]">
                <div className="[font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-themewhite text-[17.6px] tracking-[0] leading-[21.1px] whitespace-nowrap">
                  tag
                </div>
                <div className="ml-1 [font-family:'Source_Sans_Pro',Helvetica] font-bold text-themewhite text-[21.5px] tracking-[0] leading-[25.8px] whitespace-nowrap">
                  20% off
                </div>
              </div>
            </Badge>
          </div>
        </div>

        <img
          className="absolute w-[25px] h-[33px] -top-px left-[180px]"
          alt="Vector"
          src="/vector-6.svg"
        />
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="[font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[28.5px] leading-[34.2px]">
                Pasta Al Manal
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-[#636363] text-[14.3px] leading-normal">
                North Indian
              </p>
            </div>
            <div className="flex space-x-1">
              <img className="w-9 h-9" alt="Talabat logo" />
              <img className="w-9 h-9 object-cover" alt="Careem logo" />
              <img className="w-9 h-9" alt="Noon logo" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[5.9px]">
              <div className="flex items-center gap-[2.95px]">
                <img
                  className="w-[18.56px] h-[12.95px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] leading-normal">
                  7 AED
                </span>
              </div>
              <div className="flex items-center gap-[3.81px]">
                <img
                  className="w-[12.39px] h-[11.83px]"
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] leading-normal whitespace-nowrap">
                  4.8
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative w-[17px] h-[17px]">
                <div className="relative w-[13px] h-[15px] top-px left-0.5 bg-[url(/vector-14.svg)] bg-[100%_100%]">
                  <img
                    className="top-[5px] left-0.5 absolute w-2 h-2"
                    alt="Element"
                    src="/50mins.svg"
                  />
                </div>
              </div>
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#e50300] text-[6.6px] leading-normal">
                50 mins
              </span>
            </div>

            <img className="w-px h-[13px]" alt="Line" src="/line-3.svg" />

            <span className="[font-family:'Nunito',Helvetica] font-bold text-[#000000] text-[15.3px] leading-[18.4px] whitespace-nowrap">
              70 AED
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
