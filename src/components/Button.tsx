import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        `bg-my-cyan text-white px-10 py-3 rounded-3xl font-bold text-sm cursor-pointer`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
