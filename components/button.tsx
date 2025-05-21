/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from "clsx";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: string;
  height?: string;
  isLoading?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  title,
  isDisabled = false,
  variant = "solid",
  colorSchema,
  width = "full",
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
      {!isLoading ? (
        title
      ) : (
        <p>Loading ...</p>
        // <ClipLoader
        //   color={"#36d7b7"}
        //   size={20}
        //   aria-label="Loading Spinner"
        //   data-testid="loader"
        // />
      )}
    </button>
  );
};

export default Button;