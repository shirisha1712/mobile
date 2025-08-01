import React from "react";
import { Card } from "../../../../components/ui/card";

export const ContainerSubsection = (): JSX.Element => {
  // Food category data for mapping
  const foodCategories = [
    {
      name: "Chicago Deep Pizza",
      className: "w-[61px] h-[52px] left-0",
      iconClassName: "w-[42px] h-10 top-0 left-[9px]",
      textClassName:
        "w-fit mt-[-0.22px] text-[5.8px] leading-[7.6px] font-semibold",
      textContainerClassName: "top-11 left-0",
    },
    {
      name: "Fast Food Combo",
      className: "w-14 h-[50px] left-[67px]",
      iconClassName: "w-[54px] h-[35px] top-0 left-px",
      textClassName:
        "w-fit mt-[-0.22px] text-[5.8px] leading-[7.6px] font-semibold",
      textContainerClassName: "top-[42px] left-0",
    },
    {
      name: "Grilled Chicken",
      className: "w-[51px] h-[54px] left-[129px]",
      iconClassName: "w-[43px] h-[42px] top-0 left-1",
      textClassName:
        "w-fit mt-[-0.22px] text-[5.8px] leading-[7.6px] font-bold",
      textContainerClassName: "top-[46px] left-0",
    },
    {
      name: "Whopper Burger King",
      className: "w-[55px] h-[62px] left-[187px]",
      iconClassName: "w-[46px] h-[42px] top-0 left-1",
      textClassName:
        "w-[54.76px] mt-[-0.22px] text-[5.8px] leading-[7.6px] font-bold",
      textContainerClassName: "top-[45px] left-0",
    },
    {
      name: "Chicken",
      className: "w-[47px] h-[59px] left-[248px]",
      iconClassName: "w-[45px] h-[49px] top-0 left-0",
      textClassName:
        "w-8 h-2 text-[6.3px] leading-[8.1px] font-bold whitespace-nowrap",
      textContainerClassName: "top-[51px] left-[7px]",
    },
    {
      name: "Beef",
      className: "w-[47px] h-[59px] left-[299px]",
      iconClassName: "w-[45px] h-[45px] top-0 left-0 rounded-[27.49px]",
      textClassName:
        "w-[23px] h-2 text-[6.3px] leading-[8.1px] font-bold whitespace-nowrap",
      textContainerClassName: "top-[51px] left-[11px]",
    },
    {
      name: "Shawarma",
      className: "w-12 h-[59px] left-[351px]",
      iconClassName:
        "w-[46px] h-[46px] top-0 left-0 grid grid-cols-1 grid-rows-1",
      textClassName:
        "w-[41px] h-2 text-[6.3px] leading-[8.1px] font-bold whitespace-nowrap",
      textContainerClassName: "top-[51px] left-[3px]",
    },
  ];

  // Close button data
  const closeButtons = [
    {
      containerClassName:
        "relative w-[30px] h-[30px] top-[59px] left-[164px] bg-white rounded-[7499.25px] border-[0.75px] border-solid border-[#ececec] shadow-[2.25px_3px_6px_#0000001a]",
      line1ClassName:
        "absolute w-[11px] h-px top-[19px] left-2.5 bg-[#000000] -rotate-45",
      line2ClassName:
        "top-[11px] left-2.5 rotate-45 absolute w-[11px] h-px bg-[#000000]",
      wrapperClassName:
        "relative w-[245px] h-[244px] top-[59px] left-[1227px] bg-cover bg-[50%_50%]",
    },
    {
      containerClassName:
        "relative w-[30px] h-[30px] top-10 left-5 bg-white rounded-[7499.25px] border-[0.75px] border-solid border-[#ececec] rotate-[77.69deg] shadow-[2.25px_3px_6px_#0000001a]",
      line1ClassName:
        "top-[19px] left-2 rotate-[-135deg] absolute w-[11px] h-px bg-[#000000]",
      line2ClassName:
        "top-[11px] left-2 rotate-[135deg] absolute w-[11px] h-px bg-[#000000]",
      wrapperClassName:
        "absolute w-[201px] h-[146px] top-[41px] -left-2 rotate-[-77.69deg] bg-cover bg-[50%_50%]",
    },
  ];

  return (
    <Card className="relative w-full h-[77px] bg-[#e50300] overflow-hidden border-none rounded-none">
      {closeButtons.map((button, index) => (
        <div key={`close-button-${index}`} className={button.wrapperClassName}>
          <div className={button.containerClassName}>
            <div className={button.line1ClassName} />
            <div className={button.line2ClassName} />
          </div>
        </div>
      ))}

      <div className="relative w-[441px] h-[228px] -top-10 left-[-27px]">
        <div className="absolute w-[397px] h-[62px] top-[51px] left-11">
          {foodCategories.map((category, index) => (
            <div
              key={`food-category-${index}`}
              className={`absolute ${category.className}`}
            >
              <div
                className={`absolute bg-cover bg-[50%_50%] ${category.iconClassName}`}
              />
              <div
                className={`inline-flex items-center justify-center gap-[2.23px] px-0 py-[0.45px] absolute ${category.textContainerClassName}`}
              >
                <div
                  className={`relative ${category.textClassName} [font-family:'Poppins',Helvetica] text-white text-center tracking-[0]`}
                >
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
