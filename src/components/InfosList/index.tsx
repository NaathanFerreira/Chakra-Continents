import { Flex, useBreakpointValue } from "@chakra-ui/react";
import InfoContentIcon from "../InfoContentIcon";

function InfosList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={["column", "column", "row"]}
      w="100%"
      maxW={1480}
      mx="auto"
      justifyContent="space-between"
      alignItems="center"
      my="65px"
      p={["10", "10", "5"]}
    >
      <InfoContentIcon imgSrc="/images/nightlife.svg" label="vida noturna" />
      <InfoContentIcon imgSrc="/images/surf.svg" label="praia" />
      <InfoContentIcon imgSrc="/images/building.svg" label="moderno" />
      <InfoContentIcon imgSrc="/images/museum.svg" label="clássico" />
      <InfoContentIcon imgSrc="/images/earth.svg" label="e mais..." />
    </Flex>
  );
}

export default InfosList;
