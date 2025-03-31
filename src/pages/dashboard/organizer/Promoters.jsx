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
  Stack,
  InputGroup,
  InputLeftElement,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { FaStar, FaSearch, FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

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
                <StatLabel>Taxa de Conclusão</StatLabel>
                <StatNumber>{promoter.completionRate}%</StatNumber>
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
              <Text fontWeight="bold" mb={2}>Eventos Atuais:</Text>
              <VStack align="stretch" spacing={2}>
                {(promoter.currentEvents || []).map((event, index) => (
                  <HStack key={index} justify="space-between" p={2} bg="gray.50" borderRadius="md">
                    <Text>{event.name}</Text>
                    <Badge colorScheme="green">{event.status}</Badge>
                  </HStack>
                ))}
              </VStack>
            </Box>

            <Button colorScheme="blue" onClick={onClose}>
              Convidar para Evento
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

function PromoterCard({ promoter, onViewProfile }) {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Card
      bg={cardBg}
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
    >
      <CardBody>
        <VStack spacing={4} align="stretch">
          <HStack spacing={4}>
            <Avatar size="lg" name={promoter.name} src={promoter.avatar} />
            <Box>
              <Heading size="md">{promoter.name}</Heading>
              <Text color={textColor} fontSize="sm" noOfLines={2}>
                {promoter.bio}
              </Text>
            </Box>
          </HStack>

          <HStack spacing={2} wrap="wrap">
            {promoter.specialties.map((specialty, index) => (
              <Badge key={index} colorScheme="blue">
                {specialty}
              </Badge>
            ))}
          </HStack>

          <SimpleGrid columns={3} spacing={4}>
            <VStack spacing={0}>
              <Text fontSize="sm" color={textColor}>Eventos</Text>
              <Text fontWeight="bold">{promoter.eventsPromoted}</Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize="sm" color={textColor}>Avaliação</Text>
              <HStack>
                <Text fontWeight="bold">{promoter.rating}</Text>
                <FaStar color="#F6E05E" size={12} />
              </HStack>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize="sm" color={textColor}>Conclusão</Text>
              <Text fontWeight="bold">{promoter.completionRate}%</Text>
            </VStack>
          </SimpleGrid>

          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => onViewProfile(promoter)}
          >
            Ver Perfil
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
}

function OrganizerPromoters() {
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
      completionRate: 95,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      about: 'Com mais de 5 anos de experiência em marketing digital, especializada em promover eventos musicais e festivais. Forte presença nas redes sociais e expertise em estratégias de engajamento.',
      currentEvents: [
        { name: 'Festival de Verão 2025', status: 'Ativo' },
        { name: 'Show de Jazz na Praça', status: 'Ativo' },
      ],
    },
    {
      id: 2,
      name: 'Carlos Santos',
      bio: 'Influenciador digital com foco em eventos corporativos',
      specialties: ['Corporativo', 'Tech'],
      eventsPromoted: 32,
      rating: 4.6,
      completionRate: 92,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      about: 'Especialista em eventos corporativos e de tecnologia. Experiência em networking e construção de comunidades profissionais.',
      currentEvents: [
        { name: 'Conferência Tech 2025', status: 'Ativo' },
      ],
    },
    {
      id: 3,
      name: 'Marina Costa',
      bio: 'Especialista em eventos culturais e exposições de arte',
      specialties: ['Cultura', 'Arte', 'Exposições'],
      eventsPromoted: 28,
      rating: 4.9,
      completionRate: 98,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      about: 'Apaixonada por arte e cultura, com experiência em curadoria e promoção de eventos culturais. Forte relacionamento com galerias e artistas.',
      currentEvents: [
        { name: 'Exposição de Arte Moderna', status: 'Ativo' },
        { name: 'Festival de Cinema Independente', status: 'Ativo' },
      ],
    },
  ])

  const [filteredPromoters, setFilteredPromoters] = useState(promoters)

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchTerm(searchValue)

    const filtered = promoters.filter(promoter => {
      const matchesSearch = 
        promoter.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        promoter.bio.toLowerCase().includes(searchValue.toLowerCase()) ||
        promoter.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchValue.toLowerCase())
        )
      
      if (filter === 'all') return matchesSearch
      if (filter === 'active') {
        return matchesSearch && promoter.currentEvents?.length > 0
      }
      if (filter === 'top_rated') {
        return matchesSearch && promoter.rating >= 4.5
      }
      return matchesSearch
    })

    setFilteredPromoters(filtered)
  }

  const handleFilterChange = (e) => {
    const filterValue = e.target.value
    setFilter(filterValue)
    
    const filtered = promoters.filter(promoter => {
      const matchesSearch = 
        promoter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promoter.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promoter.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      
      if (filterValue === 'all') return matchesSearch
      if (filterValue === 'active') {
        return matchesSearch && promoter.currentEvents?.length > 0
      }
      if (filterValue === 'top_rated') {
        return matchesSearch && promoter.rating >= 4.5
      }
      return matchesSearch
    })

    setFilteredPromoters(filtered)
  }

  const handleViewProfile = (promoter) => {
    setSelectedPromoter(promoter)
    onOpen()
  }

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="1200px">
          <VStack spacing={8} align="stretch">
            <HStack justify="space-between" wrap="wrap" spacing={4}>
              <Heading size="lg">Divulgadores</Heading>
              <Button
                leftIcon={<FaPlus />}
                colorScheme="blue"
                onClick={() => {}}
              >
                Convidar Divulgador
              </Button>
            </HStack>
            
            <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                w="100%"
              >
                <InputGroup flex="1">
                  <InputLeftElement pointerEvents="none">
                    <FaSearch color="gray.300" />
                  </InputLeftElement>
                  <Input
                    placeholder="Buscar divulgadores..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </InputGroup>
                <Select
                  value={filter}
                  onChange={handleFilterChange}
                  minW={{ base: "100%", md: "200px" }}
                >
                  <option value="all">Todos</option>
                  <option value="active">Ativos</option>
                  <option value="top_rated">Melhor avaliados</option>
                </Select>
              </Stack>
            </Box>

            {filteredPromoters.length > 0 ? (
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
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

export default OrganizerPromoters