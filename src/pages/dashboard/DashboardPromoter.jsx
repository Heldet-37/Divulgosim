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
  Divider,
} from '@chakra-ui/react'
import { FaCalendarCheck, FaStar, FaTrophy, FaChartLine } from 'react-icons/fa'
import PageTransition from '../../components/layout/PageTransition'

function DashboardPromoter() {
  const [tasks] = useState([
    {
      id: 1,
      event: 'Festival de Música',
      task: 'Compartilhar nas redes sociais',
      deadline: '2025-03-10',
      status: 'pending',
      reward: 'R$ 50,00'
    },
    {
      id: 2,
      event: 'Conferência Tech',
      task: 'Criar conteúdo para Instagram',
      deadline: '2025-03-15',
      status: 'completed',
      reward: 'R$ 75,00'
    },
    {
      id: 3,
      event: 'Workshop de Gastronomia',
      task: 'Divulgar para lista de emails',
      deadline: '2025-03-20',
      status: 'in-progress',
      reward: 'R$ 60,00'
    }
  ])

  const [followedEvents] = useState([
    {
      id: 1,
      name: 'Festival de Música',
      date: '2025-03-15',
      tasksCompleted: 3,
      totalTasks: 5,
      earnings: 150.0
    },
    {
      id: 2,
      name: 'Conferência Tech',
      date: '2025-04-20',
      tasksCompleted: 2,
      totalTasks: 4,
      earnings: 100.0
    }
  ])

  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const statCardBg = useColorModeValue('blue.50', 'blue.900')

  const getStatusColor = (status) => {
    const statusColors = {
      completed: 'green',
      'in-progress': 'blue',
      pending: 'yellow'
    }
    return statusColors[status] || 'gray'
  }

  const totalEarnings = followedEvents.reduce((sum, event) => sum + event.earnings, 0)
  const completedTasks = tasks.filter(task => task.status === 'completed').length
  const totalTasks = tasks.length

  return (
    <PageTransition>
      <Box minH="100vh" py={8} px={4}>
        <Container maxW="1400px">
          <VStack spacing={8} align="stretch">
            {/* Welcome Section */}
            <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
              <Box>
                <Heading size="lg" mb={2}>Bem-vindo de volta, Ana!</Heading>
                <Text color="gray.600">
                  Aqui está o resumo das suas atividades de divulgação
                </Text>
              </Box>
              <HStack spacing={4}>
                <Avatar 
                  size="md" 
                  name="Ana Silva" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Ana Silva</Text>
                  <Badge colorScheme="blue">Divulgador Premium</Badge>
                </VStack>
              </HStack>
            </Flex>

            {/* Stats Overview */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaChartLine} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Ganhos Totais</StatLabel>
                      <StatNumber>R$ {totalEarnings.toFixed(2)}</StatNumber>
                      <StatHelpText>Este mês</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaCalendarCheck} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Tarefas Concluídas</StatLabel>
                      <StatNumber>{completedTasks}/{totalTasks}</StatNumber>
                      <StatHelpText>Taxa de conclusão: {((completedTasks/totalTasks) * 100).toFixed(0)}%</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaStar} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Avaliação Média</StatLabel>
                      <StatNumber>4.8</StatNumber>
                      <StatHelpText>De 5 estrelas</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={statCardBg}>
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Icon as={FaTrophy} w={6} h={6} color="blue.500" />
                    <Stat>
                      <StatLabel>Ranking</StatLabel>
                      <StatNumber>#3</StatNumber>
                      <StatHelpText>Top 10 Divulgadores</StatHelpText>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Tasks and Events Sections */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              {/* Active Tasks */}
              <Card>
                <CardHeader>
                  <Heading size="md">Tarefas Ativas</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    {tasks.map(task => (
                      <Box
                        key={task.id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor={borderColor}
                      >
                        <HStack justify="space-between" mb={2}>
                          <VStack align="start" spacing={1}>
                            <Text fontWeight="bold">{task.event}</Text>
                            <Text fontSize="sm" color="gray.600">{task.task}</Text>
                          </VStack>
                          <Badge colorScheme={getStatusColor(task.status)}>
                            {task.status === 'completed' ? 'Concluída' : 
                             task.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                          </Badge>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.600">Prazo: {new Date(task.deadline).toLocaleDateString()}</Text>
                          <Text fontWeight="bold" color="green.500">{task.reward}</Text>
                        </HStack>
                      </Box>
                    ))}
                    <Button colorScheme="blue" size="sm">
                      Ver Todas as Tarefas
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Followed Events */}
              <Card>
                <CardHeader>
                  <Heading size="md">Eventos Seguidos</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    {followedEvents.map(event => (
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
                              {new Date(event.date).toLocaleDateString()}
                            </Text>
                          </HStack>
                          <Box>
                            <HStack justify="space-between" mb={2}>
                              <Text fontSize="sm">Progresso das Tarefas</Text>
                              <Text fontSize="sm" fontWeight="bold">
                                {event.tasksCompleted}/{event.totalTasks}
                              </Text>
                            </HStack>
                            <Progress 
                              value={(event.tasksCompleted/event.totalTasks) * 100} 
                              colorScheme="blue" 
                              borderRadius="full"
                            />
                          </Box>
                          <HStack justify="space-between">
                            <Text fontSize="sm" color="gray.600">Ganhos</Text>
                            <Text fontWeight="bold" color="green.500">
                              R$ {event.earnings.toFixed(2)}
                            </Text>
                          </HStack>
                        </VStack>
                      </Box>
                    ))}
                    <Button colorScheme="blue" size="sm">
                      Ver Todos os Eventos
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <Heading size="md">Atividades Recentes</Heading>
              </CardHeader>
              <CardBody>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Evento</Th>
                      <Th>Atividade</Th>
                      <Th>Data</Th>
                      <Th>Status</Th>
                      <Th isNumeric>Recompensa</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tasks.map(task => (
                      <Tr key={task.id}>
                        <Td>{task.event}</Td>
                        <Td>{task.task}</Td>
                        <Td>{new Date(task.deadline).toLocaleDateString()}</Td>
                        <Td>
                          <Badge colorScheme={getStatusColor(task.status)}>
                            {task.status === 'completed' ? 'Concluída' : 
                             task.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                          </Badge>
                        </Td>
                        <Td isNumeric>{task.reward}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default DashboardPromoter