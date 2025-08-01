import React from "react";
import { Button } from "../../../../components/ui/button";

export const SortSubsection = (): JSX.Element => {
  // Filter options data for the first row
  const topRowFilters = [
    {
      id: "filter",
      label: "Filter",
      icon: "/vector-4-1.svg",
      secondIcon: "/vector-5-1.svg",
      hasCustomIcon: true,
    },
    {
      id: "sortBy",
      label: "Sort By",
      icon: "/arrow-1.svg",
      iconPosition: "right",
    },
    {
      id: "pureVeg",
      label: "Pure Veg",
    },
    {
      id: "rating",
      label: "Rating 4.0+",
    },
  ];

  // Filter options data for the second row
  const bottomRowFilters = [
    {
      id: "cuisine",
      label: "Cuisine",
      hasCustomIcon: true,
      customIconSrc: [
        "/ellipse-55.svg",
        "/vector-37.svg",
        "/vector-36.svg",
        "/vector-35.svg",
      ],
    },
    {
      id: "rewards",
      label: "Rewards",
      icon: "/icon.svg",
    },
    {
      id: "nearAndQuick",
      label: "Near and Quick",
      icon: "/vector-295--stroke-.svg",
    },
  ];

  return (
    <div className="w-full space-y-3 py-2">
      <div className="flex flex-wrap gap-3">
        {topRowFilters.map((filter) => (
          <Button
            key={filter.id}
            variant="outline"
            className="h-9 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
          >
            {filter.id === "filter" && (
              <div className="relative mr-1 h-[13px] w-[17px]">
                <div className="absolute left-0.5 top-0 h-[7px] w-4">
                  <img
                    className="absolute left-0 top-1 h-px w-[9px] object-cover"
                    alt="Vector"
                    src="/vector-4-1.svg"
                  />
                  <div className="absolute left-2 top-0 h-[7px] w-[7px] rounded-[3.5px] border border-solid border-[#000000]" />
                </div>
                <div className="absolute left-0 top-1.5 h-[7px] w-3.5">
                  <img
                    className="absolute left-1.5 top-1 h-px w-[9px] object-cover"
                    alt="Vector"
                    src="/vector-5-1.svg"
                  />
                  <div className="absolute left-0 top-0 h-[7px] w-[7px] rotate-180 rounded-[3.5px] border border-solid border-[#000000]" />
                </div>
              </div>
            )}
            <span className="font-medium text-sm text-gray-700">
              {filter.label}
            </span>
            {filter.iconPosition === "right" && (
              <img
                className="ml-1 h-1 w-[7px] object-cover"
                alt="Arrow"
                src={filter.icon}
              />
            )}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="h-9 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <div className="relative mr-1 h-[17px] w-3.5 rotate-[0.51deg]">
            <img
              className="absolute left-px top-2 h-[5px] w-[11px] rotate-[-0.51deg]"
              alt="Ellipse"
              src="/ellipse-55.svg"
            />
            <img
              className="absolute left-[9px] top-[3px] h-1 w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-37.svg"
            />
            <img
              className="absolute left-1.5 top-0 h-[5px] w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-36.svg"
            />
            <img
              className="absolute left-[3px] top-0.5 h-1 w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-35.svg"
            />
            <div className="absolute left-1.5 top-1.5 h-px w-0.5 rounded-[0.87px/0.72px] bg-[#e50300]" />
            <div className="absolute left-0 top-[13px] h-0.5 w-3.5 rounded-[1.8px] bg-[#e50300]" />
          </div>
          <span className="font-medium text-sm text-gray-700">
            Cuisine
          </span>
        </Button>

        <Button
          variant="outline"
          className="h-9 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <img className="mr-1 h-[18px] w-[18px]" alt="Icon" src="/icon.svg" />
          <span className="font-medium text-sm text-gray-700">
            Rewards
          </span>
        </Button>

        <Button
          variant="outline"
          className="h-9 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <img
            className="mr-1 h-3 w-2"
            alt="Vector stroke"
            src="/vector-295--stroke-.svg"
          />
          <span className="font-medium text-xs text-gray-700">
            Near and Quick
          </span>
        </Button>
      </div>
    </div>
  );
};
