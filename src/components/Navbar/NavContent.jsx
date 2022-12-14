import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue as mode,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { DesktopSubmenu, MobileSubMenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.actions";

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box as="a" rel="home">
          <Link to="/">
            <Logo h="30px" />
          </Link>
        </Box>
        <Box
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        ></Box>
        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <MobileSubMenu key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button borderRadius="25px" background="pink" size="lg" mt="5">
            Go to Timer
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          my="5"
          fontWeight="bold"
          _hover={{
            color: "#d11b59",
            cursor: "pointer",
          }}
        >
          Log in
        </Box>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  const loginDetail = useSelector((store)=>store.auth.token)
  const dispatch =  useDispatch()

  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Flex className="nav-content__desktop" align="center" gap="2rem">
        <Box as="a" href="#" rel="home">
          <Link to="/">
            <Logo h="8" />
          </Link>
        </Box>
        <HStack
          as="ul"
          id="nav__primary-menu"
          aria-label="Main Menu"
          listStyleType="none"
        >
          {links.map((link, idx) => (
            <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
              {link.children ? (
                <DesktopSubmenu link={link} />
              ) : (
                <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
              )}
            </Box>
          ))}
        </HStack>
      </Flex>
      <HStack spacing="4" minW="240px" justify="space-between">
        <Box
          as="a"
          href="#"
          color={mode("white", "blue.300")}
          fontWeight="bold"
          _hover={{
            color: "#cb7bc6",
          }}
        >
          Book a demo
        </Box>
        <Box as="p" color={mode("white", "white")} fontWeight="bold">
          |
        </Box>

        <Box
          color={mode("white", "blue.300")}
          fontWeight="bold"
          cursor={"pointer"}
          _hover={{
            color: "#cb7bc6",
          }}
        >
          { 
              loginDetail ? <Text  onClick={()=> dispatch(logout())}>Logout</Text>:<Link to="/login">Log in</Link>
          }
       
        </Box>
        <Button
          as="a"
          href="#"
          colorScheme="yellow"
          fontWeight="bold"
          borderRadius="25px"
          _hover={{
            color: "#cb7bc6",
          }}
        >
          <Link to="/timer">Go to Timer</Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
