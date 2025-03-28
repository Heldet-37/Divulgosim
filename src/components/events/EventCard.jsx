import { Box, Image, Badge, Text, Button, VStack, HStack } from '@chakra-ui/react'

function EventCard({ event, onViewDetails }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      border="1px"
      borderColor="gray.200"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      {event.image && (
        <Image
          src={event.image}
          alt={event.name}
          objectFit="cover"
          h="200px"
          w="100%"
        />
      )}
      
      <VStack p={6} align="stretch" spacing={4}>
        <VStack align="stretch" spacing={2}>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            {event.name}
          </Text>
          <Text color="gray.600" noOfLines={2}>
            {event.description}
          </Text>
        </VStack>

        <HStack justify="space-between" wrap="wrap">
          <Badge colorScheme="blue">
            {new Date(event.date).toLocaleDateString()}
          </Badge>
          <Text fontWeight="bold" color="blue.600">
            {event.value}
          </Text>
        </HStack>

        <HStack spacing={3}>
          <Button colorScheme="blue" onClick={onViewDetails} flex="1">
            Ver Detalhes
          </Button>
          <Button variant="outline" colorScheme="blue" flex="1">
            Seguir Evento
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default EventCard