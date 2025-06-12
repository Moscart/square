import { CustomerLevel } from "@/lib/redux/features/customer/customerSlice";
import React from "react";

interface LevelBadgeProps {
  variant: CustomerLevel;
}

const variants: Record<
  CustomerLevel,
  { bg: string; from: string; to: string; label: string }
> = {
  warga: {
    bg: "#FEFBF6",
    from: "#EEA849",
    to: "#F46B45",
    label: "Warga",
  },
  konglomerat: {
    bg: "#FEF5FF",
    from: "#E100FF",
    to: "#7F00FF",
    label: "Konglomerat",
  },
  sultan: {
    bg: "#F6FCFE",
    from: "#38EF7D",
    to: "#11998E",
    label: "Sultan",
  },
  juragan: {
    bg: "#F6FCFE",
    from: "#56CCF2",
    to: "#2F80ED",
    label: "Juragan",
  },
};

export const LevelBadge: React.FC<LevelBadgeProps> = ({ variant }) => {
  const { bg, from, to, label } = variants[variant];

  return (
    <div className="py-3 px-6 rounded w-fit" style={{ backgroundColor: bg }}>
      <h1
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {label}
      </h1>
    </div>
  );
};
