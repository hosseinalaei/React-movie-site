import Menu from "./Menu";
import Logo from "../../assets/images/logo/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-start py-8 border-b border-slate-500">
      <div className="w-1/3">
        <img src={Logo} />
      </div>
      <div className="flex justify-center gap-10">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
