interface Data {
  links: string[];
}

const LinkItems = ({ links }: Data) => {
  if (links.length === 0) return;
  return (
    <div className="flex flex-col pt-8">
      {links.map((link) => (
        <a key={link} href={link} className="text-white mb-2">
          {link}
        </a>
      ))}
    </div>
  );
};

export default LinkItems;
