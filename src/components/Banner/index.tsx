import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";

function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      bgImage="/images/banner.jpg"
      w="100%"
      h="300px"
      bgPosition="100% 25%"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        h="100%"
        maxW={1480}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        p={["10", "5"]}
      >
        <Flex flexDirection="column">
          <Text fontSize="4xl" fontWeight="bold" color="gray.150">
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text fontSize="large" fontWeight="semibold" color="gray.100" mt={5}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && (
          <Flex marginBottom="-140px">
            <Image src="/images/airplane.svg" alt="airplane" boxSize="350px" />
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default Banner;
