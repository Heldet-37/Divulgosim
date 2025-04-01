import { useState } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Progress,
  Icon,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  Button,
  Avatar,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react'
import { FaCalendarAlt, FaUsers, FaChartLine, FaBullhorn } from 'react-icons/fa'
import PageTransition from '../../components/layout/PageTransition'
import EventForm from '../../components/events/EventForm'

function DashboardOrganizer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalSize = useBreakpointValue({ base: "full", md: "xl" })
  const toast = useToast()
  
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Festival de Música',
      date: '2025-03-15',
      status: 'active',
      totalDivulgadores: 12,
      completedTasks: 45,
      totalTasks: 60,
      revenue: 2500.0,
      ticketsSold: 150,
      totalTickets: 500,
      description: 'Um grande festival com diversos artistas',
      location: 'Parque da Cidade',
      category: 'music',
      value: 'R$ 150,00'
    },
    {
      id: 2,
      name: 'Conferência Tech',
      date: '2025-04-20',
      status: 'upcoming',
      totalDivulgadores: 8,
      completedTasks: 20,
      totalTasks: 40,
      revenue: 1800.0,
      ticketsSold: 80,
      totalTickets: 200,
      description: 'Evento de tecnologia e inovação',
      location: 'Centro de Convenções',
      category: 'technology',
      value: 'R$ 200,00'
    },
    {
      id: 3,
      name: 'Workshop de Gastronomia',
      date: '2025-05-10',
      status: 'draft',
      totalDivulgadores: 0,
      completedTasks: 0,
      totalTasks: 30,
      revenue: 0,
      ticketsSold: 0,
      totalTickets: 30,
      description: 'Workshop com chefs renomados',
      location: 'Escola de Gastronomia',
      category: 'food',
      value: 'R$ 180,00'
    }
  ])

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const statCardBg = useColorModeValue('blue.50', 'blue.900')

  const getStatusColor = (status) => {
    const statusColors = {
      active: 'green',
      upcoming: 'blue',
      draft: 'yellow',
      completed: 'gray'
    }
    return statusColors[status] || 'gray'
  }

  const totalRevenue = events.reduce((sum, event) => sum + event.revenue, 0)
  const totalDivulgadores = events.reduce((sum, event) => sum + event.totalDivulgadores, 0)
  const totalTicketsSold = events.reduce((sum, event) => sum + event.ticketsSold, 0)
  const totalTickets = events.reduce((sum, event) => sum + event.totalTickets, 0)

  const handleCreateEvent = (eventData) => {
    const newEvent = {
      id: events.length + 1,
      ...eventData,
      status: 'draft',
      totalDivulgadores: 0,
      completedTasks: 0,
      totalTasks: 0,
      revenue: 0,
      ticketsSold: 0,
      totalTickets: 0
    }
    setEvents([...events, newEvent])
    toast({
      title: 'Evento criado com sucesso!',
      description: 'O evento foi adicionado à sua lista.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    onClose()
  }

  const handleEditEvent = (event) => {
    setSelectedEvent(event)
    setIsEditing(true)
    onOpen()
  }

  const handleUpdateEvent = (updatedEventData) => {
    const updatedEvents = events.map(event => 
      event.id === selectedEvent.id 
        ? { ...event, ...updatedEventData }
        : event
    )
    setEvents(updatedEvents)
    toast({
      title: 'Evento atualizado com sucesso!',
      description: 'As alterações foram salvas.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setSelectedEvent(null)
    setIsEditing(false)
    onClose()
  }

  const handleModalClose = () => {
    setSelectedEvent(null)
    setIsEditing(false)
    onClose()
  }

  return (
    <PageTransition>
      <Box minH="100vh" py={8}>
        <Container maxW="1400px">
          <VStack spacing={8} align="stretch">
            {/* Welcome Section */}
            <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
              <Box>
                <Heading size="lg" mb={2}>Dashboard do Organizador</Heading>
                <Text color="gray.600">
                  Gerencie seus eventos e acompanhe o desempenho
                </Text>
              </Box>
              <HStack spacing={4}>
                <Button 
                  colorScheme="blue" 
                  leftIcon={<FaCalendarAlt />} 
                  onClick={() => {
                    setIsEditing(false)
                    onOpen()
                  }}
                  size={{ base: 'sm', md: 'md' }}
                  px={6}
                  _hover={{
                    transform: 'translateY(-1px)',
                    boxShadow: 'lg',
                  }}
                >
                  Criar Novo Evento
                </Button>
                <Avatar 
                  size="md" 
                  name="João Silva" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                />
              </HStack>
            </Flex>

            {/* Stats Overview */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaChartLine} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Receita Total</StatLabel>
                      <StatNumber>R$ {totalRevenue.toFixed(2)}</StatNumber>
                      <StatHelpText>Todos os eventos</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaUsers} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Ingressos Vendidos</StatLabel>
                      <StatNumber>{totalTicketsSold}/{totalTickets}</StatNumber>
                      <StatHelpText>Taxa de ocupação: {((totalTicketsSold/totalTickets) * 100).toFixed(0)}%</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaBullhorn} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Divulgadores Ativos</StatLabel>
                      <StatNumber>{totalDivulgadores}</StatNumber>
                      <StatHelpText>Em todos os eventos</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaCalendarAlt} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Total de Eventos</StatLabel>
                      <StatNumber>{events.length}</StatNumber>
                      <StatHelpText>{events.filter(e => e.status === 'active').length} ativos</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Events Table */}
            <Card>
              <CardHeader>
                <Heading size="md">Seus Eventos</Heading>
              </CardHeader>
              <CardBody overflowX="auto">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Evento</Th>
                      <Th>Data</Th>
                      <Th>Status</Th>
                      <Th>Divulgadores</Th>
                      <Th>Progresso</Th>
                      <Th isNumeric>Receita</Th>
                      <Th>Ações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {events.map(event => (
                      <Tr key={event.id}>
                        <Td fontWeight="medium">{event.name}</Td>
                        <Td>{new Date(event.date).toLocaleDateString()}</Td>
                        <Td>
                          <Badge colorScheme={getStatusColor(event.status)}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </Badge>
                        </Td>
                        <Td>{event.totalDivulgadores}</Td>
                        <Td>
                          <Box w="150px">
                            <HStack justify="space-between" mb={1}>
                              <Text fontSize="xs">{event.completedTasks}/{event.totalTasks}</Text>
                              <Text fontSize="xs" fontWeight="bold">
                                {((event.completedTasks/event.totalTasks) * 100).toFixed(0)}%
                              </Text>
                            </HStack>
                            <Progress 
                              value={(event.completedTasks/event.totalTasks) * 100} 
                              size="sm"
                              colorScheme="blue"
                              borderRadius="full"
                            />
                          </Box>
                        </Td>
                        <Td isNumeric>R$ {event.revenue.toFixed(2)}</Td>
                        <Td>
                          <HStack spacing={2}>
                            <Button 
                              size="sm" 
                              colorScheme="blue"
                              onClick={() => handleEditEvent(event)}
                            >
                              Editar
                            </Button>
                            <Button size="sm" variant="ghost">
                              Detalhes
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>

            {/* Event Performance */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              <Card>
                <CardHeader>
                  <Heading size="md">Desempenho por Evento</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    {events.map(event => (
                      <Box
                        key={event.id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor={borderColor}
                      >
                        <VStack align="stretch" spacing={3}>
                          <HStack justify="space-between">
                            <Text fontWeight="bold">{event.name}</Text>
                            <Badge colorScheme={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                          </HStack>
                          <SimpleGrid columns={2} spacing={4}>
                            <Box>
                              <Text fontSize="sm" color="gray.600">Ingressos</Text>
                              <Text fontWeight="bold">
                                {event.ticketsSold}/{event.totalTickets}
                              </Text>
                            </Box>
                            <Box>
                              <Text fontSize="sm" color="gray.600">Receita</Text>
                              <Text fontWeight="bold" color="green.500">
                                R$ {event.revenue.toFixed(2)}
                              </Text>
                            </Box>
                          </SimpleGrid>
                          <Box>
                            <HStack justify="space-between" mb={1}>
                              <Text fontSize="sm">Progresso da Divulgação</Text>
                              <Text fontSize="sm" fontWeight="bold">
                                {((event.completedTasks/event.totalTasks) * 100).toFixed(0)}%
                              </Text>
                            </HStack>
                            <Progress 
                              value={(event.completedTasks/event.totalTasks) * 100} 
                              colorScheme="blue"
                              borderRadius="full"
                            />
                          </Box>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">Divulgadores por Evento</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    {events.map(event => (
                      <Box
                        key={event.id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor={borderColor}
                      >
                        <VStack align="stretch" spacing={3}>
                          <HStack justify="space-between">
                            <Text fontWeight="bold">{event.name}</Text>
                            <Text fontSize="sm" color="gray.600">
                              {event.totalDivulgadores} divulgadores
                            </Text>
                          </HStack>
                          <SimpleGrid columns={2} spacing={4}>
                            <Box>
                              <Text fontSize="sm" color="gray.600">Tarefas Concluídas</Text>
                              <Text fontWeight="bold">
                                {event.completedTasks}/{event.totalTasks}
                              </Text>
                            </Box>
                            <Box>
                              <Text fontSize="sm" color="gray.600">Taxa de Conclusão</Text>
                              <Text fontWeight="bold">
                                {((event.completedTasks/event.totalTasks) * 100).toFixed(0)}%
                              </Text>
                            </Box>
                          </SimpleGrid>
                          <Button size="sm" colorScheme="blue" variant="outline">
                            Gerenciar Divulgadores
                          </Button>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Create/Edit Event Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={handleModalClose}
        size={modalSize}
        isCentered
      >
        <ModalOverlay 
          bg="blackAlpha.300"
          backdropFilter="blur(10px)"
        />
        <ModalContent mx={4}>
          <ModalHeader>{isEditing ? 'Editar Evento' : 'Criar Novo Evento'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EventForm 
              onSubmit={isEditing ? handleUpdateEvent : handleCreateEvent}
              onClose={handleModalClose}
              initialData={selectedEvent}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageTransition>
  )
}

export default DashboardOrganizer