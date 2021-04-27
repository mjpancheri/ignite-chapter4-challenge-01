import { Flex, Image, Icon, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface HeaderProps {
  showBack?: boolean;
}

export function Header({ showBack = false }: HeaderProps) {

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1240}
      mx="auto"
      px="6"
      py={27}
      align="center"
      justify="center"
      position="relative"
    >
      {showBack && (
        <Link href="/">
          <IconButton
            as="a"
            href=""
            aria-label="Home"
            variant="unstyled"
            ml="2"
            position="absolute"
            left={0}
          >
            <ChevronLeftIcon w="10" h="10" />
          </IconButton>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="Worldtrip" />
    </Flex>
  )
}