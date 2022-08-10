import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import Banner from "../components/Banner";
import ContinentsSwiper from "../components/ContinentsSwiper";
import Header from "../components/Header";
import InfosList from "../components/InfosList";

export default function Home() {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Header showBackLinkButton />
      <Banner />
      <InfosList />
      <Divider
        w="100%"
        maxW="70px"
        mx="auto"
        color="gray.200"
        border="2px gray.200 solid"
      />
      <Box my="10" textAlign="center" w="100%" color="gray.200">
        <Text fontSize="2xl" fontWeight="medium">
          Vamos nessa?
        </Text>
        <Text fontSize="2xl" fontWeight="medium">
          Então escolha seu continente
        </Text>
      </Box>
      <ContinentsSwiper />
    </Flex>
  );
}
