import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Categories",
      path: "/categories",
    },
    {
      id: 3,
      title: "Movies",
      path: "/",
    },
    {
      id: 4,
      title: "Series",
      path: "/",
    },
  ];
  return (
    <>
      {menuItems.map((item) => {
        return (
          <ul key={item.id}>
            <NavLink to={item.path}>
              <li className="cursor-pointer">{item.title}</li>
            </NavLink>
          </ul>
        );
      })}
    </>
  );
};

export default Menu;
