import { Box, Flex, Heading, Avatar, Image, Text } from '@chakra-ui/react';

interface CityProps {
  img: string;
  name: string;
  country: string;
  flag: string;
}

export function City({ img, name, country, flag }: CityProps) {
  return (
    <Box
      borderRadius={4}
      overflow="hidden"
    >
      <Image src={img} w="100%" h={173} />

      <Flex
        align="center"
        justify="space-between"
        border={1}
        borderStyle="solid"
        borderColor="yellow.900"
        borderTop="0"
        p="6"
      >
        <Flex
          direction="column"
        >
          <Heading as="h3" mb="3" color="gray.900" fontSize="xl" fontWeight="semibold">{name}</Heading>
          <Text fontSize="md" color="gray.600">{country}</Text>
        </Flex>
        <Avatar size="sm" name={country} src={flag} />
      </Flex>
    </Box>
  )
}