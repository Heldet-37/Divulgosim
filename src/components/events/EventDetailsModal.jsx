import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Divider,
  Box,
} from '@chakra-ui/react'
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa'

function EventDetailsModal({ isOpen, onClose, event }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{event.name}</ModalHeader>
        <ModalCloseButton />
        
        <ModalBody>
          <VStack spacing={6} align="stretch">
            {event.image && (
              <Image
                src={event.image}
                alt={event.name}
                borderRadius="lg"
                objectFit="cover"
                maxH="300px"
                w="100%"
              />
            )}

            <Text>{event.description}</Text>

            <Divider />

            <VStack spacing={4} align="stretch">
              <HStack>
                <FaCalendarAlt />
                <Text>Data: {new Date(event.date).toLocaleDateString()}</Text>
              </HStack>

              <HStack>
                <FaMapMarkerAlt />
                <Text>Local: {event.location || 'A definir'}</Text>
              </HStack>

              <HStack>
                <FaUsers />
                <Text>Capacidade: {event.capacity || 'Ilimitada'}</Text>
              </HStack>

              <Box>
                <Text fontWeight="bold" mb={2}>Categorias:</Text>
                <HStack spacing={2}>
                  {(event.categories || ['Geral']).map((category, index) => (
                    <Badge key={index} colorScheme="blue">
                      {category}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2}>Valor:</Text>
                <Text fontSize="xl" color="blue.600">
                  {event.value}
                </Text>
              </Box>
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Seguir Evento
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EventDetailsModal