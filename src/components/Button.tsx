interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="bg-my-cyan text-white px-6 py-2 rounded-3xl font-bold text-sm">
      {children}
    </button>
  );
};

export default Button;
