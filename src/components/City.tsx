import { Box, Flex, Heading, Avatar, Image, Text } from '@chakra-ui/react';

interface CityProps {
  img: string;
  name: string;
  country: string;
  flag: string;
}

export function City({ img, name, country, flag }: CityProps) {
  return (
    <Flex
      direction="column"
      w={256}
      h={279}
      border={1}
      borderStyle="solid"
      borderColor="yellow.900"
      borderRadius={4}
    >
      <Image src={img} w={256} h={173} />

      <Flex
        align="center"
        justify="space-between"
        my="4"
        w="100%"
      >
        <Flex
          direction="column"
          align="flex-start"
          justify="space-evenly"
          ml="4"
        >
          <Heading as="h3" mb="4" color="gray.900" fontSize="lg" fontWeight="normal">{name}</Heading>
          <Text fontSize="sm" color="gray.600">{country}</Text>
        </Flex>
        <Avatar mr="4" size="sm" name={country} src={flag} />
      </Flex>
    </Flex>
  )
}