import { Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ContinentsSwiper() {
  return (
    <Flex w="100%" maxW={1480} mx="auto" mb={10}>
      <Carousel>
        <div>
          <Image src="/images/europa.png" alt="europe" />
          <p className="legend">Europa 1</p>
        </div>
        <div>
          <Image src="/images/europa.png" alt="europe" />
          <p className="legend">Europa 2</p>
        </div>
      </Carousel>
    </Flex>
  );
}

export default ContinentsSwiper;

{
  /* <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/images/europa.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading>Europa</Heading>
                <Text>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex> */
}
