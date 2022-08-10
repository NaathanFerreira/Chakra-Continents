import { Box, Text } from "@chakra-ui/react";

function ContinentBanner() {
  return (
    <Box
      bgImage="/images/europa.png"
      w="100%"
      h="400px"
      position="relative"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Text
        color="white"
        fontWeight="bold"
        fontSize="3xl"
        position="absolute"
        left="40"
        bottom="20"
      >
        Europa
      </Text>
    </Box>
  );
}

export default ContinentBanner;
