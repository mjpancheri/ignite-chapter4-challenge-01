import { Flex, Heading } from '@chakra-ui/react';
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
        bg={`url(${urlImage}) no-repeat`}
        h={450}
      >
        <Heading as="h1" size="xl" color="gray.300" marginBottom="4">
          {title}
        </Heading>
        <Heading as="h4" size="md" color="gray.300">
          {subtitle}
        </Heading>
      </Flex>
    </Link>
  )
}