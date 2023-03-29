import React from "react";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

function Gnb() {
  const { push: routerPush, pathname } = useRouter();

  let activeItem = "home";
  if (pathname === "/") {
    activeItem = "home";
  } else if (pathname === "/about") {
    activeItem = "about";
  }

  const onClickGoLink = (e, data) => {
    console.log("Link", data);
    switch (data.name) {
      case "home":
        routerPush("/");
        return;
      case "about":
        routerPush("/about");
        return;
      case "admin":
        routerPush("/admin");
        return;
      default:
        console.error("올바르지 않는 경로");
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={onClickGoLink} />
      <Menu.Item name="about" active={activeItem === "about"} onClick={onClickGoLink} />
      <Menu.Item name="admin" active={activeItem === "admin"} onClick={onClickGoLink} />
    </Menu>
  );
}

export default Gnb;
