import { Flex, Image, Icon, IconButton } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
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
            icon={<Icon as={RiArrowLeftSLine} />}
            fontSize="24"
            variant="unstyled"
            ml="2"
            position="absolute"
            left={0}
          />
        </Link>
      )}
      <Image src="/images/logo.svg" alt="Worldtrip" />
    </Flex>
  )
}