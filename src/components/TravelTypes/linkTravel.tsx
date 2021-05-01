import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

interface LinkTravelProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

export function LinkTravel({ href, src, alt, label }: LinkTravelProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Link href={href}>
      <Flex
        as="a"
        href=""
        direction={["row", "column"]}
        align="center"
        justify="center"
      >
        {isWideVersion 
          ? <Image src={src} alt={alt} w={85} h={85} mb="4" />
          : <Box w="1" h="1" borderRadius="50%" background="yellow.900" mr="2"></Box>
        }
        <Text fontSize={["sm", "md", "xl"]} fontWeight="600">{label}</Text>
      </Flex>
    </Link>
  )
}