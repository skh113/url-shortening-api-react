interface Props {
  children: React.ReactNode;
  title: string;
}

const FooterItems = ({ children, title }: Props) => {
  return (
    <div className="pb-8 mobile:text-center md:mr-8 w-full md:text-start">
      <h4 className="font-bold pb-4">{title}</h4>
      <ul className="text-my-grayish-violet ">{children}</ul>
    </div>
  );
};

export default FooterItems;
