import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame2Subsection = (): JSX.Element => {
  // Data for delivery services
  const deliveryServices = [
    { name: "Talabat logo", imgSrc: "" },
    { name: "Careem logo", imgSrc: "", className: "object-cover" },
    { name: "Noon logo", imgSrc: "" },
  ];

  return (
    <Card className="relative w-full max-w-sm rounded-[15px_15px_16.55px_16.55px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="rounded-[15px_15px_0px_0px] [background:url(..//frame-45-3.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)] relative w-full h-48 overflow-hidden">
        <div className="flex items-start gap-[7.82px] absolute top-0 left-0">
          <div className="relative w-[168.99px] h-[40.46px]">
            <Badge className="relative w-[169px] h-10 bg-[#f17228] rounded-[7.82px] p-0">
              <img className="w-[41px] h-10" alt="Talabat logo" />
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
          className="absolute w-[25px] h-[46px] -top-1 left-[180px]"
          alt="Vector"
          src="/vector-6.svg"
        />
      </div>

      <CardContent className="p-0">
        <div className="relative w-full pt-0 pb-[26.58px]">
          <div className="absolute top-0 left-[13px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-[28.5px] tracking-[0] leading-[34.2px]">
              KFC
            </h3>
          </div>

          <div className="absolute top-[43px] left-3 [font-family:'Poppins',Helvetica] font-medium text-[#636363] text-[14.5px] tracking-[0] leading-[normal]">
            North Indian
          </div>

          <div className="absolute w-[215px] h-6 top-[71px] left-[13px]">
            <div className="flex justify-between w-[89px] items-center absolute top-1.5 left-0">
              <div className="flex items-center gap-[6.67px]">
                <img
                  className="w-[18.57px] h-[12.95px]"
                  alt="Subtract"
                  src="/subtract-1.svg"
                />
                <span className="relative w-[22.88px] h-[13.35px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] whitespace-nowrap tracking-[0] leading-[normal]">
                  Free
                </span>
              </div>

              <div className="flex items-center gap-[3.81px]">
                <img
                  className="w-[12.39px] h-[11.84px]"
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <span className="relative w-[17.16px] h-[13.35px] mt-[-0.95px] [font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                  4.8
                </span>
              </div>
            </div>

            <div className="absolute w-[17px] h-[17px] top-[5px] left-[100px]">
              <div className="relative w-[13px] h-[15px] top-px left-0.5 bg-[url(/vector-14.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-2 h-2 top-[5px] left-[3px]"
                  alt="Element"
                  src="/45mins.svg"
                />
              </div>
            </div>

            <img
              className="absolute w-px h-[13px] top-[7px] left-[95px]"
              alt="Line"
              src="/line-3-5.svg"
            />

            <div className="absolute top-2 left-[118px] [font-family:'Poppins',Helvetica] font-medium text-[#828282] text-[6.6px] tracking-[0] leading-[normal]">
              30-45 mins.
            </div>
          </div>

          <div className="absolute top-[57px] right-[13px] flex items-center gap-[2px]">
            {deliveryServices.map((service, index) => (
              <img
                key={`delivery-service-${index}`}
                className={`w-9 h-9 ${service.className || ""}`}
                alt={service.name}
                src={service.imgSrc}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
