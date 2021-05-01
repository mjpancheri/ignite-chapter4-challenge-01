import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export interface SlideProps {
  id: number;
  urlImage: string;
  title: string;
  subtitle: string;
}

export function Slide({ id, urlImage, title, subtitle }: SlideProps) {
  return (
    <Link href={`/continents/${id}`}>
      <Flex
        as="a"
        href=""
        direction="column"
        align="center"
        justify="center"
        backgroundImage={`url(${urlImage})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        h="100%"
        w="100%"
      >
        <Heading as="h1" fontSize={["lg", "2xl", "5xl"]} color="gray.300" marginBottom={["2", "3", "4"]}>
          {title}
        </Heading>
        <Text fontSize={["0.8rem", "lg", "2xl"]} color="gray.100" fontWeight="bold">
          {subtitle}
        </Text>
      </Flex>
    </Link>
  )
}