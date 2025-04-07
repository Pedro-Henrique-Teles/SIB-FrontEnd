import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image
} from "@heroui/react";

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Programação",
    "Sobre",
    "Visão",
    "Missão",
    "Valores",
    "História",
    "Contato",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Image
            alt="Logo Sib"
            src="/cabecalhoImgs/logoSibBranca.png"
            width={70}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Programação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Visão
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Missão
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Valores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            História
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Image
            alt="Logo Sib"
            src="/cabecalhoImgs/instagramIcon.png"
            width={30}
          />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white bg-black border" href="#" variant="flat">
            Eu sou novo
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

