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
  Text,
  Avatar,
  VStack,
  Badge,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import PageTransition from '../components/layout/PageTransition'

function PromoterModal({ isOpen, onClose, promoter }) {
  if (!promoter) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{promoter.name}</ModalHeader>
        <ModalCloseButton />
        
        <ModalBody pb={6}>
          <VStack spacing={6} align="stretch">
            <HStack spacing={4}>
              <Avatar size="xl" name={promoter.name} src={promoter.avatar} />
              <Box>
                <Heading size="md">{promoter.name}</Heading>
                <Text color="gray.600">{promoter.bio}</Text>
              </Box>
            </HStack>

            <Divider />

            <StatGroup>
              <Stat>
                <StatLabel>Eventos Promovidos</StatLabel>
                <StatNumber>{promoter.eventsPromoted}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Avaliação</StatLabel>
                <StatNumber>
                  <HStack>
                    <Text>{promoter.rating}</Text>
                    <FaStar color="#F6E05E" />
                  </HStack>
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Seguidores</StatLabel>
                <StatNumber>{promoter.followers}</StatNumber>
              </Stat>
            </StatGroup>

            <Box>
              <Text fontWeight="bold" mb={2}>Especialidades:</Text>
              <HStack spacing={2} wrap="wrap">
                {promoter.specialties.map((specialty, index) => (
                  <Badge key={index} colorScheme="blue">
                    {specialty}
                  </Badge>
                ))}
              </HStack>
            </Box>

            <Box>
              <Text fontWeight="bold" mb={2}>Sobre:</Text>
              <Text>{promoter.about || promoter.bio}</Text>
            </Box>

            <Box>
              <Text fontWeight="bold" mb={2}>Eventos Recentes:</Text>
              <VStack align="stretch" spacing={2}>
                {(promoter.recentEvents || []).map((event, index) => (
                  <HStack key={index} justify="space-between" p={2} bg="gray.50" borderRadius="md">
                    <Text>{event.name}</Text>
                    <Badge colorScheme="green">{event.status}</Badge>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

function PromoterCard({ promoter, onViewProfile }) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
    >
      <VStack spacing={4} align="center">
        <Avatar size="xl" name={promoter.name} src={promoter.avatar} />
        <Box textAlign="center">
          <Heading size="md" mb={2}>{promoter.name}</Heading>
          <Text color="gray.600" fontSize="sm" noOfLines={2}>
            {promoter.bio}
          </Text>
        </Box>
        <HStack spacing={2} wrap="wrap" justify="center">
          {promoter.specialties.map((specialty, index) => (
            <Badge key={index} colorScheme="blue">
              {specialty}
            </Badge>
          ))}
        </HStack>
        <HStack spacing={4}>
          <VStack spacing={0}>
            <Text fontSize="sm" color="gray.600">Eventos</Text>
            <Text fontWeight="bold">{promoter.eventsPromoted}</Text>
          </VStack>
          <VStack spacing={0}>
            <Text fontSize="sm" color="gray.600">Avaliação</Text>
            <HStack>
              <Text fontWeight="bold">{promoter.rating}</Text>
              <FaStar color="#F6E05E" size={12} />
            </HStack>
          </VStack>
        </HStack>
        <Button
          colorScheme="blue"
          size="sm"
          width="full"
          onClick={() => onViewProfile(promoter)}
        >
          Ver Perfil
        </Button>
      </VStack>
    </Box>
  )
}

function Promoters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedPromoter, setSelectedPromoter] = useState(null)
  
  const [promoters] = useState([
    {
      id: 1,
      name: 'Ana Silva',
      bio: 'Especialista em marketing digital e promoção de eventos',
      specialties: ['Música', 'Festivais'],
      eventsPromoted: 45,
      rating: 4.8,
      followers: 1200,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      about: 'Com mais de 5 anos de experiência em marketing digital, especializada em promover eventos musicais e festivais. Forte presença nas redes sociais e expertise em estratégias de engajamento.',
      recentEvents: [
        { name: 'Festival de Verão 2025', status: 'Concluído' },
        { name: 'Show de Jazz na Praça', status: 'Em andamento' },
      ],
    },
    {
      id: 2,
      name: 'Carlos Santos',
      bio: 'Influenciador digital com foco em eventos corporativos',
      specialties: ['Corporativo', 'Tech'],
      eventsPromoted: 32,
      rating: 4.6,
      followers: 800,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      about: 'Especialista em eventos corporativos e de tecnologia. Experiência em networking e construção de comunidades profissionais.',
      recentEvents: [
        { name: 'Conferência Tech 2025', status: 'Em andamento' },
        { name: 'Workshop de Inovação', status: 'Concluído' },
      ],
    },
    {
      id: 3,
      name: 'Marina Costa',
      bio: 'Especialista em eventos culturais e exposições de arte',
      specialties: ['Cultura', 'Arte', 'Exposições'],
      eventsPromoted: 28,
      rating: 4.9,
      followers: 950,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      about: 'Apaixonada por arte e cultura, com experiência em curadoria e promoção de eventos culturais. Forte relacionamento com galerias e artistas.',
      recentEvents: [
        { name: 'Exposição de Arte Moderna', status: 'Concluído' },
        { name: 'Festival de Cinema Independente', status: 'Em andamento' },
      ],
    },
  ])

  const [filteredPromoters, setFilteredPromoters] = useState(promoters)

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const filtered = promoters.filter(promoter => {
      const matchesSearch = 
        promoter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promoter.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promoter.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
      if (filter === 'all') return matchesSearch
      if (filter === 'most_active') {
        return matchesSearch && promoter.eventsPromoted > 30
      }
      if (filter === 'best_rated') {
        return matchesSearch && promoter.rating >= 4.5
      }
      return matchesSearch
    })

    setFilteredPromoters(filtered)
  }, [searchTerm, filter, promoters])

  const handleViewProfile = (promoter) => {
    setSelectedPromoter(promoter)
    onOpen()
  }

  const handleSearch = () => {
    // The search is already handled by the useEffect above
    // This function is here for the search button click handler
  }

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="1200px">
          <VStack spacing={8} align="stretch">
            <Heading>Divulgadores</Heading>
            
            <Box bg={bgColor} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
              <HStack spacing={4}>
                <Input
                  placeholder="Buscar divulgadores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  minW="200px"
                >
                  <option value="all">Todos</option>
                  <option value="most_active">Mais ativos</option>
                  <option value="best_rated">Melhor avaliados</option>
                </Select>
                <Button colorScheme="blue" px={8} onClick={handleSearch}>
                  Buscar
                </Button>
              </HStack>
            </Box>

            {filteredPromoters.length > 0 ? (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredPromoters.map(promoter => (
                  <PromoterCard
                    key={promoter.id}
                    promoter={promoter}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Box textAlign="center" py={10}>
                <Text fontSize="lg" color="gray.600">
                  Nenhum divulgador encontrado com os filtros selecionados.
                </Text>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>

      <PromoterModal
        isOpen={isOpen}
        onClose={onClose}
        promoter={selectedPromoter}
      />
    </PageTransition>
  )
}

export default Promoters