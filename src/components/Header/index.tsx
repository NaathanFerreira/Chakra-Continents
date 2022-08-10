import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image } from "@chakra-ui/react";

interface HeaderProps {
  showBackLinkButton?: boolean;
}

function Header({ showBackLinkButton }: HeaderProps) {
  return (
    <Flex
      as="header"
      h="16"
      w="100%"
      maxW={1480}
      mx="auto"
      justifyContent="center"
      alignItems="center"
      my={3}
      position="relative"
    >
      {showBackLinkButton && (
        <Flex position="absolute" left="0">
          <Icon fontSize={21} as={ChevronLeftIcon} />
        </Flex>
      )}
      <Image src="/images/logo.svg" boxSize="180px" alt="logo" />
    </Flex>
  );
}

export default Header;
