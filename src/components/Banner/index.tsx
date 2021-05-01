import { Box, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      h={[160, 250, 335]}
      bgImage="url(/images/banner.jpg)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "15", "36"]}
      >
        <Box>
          <Heading
            as="h1"
            color="gray.100"
            fontWeight="500"
            fontSize={["lg", "2xl", "4xl"]}
          >
            5 continentes,<br />infinitas possibilidades
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["sm", "md", "xl"]}

          >
            {isWideVersion 
              ? <span>Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</span> 
              : <span>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</span>
            }
          </Text>
        </Box>

        {isWideVersion && (
          <Image
            w={430}
            display="block"
            src="/images/airplane.svg"
            alt="Airplane"
            transform="translateY(56px)"
            ml="8"
          />
        )}
      </Flex>
    </Flex>
  )
}