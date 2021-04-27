import { Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface LinkTravelProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

export function LinkTravel({ href, src, alt, label }: LinkTravelProps) {
  return (
    <Link href={href}>
      <Flex
        as="a"
        href=""
        direction="column"
        w="100%"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        justify="center"
      >
        <Image src={src} alt={alt} />
        <Text marginTop="4">{label}</Text>
      </Flex>
    </Link>
  )
}