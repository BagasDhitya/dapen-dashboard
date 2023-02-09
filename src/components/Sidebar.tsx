import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  QueueListIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import { useLocation } from "react-router-dom";

import logo from "../assets/logo-umm.png";

const Drawer = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const { pathname } = useLocation();

  return (
    <Sidebar backgroundColor="#a02926" customBreakPoint="1024px">
      <Menu
        className="h-screen"
        rootStyles={{
          [`.${menuClasses.button}`]: {
            "&:hover": {
              backgroundColor: "#ffff",
              color: "#a02926",
            },
          },
        }}
        menuItemStyles={{
          icon: () => {
            return {
              width: "1.5rem",
              minWidth: "1.5rem",
              height: "1.5rem",
              marginRight: "1.5rem",
            };
          },
          button: ({ active, disabled }) => {
            return {
              color: disabled ? "#666" : active ? "#fff" : "#fff",
              backgroundColor: active ? "#690801" : "#a02926",
            };
          },
        }}
      >
        <div className="divider my-0"></div>
        <div className="m-10">
          <img src={logo} width={180} />
        </div>
        <MenuItem
          active={pathname.includes("/admin")}
          icon={<HomeIcon />}
          href="/admin"
        >
          Dashboard
        </MenuItem>
        <div className="divider my-0"></div>
        <MenuItem
          active={pathname.includes("/list1")}
          icon={<UsersIcon />}
          href="/list1"
        >
          Item 1
        </MenuItem>
        <MenuItem
          active={pathname.includes("/list2")}
          icon={<BookOpenIcon />}
          href="/list2"
        >
          Item 2
        </MenuItem>
        <MenuItem
          active={pathname.includes("/list3")}
          icon={<QueueListIcon />}
          href="/list3"
        >
          Item 3
        </MenuItem>
      </Menu>
      <div
        className={`absolute bottom-0 flex w-full p-3 ${
          collapsed ? "justify-center" : "justify-end"
        }`}
      >
        {collapsed ? (
          <ChevronDoubleRightIcon
            className="h-6 w-6"
            onClick={() => collapseSidebar()}
          />
        ) : (
          <ChevronDoubleLeftIcon
            className="h-6 w-6"
            onClick={() => collapseSidebar()}
          />
        )}
      </div>
    </Sidebar>
  );
};

export default Drawer;
