import { Flex, Heading, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface InfoProps {
  qtd: number;
  label: string;
  icon?: IconType;
}

export function Info({ label, qtd, icon = null }: InfoProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1" color="yellow.900" fontSize="5xl" fontWeight="semibold">{qtd}</Heading>
      <Heading as="h3" color="gray.600" fontSize="2xl" lineHeight="3xl" fontWeight="semibold">{label}{icon && <Icon ml="3" w="4" h="4" color="gray.600" opacity={0.5} as={icon} />}</Heading>
    </Flex>
  )
}