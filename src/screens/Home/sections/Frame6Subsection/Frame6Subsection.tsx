import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame6Subsection = (): JSX.Element => {
  // Delivery service logos data
  const deliveryServices = [
    { alt: "Talabat logo" },
    { alt: "Careem logo", className: "object-cover" },
    { alt: "Noon logo" },
  ];

  return (
    <Card className="relative w-full max-w-[383px] rounded-[15px_15px_16.54px_16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="rounded-[29.74px_29.74px_0px_0px] [background:url(..//frame-45-7.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)] relative w-full h-48 overflow-hidden">
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
        <div className="h-[92.36px] relative w-full">
          <div className="relative w-[353px] h-[92px] left-[18px]">
            <div className="absolute w-[353px] h-[89px] top-0 left-0">
              <div className="absolute w-[348px] h-[63px] top-0 left-0">
                <div className="flex w-[346px] items-center justify-center gap-[23.89px] left-0 h-[41px] absolute top-0">
                  <h3 className="relative flex-1 [font-family:'Nunito',Helvetica] font-medium text-[#000000] text-[28.5px] tracking-[0] leading-[34.2px]">
                    Mad Pizza
                  </h3>
                </div>

                <p className="top-[42px] left-px text-[14.3px] absolute [font-family:'Poppins',Helvetica] font-medium text-[#636363] tracking-[0] leading-[normal]">
                  North Indian
                </p>
              </div>

              <div className="top-[53px] left-[266px] absolute w-[87px] h-9">
                <div className="relative h-9">
                  {deliveryServices.map((service, index) => (
                    <img
                      key={`delivery-service-${index}`}
                      className={`absolute w-9 h-9 top-0 left-[${index * 26}px] ${service.className || ""}`}
                      alt={service.alt}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute w-[215px] h-6 top-[69px] left-0">
              <div className="justify-between flex w-[89px] items-center absolute top-1.5 left-0">
                <div className="gap-[6.67px] inline-flex items-center justify-center relative flex-[0_0_auto]">
                  <img
                    className="w-[18.56px] relative h-[12.95px]"
                    alt="Subtract"
                    src="/subtract.svg"
                  />

                  <div className="relative w-[22.87px] h-[13.34px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] whitespace-nowrap tracking-[0] leading-[normal]">
                    Free
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-[3.81px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[12.39px] h-[11.83px]"
                    alt="Vector"
                    src="/vector-9.svg"
                  />

                  <div className="relative w-[17.15px] h-[13.34px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                    4.8
                  </div>
                </div>
              </div>

              <div className="absolute top-2 left-[118px] [font-family:'Poppins',Helvetica] font-medium text-[#828282] text-[6.6px] tracking-[0] leading-[normal]">
                30-45 mins.
              </div>

              <img
                className="absolute w-[17px] h-[17px] top-[5px] left-[100px]"
                alt="Icons"
                src="/icons.svg"
              />

              <img
                className="absolute w-px h-[13px] top-[7px] left-[95px]"
                alt="Line"
                src="/line-3.svg"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
