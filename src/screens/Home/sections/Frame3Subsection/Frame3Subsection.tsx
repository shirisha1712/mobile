import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame3Subsection = (): JSX.Element => {
  const deliveryServices = [
    { alt: "Talabat logo" },
    { alt: "Careem logo", className: "object-cover" },
    { alt: "Noon logo" },
  ];

  return (
    <Card className="flex flex-col w-full max-w-[383px] rounded-[16.54px] shadow-[0px_4.76px_4.76px_#0000004c] overflow-hidden">
      <div className="relative w-full h-48 rounded-t-[15px] [background:url(..//frame-45-4.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,245,245,1)_0%,rgba(245,245,245,1)_100%)] overflow-hidden">
        <div className="absolute w-[169px] h-10 top-0 left-0">
          <div className="relative h-10 bg-[#3bb77e] rounded-[7.82px]">
            <img
              className="w-10 h-10 absolute top-0 left-0 object-cover"
              alt="Careem logo"
            />
            <div className="absolute w-[99px] h-[27px] top-[7px] left-[59px]">
              <div className="absolute w-[19px] h-[23px] top-1 left-0 [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-themewhite text-[17.6px] tracking-[0] leading-[21.1px] whitespace-nowrap">
                tag
              </div>
              <div className="absolute top-0 left-[23px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-themewhite text-[21.5px] tracking-[0] leading-[25.8px] whitespace-nowrap">
                20% off
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[25px] h-[33px] -top-0.5 left-44"
          alt="Vector"
          src="/vector-6.svg"
        />
      </div>

      <CardContent className="p-0">
        <div className="p-[18px] space-y-3">
          <div>
            <h3 className="text-[28.5px] [font-family:'Poppins',Helvetica] font-medium text-[#000000] leading-[34.2px]">
              Ghani Tikka
            </h3>
            <p className="text-[14.3px] [font-family:'Poppins',Helvetica] font-medium text-[#636363]">
              North Indian
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-[2.95px]">
                <img
                  className="w-[18.56px] h-[12.95px]"
                  alt="Subtract"
                  src="/subtract-2.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px]">
                  7 AED
                </span>
              </div>

              <div className="flex items-center gap-[3.81px]">
                <img
                  className="w-[12.39px] h-[11.83px]"
                  alt="Vector"
                  src="/vector-9.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] font-bold text-black text-[11.4px]">
                  4.8
                </span>
              </div>

              <img className="w-px h-[13px]" alt="Line" src="/line-3-12.svg" />

              <div className="flex items-center">
                <div className="relative w-[13px] h-[15px] bg-[url(/vector-14.svg)] bg-[100%_100%]">
                  <img
                    className="absolute top-[5px] left-0.5 w-2 h-2"
                    alt="Element"
                    src="/50mins.svg"
                  />
                </div>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#e50300] text-[6.6px]">
                  50 mins
                </span>
              </div>
            </div>

            <div className="flex">
              {deliveryServices.map((service, index) => (
                <img
                  key={index}
                  className={`w-9 h-9 ${index > 0 ? "-ml-[10px]" : ""} ${service.className || ""}`}
                  alt={service.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
