import { Grid, GridItem } from '@chakra-ui/react';
import { LinkTravel } from './linkTravel';

export function TravelTypes() {

  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
      w="100%"
      align="center"
      justifyContent="space-between"
      mt={["10", "20", "32"]}
      mx="auto"
      maxWidth={1160}
      gap={[1, 3, 5]}
    >
      <GridItem>
        <LinkTravel href="/" src="/images/cocktail.svg" alt="cocktail" label="vida noturna" />
      </GridItem>
      <GridItem>
        <LinkTravel href="/" src="/images/surf.svg" alt="surf" label="praia" />
      </GridItem>
      <GridItem>
        <LinkTravel href="/" src="/images/building.svg" alt="building" label="moderno" />
      </GridItem>
      <GridItem>
        <LinkTravel href="/" src="/images/museum.svg" alt="museum" label="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 1, 1]}>
        <LinkTravel href="/" src="/images/earth.svg" alt="earth" label="e mais..." />
      </GridItem>
    </Grid>
  )
}