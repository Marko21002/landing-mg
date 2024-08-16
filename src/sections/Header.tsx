import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

interface NavbarProps {
  scrollToForm: () => void; // Define the prop type for scrollToForm
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToForm }) => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 overflow-x-clip">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your content monetization
        </p>
        <div className="inline-flex gap-1 items-center">
          {/* <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" /> */}
        </div>
      </div>
      <div className="py-5">
        <div className="px-2 md:px-10">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {/* Button to trigger the scroll */}
              <button
                onClick={scrollToForm} // Trigger the scroll to form on click
                className="bg-black text-white px-4 py-2 rounded-lg items-center font-medium inline-flex justify-center tracking-tight"
              >
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
