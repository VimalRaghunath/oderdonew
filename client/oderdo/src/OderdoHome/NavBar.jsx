import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SparklesIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Do Ride Form",
    description: "Do Ride forms to ensure",
    icon: NewspaperIcon,
  },
  {
    title: "Do Ride Submission",
    description: "To Submit the do ride.",
    icon: NewspaperIcon,
  },
  {
    title: "Support",
    description: "Support for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "My Account",
    description: "My Account",
    icon: UserGroupIcon,
  },
];

const partnershipMenuItems = [
  {
    title: "Partnership",
    description: "Partner with us for various opportunities.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Partnership Form Submission",
    description: "Partner with us to grow your business",
    icon: SquaresPlusIcon,
  },
  {
    title: "Laundry Service",
    description: "Convenient laundry service at your doorstep",
    icon: SparklesIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Do Ride
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function PartnershipMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = partnershipMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Partnership
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        Home
      </a>
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        About Us
      </a>
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        Technology
      </a>
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        Investors
      </a>
      <NavListMenu />
      <PartnershipMenu />
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        FAQS
      </a>
      <a
        href="#"
        className="font-medium text-blue-gray-700 flex items-center gap-5 py-1 pr-1 rounded-lg hover:bg-blue-gray-50 transition duration-300 mr-5"
      >
        Contact Us
      </a>
    </List>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //   const [token, setToken] = useState(null);

  //   const navigate = useNavigate()

  //   useEffect(() => {
  //     const storedToken = localStorage.getItem('token');
  //     setToken(storedToken);
  //   }, []);

  //   const handleLogout=()=>{
  //     localStorage.removeItem('token')
  //     setToken(null);
  //   }

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        ></Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button
            variant="text"
            size="sm"
            color="blue-gray"
            onClick={() => navigate("/")}
          >
            Log In
          </Button>

          <Button
            variant="gradient"
            size="sm"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Register
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
