import checkmark from "../assets/icons/checkmark.svg";
import truckLight from "../assets/icons/truck-light.svg";
import heartOutline from "../assets/icons/heart-outline.svg";
import arrowSyncCheckmark from "../assets/icons/arrow-sync-checkmark.svg";
import simpleArrowRight from "../assets/icons/simple-arrow-right.svg";
import simpleArrowLeft from "../assets/icons/simple-arrow-left.svg";
import { useState } from "react";

const items = [
  {
    label: "30-day satisfaction guarantee",
    icon: {
      src: checkmark.src,
      alt: "Checkmark icon",
    },
  },
  {
    label: "free delivery on orders under $40.00",
    icon: {
      src: truckLight.src,
      alt: "Truck icon",
    },
  },
  {
    label: "50.000+ happy customers",
    icon: {
      src: heartOutline.src,
      alt: "Heart icon",
    },
  },
  {
    label: "100% money back guarantee",
    icon: {
      src: arrowSyncCheckmark.src,
      alt: "Arrow sync icon",
    },
  },
];

export default function TopBar() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      {/* Mobile */}
      <div className="flex sm:hidden w-full py-4 justify-center gap-2 bg-dark-blue">
        <button
          className="disabled:opacity-50"
          disabled={selectedItem === 0}
          onClick={() => setSelectedItem((prev) => prev - 1)}
        >
          <img src={simpleArrowLeft.src} alt="Arrow left icon" />
        </button>
        <div className="flex gap-1 items-center">
          <img
            src={items[selectedItem].icon.src}
            alt={items[selectedItem].icon.alt}
          />
          <p className="text-white uppercase text-sm font-medium">
            {items[selectedItem].label}
          </p>
        </div>
        <button
          className="disabled:opacity-50"
          disabled={selectedItem === items.length - 1}
          onClick={() => setSelectedItem((prev) => prev + 1)}
        >
          <img src={simpleArrowRight.src} alt="Arrow right icon" />
        </button>
      </div>
      {/* Tablet */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 w-full px-4 md:px-12 py-2 gap-y-2 bg-dark-blue">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex gap-1 items-center justify-center"
          >
            <img src={item.icon.src} alt={item.icon.alt} />
            <p className="text-white uppercase text-sm font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex w-full md:px-4 xl:px-24 py-4 justify-between bg-dark-blue">
        {items.map((item) => (
          <div key={item.label} className="flex gap-1 items-center">
            <img src={item.icon.src} alt={item.icon.alt} />
            <p className="text-white uppercase text-sm font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
