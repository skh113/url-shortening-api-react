interface Data {
  links: string[];
}

const LinkItems = ({ links }: Data) => {
  if (links.length === 0) return;
  return (
    <div className="flex flex-col pb-4 items-center">
      {links.map((link) => (
        <a
          key={link}
          href={link}
          className="text-my-grayish-violet hover:text-white hover:scale-125 mb-2 transition"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default LinkItems;
