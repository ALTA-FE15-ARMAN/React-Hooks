import { FC } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface NavbarProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Navbar: FC<NavbarProps> = ({ onClick }) => {
  return (
    <nav className="flex bg-gray-900 py-4 w-screen">
      <div className="flex space-x-7 ml-10">
        <img
          src="https://www.freepnglogos.com/uploads/one-piece-logo-18.png"
          alt="logo"
          width={50}
          className="mr-10"
        />
        <ul className="flex justify-start">
          <li>
            <a href="#" className="text-white text-lg font-semibold">
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-screen mr-10">
        <input
          type="text"
          placeholder="Cari film..."
          className="self-center rounded-md"
        />
      </div>
      <div className="cursor-pointer flex items-center" onClick={onClick}>
        <BsEye className="text-emerald-700 text-lg mx-2" />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-icon/user_318-792327.jpg?t=st=1692243606~exp=1692244206~hmac=9924c873a5073dfda4c96c5d4e3dede49fa2b22b73d3012ead90d7b8ac0e0cd6"
          alt="logo"
          width={50}
          className="mr-10"
        />
      </div>
    </nav>
  );
};

export default Navbar;
