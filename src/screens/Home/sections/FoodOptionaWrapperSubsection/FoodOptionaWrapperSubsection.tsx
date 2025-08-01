import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const FoodOptionaWrapperSubsection = (): JSX.Element => {
  const foodCategories = [
    {
      name: "Pizza",
      imageProps: {
        className: "w-[90px] h-[84px] mx-auto",
        alt: "Shourav sheikh",
      },
    },
    {
      name: "Burger",
      imageProps: {
        className: "w-[103px] h-[82px] mx-auto",
        alt: "Ilya mashkov",
      },
    },
    {
      name: "Biryani",
      imageProps: {
        className: "w-[92px] h-[91px] mx-auto",
        alt: "Image",
      },
    },
    {
      name: "Noodles",
      imageProps: {
        className: "w-[21px] h-[101px] mx-auto object-cover",
        alt: "Chowmine removebg",
      },
    },
    {
      name: "Salad",
      imageProps: {
        className: "w-[90px] h-[84px] mx-auto",
        alt: "Food item",
      },
    },
    {
      name: "Cake",
      imageProps: {
        className: "w-[90px] h-[84px] mx-auto",
        alt: "Food item",
      },
    },
    {
      name: "Rolls",
      imageProps: {
        className: "w-[90px] h-[84px] mx-auto",
        alt: "Food item",
      },
    },
    {
      name: "Momos",
      imageProps: {
        className: "w-[90px] h-[84px] mx-auto",
        alt: "Food item",
      },
    },
  ];

  return (
    <Card className="w-full h-[126px] overflow-hidden border-none">
      <CardContent className="p-0">
        <ScrollArea className="w-full h-full">
          <div className="flex items-center space-x-8 px-6 py-2 h-full">
            {foodCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between h-full"
              >
                <div className="flex items-center justify-center h-[90px]">
                  <img {...category.imageProps} />
                </div>
                <div className="font-['Poppins',Helvetica] font-semibold text-[#000000] text-base">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
