import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Select,
  Button,
  HStack,
  useColorModeValue,
  Text,
  VStack,
} from '@chakra-ui/react'
import PageTransition from '../components/layout/PageTransition'
import EventCard from '../components/events/EventCard'
import EventDetailsModal from '../components/events/EventDetailsModal'

function Events() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [events] = useState([
    {
      id: 1,
      name: 'Festival de Música',
      description: 'Um grande festival com diversos artistas nacionais e internacionais. Venha curtir os melhores shows em um ambiente incrível!',
      date: '2025-03-15',
      value: 'R$ 150,00',
      location: 'Parque da Cidade',
      capacity: '5000 pessoas',
      categories: ['Música', 'Festival', 'Entretenimento'],
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    },
    {
      id: 2,
      name: 'Conferência Tech',
      description: 'Evento de tecnologia e inovação com palestras, workshops e networking. Ideal para profissionais e entusiastas da área.',
      date: '2025-04-20',
      value: 'R$ 200,00',
      location: 'Centro de Convenções',
      capacity: '1000 pessoas',
      categories: ['Tecnologia', 'Negócios', 'Educação'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    },
    {
      id: 3,
      name: 'Workshop de Gastronomia',
      description: 'Aprenda técnicas avançadas de culinária com chefs renomados. Inclui degustação e certificado.',
      date: '2025-05-10',
      value: 'R$ 180,00',
      location: 'Escola de Gastronomia',
      capacity: '30 pessoas',
      categories: ['Gastronomia', 'Workshop'],
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    },
  ])
  const [filteredEvents, setFilteredEvents] = useState(events)

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesSearch = 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.categories.some(category => 
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
      if (filter === 'all') return matchesSearch
      if (filter === 'upcoming') {
        return matchesSearch && new Date(event.date) > new Date()
      }
      if (filter === 'featured') {
        return matchesSearch && event.featured
      }
      return matchesSearch
    })

    setFilteredEvents(filtered)
  }, [searchTerm, filter, events])

  const handleSearch = () => {
    // The search is already handled by the useEffect above
    // This function is here for the search button click handler
  }

  const handleEventDetails = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="1200px">
          <VStack spacing={8} align="stretch">
            <Heading>Eventos Disponíveis</Heading>
            
            <Box bg={bgColor} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
              <HStack spacing={4}>
                <Input
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                  minW="200px"
                >
                  <option value="all">Todos os eventos</option>
                  <option value="upcoming">Próximos eventos</option>
                  <option value="featured">Em destaque</option>
                </Select>
                <Button colorScheme="blue" px={8} onClick={handleSearch}>
                  Buscar
                </Button>
              </HStack>
            </Box>

            {filteredEvents.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredEvents.map(event => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onViewDetails={() => handleEventDetails(event)}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Box textAlign="center" py={10}>
                <Text fontSize="lg" color="gray.600">
                  Nenhum evento encontrado com os filtros selecionados.
                </Text>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>

      {selectedEvent && (
        <EventDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={selectedEvent}
        />
      )}
    </PageTransition>
  )
}

export default Events