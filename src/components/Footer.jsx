import Image from "next/image";
import prLogo from "../assets/pr-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerColumns = [
  ["Solutions", "Industries", "Terms of Service", "Privacy Policy", "MCA"],
  ["Company", "Join our Team", "Hire us", "Careers"],
  ["Resources", "Resources", "Blog", "Dropdown"],
  [
    "Support",
    "Help Center",
    "API Docs",
    "Ticket System",
    "Status Page",
    "Contacts",
  ],
  ["Solutions", "Industries", "Terms of Service", "Privacy Policy", "MCA"],
  ["Contacts", "Join our Team", "Hire us", "Careers"],
];

const socialLinks = [
  { label: "FaFacebook", Icon: FaFacebook },
  { label: "FaTwitter", Icon: FaTwitter },
  { label: "FaLinkedin", Icon: FaLinkedin },
  { label: "FaInstagram", Icon: FaInstagram },
];

function Footer() {
  return (
    <footer className="main-container mt-10 w-full bg-[#515a5e] ">
      <div className="relative  mx-auto w-full overflow-hidden bg-[#293235] px-15 pb-8 pt-14 text-white ">
        <div className="absolute -left-[5%] -top-16 h-24 w-[110%] rounded-b-[50%] bg-white  sm:-top-20 sm:h-28 " />

        <div className="links  flex items-center mb-3 justify-between ">
          <div className="w-[250px]">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold"
            >
              <Image src={prLogo} className="w-[80px] h-[68px]" />
            </a>
          </div>

          <div className="flex flex-col gap-8 ">
            <div className="flex gap-5 text-white lg:justify-end">
              {socialLinks.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors hover:text-[#0258D9]"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="flex items-start justify-between ">
          {footerColumns.map(([title, ...links], columnIndex) => (
            <div key={`${title}-${columnIndex}`}>
              <h2 className="mb-4 text-[22px] font-semibold  text-[#375bcf]">
                {title}
              </h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[18px] leading-4 text-[#bec2c2]/60  hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
