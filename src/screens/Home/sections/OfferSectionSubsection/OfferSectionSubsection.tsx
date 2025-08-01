import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const OfferSectionSubsection = (): JSX.Element => {
  // Data for offer cards to enable mapping
  const offerCards = [
    {
      id: 1,
      position: { left: "left-3" },
      cardPosition: { left: "left-2.5" },
      heartPosition: { top: "top-[7px]", left: "left-[103px]" },
      badgePosition: { top: "top-0", left: "left-0" },
      badgeWidth: "w-24",
      badgeTextPosition: "left-[35px]",
      badgeTextSize: "text-[7.7px]",
      dealPosition: { top: "top-[108px]", left: "left-2.5" },
      dealWidth: "w-[85px]",
      dealInnerWidth: "w-[77px]",
      dealTextSize: "text-[12.2px]",
      dealAmountSize: "text-[18.3px]",
      currencyPosition: { top: "top-4", left: "left-px" },
      rsPosition: { top: "top-[34px]", left: "left-11" },
    },
    {
      id: 2,
      position: { left: "left-[164px]" },
      cardPosition: { left: "left-[-3px]" },
      heartPosition: { top: "top-[7px]", left: "left-[107px]" },
      badgePosition: { top: "top-0", left: "left-0" },
      badgeWidth: "w-[100px]",
      badgeTextPosition: "left-9",
      badgeTextSize: "text-[8px]",
      dealPosition: { top: "top-[111px]", left: "left-2.5" },
      dealWidth: "w-[87px]",
      dealInnerWidth: "w-[79px]",
      dealTextSize: "text-[12.6px]",
      dealAmountSize: "text-[18.9px]",
      currencyPosition: { top: "top-[17px]", left: "left-px" },
      rsPosition: { top: "top-[35px]", left: "left-[45px]" },
    },
    {
      id: 3,
      position: { left: "left-[316px]" },
      cardPosition: { left: "left-[-18px]" },
      heartPosition: { top: "top-[5px]", left: "left-[106px]" },
      badgePosition: { top: "top-0", left: "left-px" },
      badgeWidth: "w-[100px]",
      badgeTextPosition: "left-9",
      badgeTextSize: "text-[8px]",
      dealPosition: { top: "top-[111px]", left: "left-2.5" },
      dealWidth: "w-[87px]",
      dealInnerWidth: "w-[79px]",
      dealTextSize: "text-[12.6px]",
      dealAmountSize: "text-[18.9px]",
      currencyPosition: { top: "top-[17px]", left: "left-px" },
      rsPosition: { top: "top-[35px]", left: "left-[45px]" },
    },
    {
      id: 4,
      position: { left: "left-[441px]" },
      cardPosition: { left: "left-[5px]" },
      heartPosition: { top: "top-3.5", left: "left-[106px]" },
      badgePosition: { top: "top-[7px]", left: "left-[-1px]" },
      badgeWidth: "w-[100px]",
      badgeTextPosition: "left-9",
      badgeTextSize: "text-[8px]",
      dealPosition: { top: "top-[111px]", left: "left-2.5" },
      dealWidth: "w-[87px]",
      dealInnerWidth: "w-[79px]",
      dealTextSize: "text-[12.6px]",
      dealAmountSize: "text-[18.9px]",
      currencyPosition: { top: "top-[17px]", left: "left-px" },
      rsPosition: { top: "top-[35px]", left: "left-[45px]" },
    },
    {
      id: 5,
      position: { left: "left-[593px]" },
      cardPosition: { left: "left-[5px]" },
      heartPosition: { top: "top-[5px]", left: "left-[107px]" },
      badgePosition: { top: "top-0", left: "left-0" },
      badgeWidth: "w-[100px]",
      badgeTextPosition: "left-9",
      badgeTextSize: "text-[8px]",
      dealPosition: { top: "top-[111px]", left: "left-2.5" },
      dealWidth: "w-[87px]",
      dealInnerWidth: "w-[79px]",
      dealTextSize: "text-[12.6px]",
      dealAmountSize: "text-[18.9px]",
      currencyPosition: { top: "top-[17px]", left: "left-px" },
      rsPosition: { top: "top-[35px]", left: "left-[45px]" },
    },
  ];

  return (
    <ScrollArea className="w-full h-[165px] overflow-hidden">
      <div className="flex space-x-[2cm] p-1 relative">
        {offerCards.map((card) => (
          <div
            key={card.id}
            className={`relative w-[141px] h-[165px] ${card.position.left}`}
          >
            <Card
              className={`relative w-[131px] h-[165px] ${card.cardPosition.left} rounded-[9.7px] overflow-hidden bg-cover bg-[50%_50%]`}
            >
              <CardContent className="p-0">
                {/* Free Delivery Badge */}
                <div
                  className={`absolute ${card.badgePosition.top} ${card.badgePosition.left} ${card.badgeWidth} h-7`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full top-0 left-0">
                      <div className="relative h-full">
                        <div className="absolute w-full h-full top-0 left-px bg-[#e50300] rounded-[10px]" />
                        <img
                          className="w-7 h-7 absolute top-0 left-0"
                          alt="Talabat logo"
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute top-2 ${card.badgeTextPosition} [font-family:'Poppins',Helvetica] font-semibold text-white ${card.badgeTextSize} tracking-[0] leading-[normal]`}
                    >
                      Free Delivery
                    </div>
                  </div>
                </div>

                {/* Heart/Favorite Icon */}
                <div
                  className={`absolute w-[19px] h-[17px] ${card.heartPosition.top} ${card.heartPosition.left} bg-[url(/vector-23.svg)] bg-[100%_100%]`}
                />

                {/* Deal Info */}
                <div
                  className={`absolute ${card.dealWidth} h-[49px] ${card.dealPosition.top} ${card.dealPosition.left} shadow-[0px_4px_20px_#00000080]`}
                >
                  <div className={`relative ${card.dealInnerWidth} h-[49px]`}>
                    <div
                      className={`absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-white ${card.dealTextSize} tracking-[0] leading-[normal]`}
                    >
                      FLAT DEAL
                    </div>
                    <div
                      className={`absolute top-[30px] left-0 [font-family:'Poppins',Helvetica] font-bold text-white ${card.dealTextSize} tracking-[0] leading-[normal]`}
                    >
                      ABOVE
                    </div>
                    <div
                      className={`absolute top-[30px] left-[54px] [font-family:'Poppins',Helvetica] font-bold text-white ${card.dealTextSize} tracking-[0] leading-[normal]`}
                    >
                      399
                    </div>
                    <div
                      className={`absolute top-2.5 left-[13px] [font-family:'Poppins',Helvetica] font-bold text-white ${card.dealAmountSize} tracking-[-0.94px] leading-[normal]`}
                    >
                      100 OFF
                    </div>
                    <div
                      className={`absolute w-2.5 h-[15px] ${card.currencyPosition.top} ${card.currencyPosition.left} overflow-hidden`}
                    >
                      <img
                        className="absolute w-2.5 h-[15px] top-0 -left-px"
                        alt="Vector"
                        src="/vector-25.svg"
                      />
                    </div>
                    <div
                      className={`absolute w-[7px] h-2.5 ${card.rsPosition.top} ${card.rsPosition.left} bg-[url(/vector-25.svg)] bg-[100%_100%]`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
