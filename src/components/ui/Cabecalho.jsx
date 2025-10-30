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
} from "@heroui/react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

export const Cabecalho = ({ irParaOTopo, scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const urlInstagram =
    "https://www.instagram.com/sib.jf?igsh=dmsxOTExNzRuYTNm&utm_source=qr";
  const urlYoutube = "https://www.youtube.com/@SIBJF";

  const menuItems = [
    { name: "Início", action: () => irParaOTopo() },
    { name: "Programação", action: () => scrollToSection(refs.programacaoRef) },
    { name: "Sobre", action: () => scrollToSection(refs.sobreRef) },
    { name: "Visão", action: () => scrollToSection(refs.visaoRef) },
    { name: "Valores", action: () => scrollToSection(refs.valoresRef) },
    { name: "Galeria", action: () => scrollToSection(refs.galeriaRef) },
    { name: "História", action: () => scrollToSection(refs.historiaRef) },
    { name: "Contato", action: () => scrollToSection(refs.contatoRef) },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
 
      className="bg-black/90 backdrop-blur-sm h-24"
    >

      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="sm:hidden text-white"
        />

    
        <NavbarBrand className="flex items-center gap-3 h-20">
          <img
            onClick={irParaOTopo}
            alt="Logo SIB"
            src="/img/icons/logoSibBranca.png"
    
            className="cursor-pointer h-full w-auto object-contain"
          />
        </NavbarBrand>


      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <button
              onClick={item.action}
              className="text-white bg-transparent font-bold text-sm hover:text-gray-300 transition-colors"
            >
              {item.name}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2 sm:gap-3">
        <NavbarItem>
          <Button
            className="bg-white text-black font-bold text-sm px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
            variant="solid"
            onPress={() => scrollToSection(refs.formRef)}
          >
            Eu sou novo
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            to="/admin"
            variant="light"
            aria-label="Área Administrativa"
            className="text-white font-bold text-sm hover:text-gray-300 transition-colors"
            startContent={<FaUser size={18} />}
          >
            Acessar
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            to={urlInstagram}
            target="_blank"
            isIconOnly
            variant="light"
            aria-label="Instagram"
            className="text-white hover:bg-gray-700/50"
          >
            <RiInstagramFill size={28} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            to={urlYoutube}
            target="_blank"
            isIconOnly
            variant="light"
            aria-label="YouTube"
            className="text-white hover:bg-gray-700/50"
          >
            <RiYoutubeFill size={28} />
          </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <button
              onClick={() => {
                item.action();
                setIsMenuOpen(false);
              }}
              className="w-full text-black text-left py-2 px-4 hover:bg-gray-100 transition-colors text-lg"
            >
              {item.name}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};