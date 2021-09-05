import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-50 z-10 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left side  */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle div  */}
      <div className="flex items-center md:border-2 rounded-full py-2 mad:shadow-sm ">
        <input
          type="text"
          placeholder="Start your Search"
          className="outline-none flex-grow pl-5 bg-transparent"
        />
        <SearchIcon className=" hidden h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center cursor-pointer p-2 rounded-full border-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </header>
  );
}

export default Header;
