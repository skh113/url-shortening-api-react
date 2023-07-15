import FooterItems from "./FooterItems";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="flex md:flex-row mobile:flex-col w-full mobile:items-center bg-my-very-dark-violet text-white py-10 px-16 md:items-start md:justify-center">
      <h3 className="text-4xl font-bold mb-10 md:mr-20">Shortly</h3>
      <FooterItems title="Features">
        <li>Link shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </FooterItems>
      <FooterItems title="Resources">
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </FooterItems>
      <FooterItems title="Company">
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </FooterItems>
      <SocialMediaIcons />
    </footer>
  );
};

export default Footer;
