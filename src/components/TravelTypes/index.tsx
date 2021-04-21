import { Flex, Image, Icon, IconButton } from '@chakra-ui/react';
import { LinkTravel } from './linkTravel';

export function TravelTypes() {

  return (
    <Flex
      w="100%"
      maxWidth={1160}
      h={145}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <LinkTravel href="#" src="/images/cocktail.svg" alt="cocktail" label="vida noturna" />
      <LinkTravel href="#" src="/images/surf.svg" alt="surf" label="praia" />
      <LinkTravel href="#" src="/images/building.svg" alt="building" label="moderno" />
      <LinkTravel href="#" src="/images/museum.svg" alt="museum" label="clássico" />
      <LinkTravel href="#" src="/images/earth.svg" alt="earth" label="e mais" />
    </Flex>
  )
}