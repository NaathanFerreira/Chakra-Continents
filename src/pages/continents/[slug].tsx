import { Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentCards from "../../components/ContinentCards";
import Header from "../../components/Header";
import InfoContentIcon from "../../components/InfoContentIcon";

function Continents() {
  return (
    <>
      <Header showBackLinkButton />
      <ContinentBanner />
      <Flex
        direction="column"
        w="100%"
        maxW={1480}
        mx="auto"
        padding={["10", "10", "5", "0"]}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          my="65px"
          direction={["column", "column", "row"]}
        >
          <Text
            width="100%"
            maxW={["100%", "100%", "50%"]}
            color="gray.200"
            fontSize="large"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack spacing="24" width="100%" maxW="50%" justifyContent="center">
            <InfoContentIcon titleText="50" label="países" />
            <InfoContentIcon titleText="60" label="línguas" />
            <InfoContentIcon titleText="27" label="cidades +100" infoIcon />
          </HStack>
        </Flex>
        <Text fontSize="2xl" fontWeight="medium">
          Cidades +100
        </Text>
        <SimpleGrid spacing={5} columns={[1, 2, 3, 4]} my={10}>
          <ContinentCards
            city="Londres"
            country="Reino Unido"
            flag="/images/reino_unido.jpg"
            continentImageSrc="/images/londres.jpg"
          />
          <ContinentCards
            city="Londres"
            country="Reino Unido"
            flag="/images/reino_unido.jpg"
            continentImageSrc="/images/londres.jpg"
          />
          <ContinentCards
            city="Londres"
            country="Reino Unido"
            flag="/images/reino_unido.jpg"
            continentImageSrc="/images/londres.jpg"
          />
          <ContinentCards
            city="Londres"
            country="Reino Unido"
            flag="/images/reino_unido.jpg"
            continentImageSrc="/images/londres.jpg"
          />
          <ContinentCards
            city="Londres"
            country="Reino Unido"
            flag="/images/reino_unido.jpg"
            continentImageSrc="/images/londres.jpg"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Continents;
