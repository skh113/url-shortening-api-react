interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="bg-my-cyan text-white px-8 py-3 rounded-3xl font-bold text-sm">
      {children}
    </button>
  );
};

export default Button;
