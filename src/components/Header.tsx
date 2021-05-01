import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Grid, Image, Icon, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';


export function Header() {
  const { asPath } = useRouter();
  const isHome = asPath === '/';

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "80px", "100px"]}
      mx="auto"
      px="4"
      align="center"
      justify="center"
      bg="white"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth={1160}
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        {!isHome && (
          <Link href="/">
            <IconButton
              as="a"
              href=""
              aria-label="Home"
              variant="unstyled"
              gridColumn="1"
              justifySelf="start"
              w={["6", "8", "10"]}
              h={["6", "8", "10"]}
            >
              <ChevronLeftIcon w={["6", "8", "10"]} h={["6", "8", "10"]} />
            </IconButton>
          </Link>
        )}
        <Image
          src="/images/logo.svg"
          alt="Worldtrip"
          justifySelf="center"
          gridColumn="2"
          w={[85, 120, 185]}
        />
      </Grid>
    </Flex>
  )
}