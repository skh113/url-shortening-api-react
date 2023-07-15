interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="bg-my-cyan text-white px-10 py-3 rounded-3xl font-bold text-sm cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
