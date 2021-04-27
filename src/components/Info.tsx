import { Flex, 
  Heading, 
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
  icon?: boolean;
}

export function Info({ label, qtd, icon = false }: InfoProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1" color="yellow.900" fontSize="5xl" fontWeight="semibold">{qtd}</Heading>
      <Heading as="h3" color="gray.600" fontSize="2xl" lineHeight="3xl" fontWeight="semibold">
        {label}
        {icon && (
          <Popover>
            <PopoverTrigger>
              <InfoOutlineIcon ml="3" w="4" h="4" color="gray.600" bg="white" opacity={0.5} cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent color="gray.300" bg="gray.900" borderColor="gray.900" fontSize="sm">
              <PopoverArrow bg="gray.900" borderColor="gray.900" />
              <PopoverCloseButton />
              <PopoverBody px="5">Ranking das 100 cidades mais visitadas do mundo.</PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Heading>
    </Flex>
  )
}