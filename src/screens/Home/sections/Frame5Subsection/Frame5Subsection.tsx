import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame5Subsection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[383px] rounded-[15px_15px_16.54px_16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="relative h-48 rounded-t-[29.74px] [background:url(..//frame-45-7.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)] overflow-hidden">
        <img
          className="absolute w-[21px] h-[39px] top-7 left-[179px]"
          alt="Vector"
          src="/vector-6.svg"
        />

        <div className="absolute w-[142px] h-[34px] top-0.5 left-[13px]">
          <div className="relative h-[34px] bg-[#ffcc17] rounded-[6.57px]">
            <img
              className="w-[34px] h-[34px] left-0 absolute top-0"
              alt="Noon logo"
            />

            <div className="absolute w-[85px] h-[22px] top-1.5 left-[50px]">
              <div className="absolute w-4 h-[19px] top-[3px] left-0 [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-themewhite text-[14.8px] tracking-[0] leading-[17.7px] whitespace-nowrap">
                tag
              </div>

              <Badge className="absolute top-0 left-5 bg-transparent p-0 [font-family:'Source_Sans_Pro',Helvetica] font-bold text-themewhite text-[18.1px] tracking-[0] leading-[21.7px] whitespace-nowrap">
                20% off
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="px-[18px] pb-[17.46px] pt-[15px]">
          <div className="mb-[11px]">
            <div className="flex items-center justify-between">
              <h3 className="[font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[28.5px] leading-[34.2px]">
                Mad Pizza
              </h3>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#636363] text-[14.3px] leading-normal">
              North Indian
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-[6.67px]">
                <img
                  className="w-[18.56px] h-[12.95px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] whitespace-nowrap">
                  Free
                </span>
              </div>

              <img className="w-px h-[13px]" alt="Line" src="/line-3.svg" />

              <div className="flex items-center gap-[3.81px]">
                <img
                  className="w-[12.39px] h-[11.83px]"
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] whitespace-nowrap">
                  4.8
                </span>
              </div>

              <img className="w-[17px] h-[17px]" alt="Icons" src="/icons.svg" />

              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#828282] text-[6.6px] leading-normal">
                30-45 mins.
              </span>
            </div>

            <div className="flex">
              <img className="w-9 h-9" alt="Talabat logo" />
              <img
                className="w-9 h-9 -ml-[10px]"
                alt="Careem logo"
                className="object-cover"
              />
              <img className="w-9 h-9 -ml-[10px]" alt="Noon logo" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
