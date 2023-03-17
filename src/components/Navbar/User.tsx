import { Menu } from "@headlessui/react";
import { Icon } from "../../utils/Icons";

export default function User() {
  const user = {
    name: "Doğan Özgür",
    avatar: "https://avatars.githubusercontent.com/u/47204631?v=4",
  };
  return (
    <Menu as="div" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`${
              open ? "bg-active" : "bg-black"
            } flex items-center hover:bg-active rounded-2xl pr-2`}
          >
            <img
              src={user.avatar}
              className="w-8 h-8 rounded-full mr-2 p-0.5  "
              alt={user.name}
            />
            <span className="mr-2 text-sm font-semibold">{user.name}</span>
            <span className={open ? "rotate-180" : undefined}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full right-0 w-48 p-1 rounded-md bg-active translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active ? "bg-white bg-opacity-10" : undefined
                  }`}
                  href="/#"
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active ? "bg-white bg-opacity-10" : undefined
                  }`}
                  href="/#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active ? "bg-white bg-opacity-10" : undefined
                  }`}
                  href="/#"
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
