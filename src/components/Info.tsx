import { Flex, 
  Heading, 
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface InfoProps {
  qtd: number;
  label: string;
  cities?: string;
}

export function Info({ label, qtd, cities = null }: InfoProps) {
  return (
    <Flex
      direction="column"
      align={["flex-start", "flex-start", "center"]}
      justify="center"
    >
      <Heading as="h1" color="yellow.900" fontSize={["2xl", "3xl", "5xl"]} fontWeight="semibold">{qtd}</Heading>
      <Text color="gray.600" fontSize={["md", "lg", "xl"]} fontWeight="semibold">
        {label}
        {cities && (
          <Popover>
            <PopoverTrigger>
              <InfoOutlineIcon ml="3" w={["3", "4"]} h={["3", "4"]} color="gray.600" bg="white" opacity={0.5} cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent color="gray.300" bg="gray.900" borderColor="gray.900" fontSize={["xs", "sm"]}>
              <PopoverArrow bg="gray.900" borderColor="gray.900" />
              <PopoverCloseButton />
              <PopoverBody px="5">{cities}</PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Text>
    </Flex>
  )
}