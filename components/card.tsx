import React from "react";
import { clsx } from "clsx";

type Variant = "elevated" | "outline" | "flat";
type Padding = "none" | "sm" | "md" | "lg";
type Width = "fit" | "full" | "responsive";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: Variant;         // model tampilan card
  padding?: Padding;         // jarak dalam
  width?: Width;             // ukuran lebar
  shadow?: boolean;          // mau ada bayangan atau enggak
  isHoverable?: boolean;     // bisa ada efek hover atau enggak
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "elevated",
  padding = "md",
  width = "responsive",
  shadow = true,
  isHoverable = false,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-2xl transition-all duration-200",
        {
          // model tampilan
          "bg-white shadow-md": variant === "elevated" && shadow,
          "bg-white border border-gray-200": variant === "outline",
          "bg-gray-50": variant === "flat",

          // padding-nya
          "p-0": padding === "none",
          "p-2": padding === "sm",
          "p-4": padding === "md",
          "p-6": padding === "lg",

          // lebar card
          "w-fit": width === "fit",
          "w-full": width === "full",
          "max-w-md w-full": width === "responsive",

          // efek hover
          "hover:shadow-lg cursor-pointer": isHoverable,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
