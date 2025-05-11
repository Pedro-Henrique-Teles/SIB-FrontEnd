import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Image,
} from "@heroui/react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export const Cabecalho = ({ irParaOTopo, scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const urlInstagram =
    "https://www.instagram.com/sib.jf?igsh=dmsxOTExNzRuYTNm&utm_source=qr";
  const menuItems = [
    "Programação",
    "Sobre",
    "Visão",
    "Valores",
    "Galeria",
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
            onClick={() => irParaOTopo()}
            alt="Logo Sib"
            src="/img/icons/logoSibBranca.png"
            width={70}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.programacaoRef)}
          >
            Programação
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.sobreRef)}
          >
            Sobre
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.visaoRef)}
          >
            Visão
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.valoresRef)}
          >
            Valores
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.galeriaRef)}
          >
            Galeria
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.historiaRef)}
          >
            Historia
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-transparent font-bold text-sm"
            onPress={() => scrollToSection(refs.contatoRef)}
          >
            Contato
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="text-white bg-black border"
            href="#"
            variant="flat"
            onPress={() => scrollToSection(refs.formRef)}
          >
            Eu sou novo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NavbarItem className="flex">
            <Link to={urlInstagram} target="_blank">
              <FaInstagram color="white" size={40} />
            </Link>
          </NavbarItem>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <button
              className="w-full text-black text-left py-2 px-4"
              onClick={() => {
                setIsMenuOpen(false);
                switch (item) {
                  case "Programação":
                    scrollToSection(refs.programacaoRef);
                    break;
                  case "Sobre":
                    scrollToSection(refs.sobreRef);
                    break;
                  case "Galeria":
                    scrollToSection(refs.galeriaRef);
                    break;
                  case "Visão":
                    scrollToSection(refs.visaoRef);
                    break;
                  case "Valores":
                    scrollToSection(refs.valoresRef);
                    break;
                  case "História":
                    scrollToSection(refs.historiaRef);
                    break;
                  case "Contato":
                    scrollToSection(refs.contatoRef);
                    break;
                  default:
                    break;
                }
              }}
            >
              {item}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
