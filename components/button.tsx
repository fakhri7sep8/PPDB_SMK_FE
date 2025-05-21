import clsx from "clsx";
import { ClipLoader } from "react-spinners";


type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";
type Size = "sm" | "md" | "full" | "Large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: Size;
  height?: Size;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled = false,
  variant = "solid",
  colorSchema,
  width = "md",
  height = "md",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        "rounded-full border capitalize flex items-center justify-center",
        {
          // Warna solid
          "bg-blue-500 text-white": colorSchema === "blue" && variant === "solid",
          "bg-red-500 text-white": colorSchema === "red" && variant === "solid",
          "bg-green-500 text-white": colorSchema === "green" && variant === "solid",

          // Warna outline
          "border-blue-500 text-blue-500 bg-transparent":
            colorSchema === "blue" && variant === "outline",
          "border-red-500 text-red-500 bg-transparent":
            colorSchema === "red" && variant === "outline",
          "border-green-500 text-green-500 bg-transparent":
            colorSchema === "green" && variant === "outline",

          // Disabled
          "opacity-50 cursor-not-allowed": isDisabled,

          // Width
          "w-20": width === "sm",
          "w-24": width === "md",
          "w-40" : width === "Large",
          "w-full": width === "full",

          // Height
          "h-8": height === "sm",
          "h-10": height === "md",
          "h-12": height === "full",
        }
      )}
    >
      {isLoading ? (
        <ClipLoader color="#fff" size={20} />
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
