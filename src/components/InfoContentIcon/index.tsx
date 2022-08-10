import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface InfoContentIconProps {
  imgSrc?: string;
  label: string;
  titleText?: string;
  infoIcon?: boolean;
}

function InfoContentIcon({
  imgSrc,
  label,
  titleText,
  infoIcon,
}: InfoContentIconProps) {
  return (
    <VStack spacing={5}>
      {titleText ? (
        <Text color="yellow.400" fontSize="5xl">
          {titleText}
        </Text>
      ) : (
        <Image src={imgSrc} alt="img" boxSize={["30px", "50px", "90px"]} />
      )}
      <Flex alignItems="center">
        <Text color="gray.200" fontSize="medium" fontWeight="bold">
          {label}
        </Text>
        {infoIcon && (
          <Icon
            fontSize="small"
            color="gray.200"
            marginLeft={2}
            as={InfoOutlineIcon}
          />
        )}
      </Flex>
    </VStack>
  );
}

export default InfoContentIcon;
