import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Badge,
  Progress,
  Button,
  HStack,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCalendar, FaClock, FaMoneyBillWave } from 'react-icons/fa'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

function TaskCard({ task }) {
  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const getStatusColor = (status) => {
    const colors = {
      pending: 'yellow',
      'in-progress': 'blue',
      completed: 'green',
      expired: 'red'
    }
    return colors[status] || 'gray'
  }

  return (
    <Card bg={cardBg} borderColor={borderColor}>
      <CardBody>
        <VStack align="stretch" spacing={4}>
          <HStack justify="space-between">
            <Badge colorScheme={getStatusColor(task.status)}>
              {task.status === 'pending' ? 'Pendente' :
               task.status === 'in-progress' ? 'Em Andamento' :
               task.status === 'completed' ? 'Concluída' : 'Expirada'}
            </Badge>
            <Text color="blue.500" fontWeight="bold">
              R$ {task.reward}
            </Text>
          </HStack>

          <VStack align="stretch" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">
              {task.title}
            </Text>
            <Text color="gray.600" fontSize="sm">
              {task.description}
            </Text>
          </VStack>

          <HStack spacing={4} fontSize="sm" color="gray.600">
            <HStack>
              <Icon as={FaCalendar} />
              <Text>{task.event}</Text>
            </HStack>
            <HStack>
              <Icon as={FaClock} />
              <Text>{task.deadline}</Text>
            </HStack>
          </HStack>

          {task.progress && (
            <Box>
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm">Progresso</Text>
                <Text fontSize="sm" fontWeight="bold">
                  {task.progress}%
                </Text>
              </HStack>
              <Progress
                value={task.progress}
                size="sm"
                colorScheme="blue"
                borderRadius="full"
              />
            </Box>
          )}

          <Button
            colorScheme={task.status === 'completed' ? 'green' : 'blue'}
            size="sm"
            isDisabled={task.status === 'completed' || task.status === 'expired'}
          >
            {task.status === 'completed' ? 'Concluída' :
             task.status === 'pending' ? 'Iniciar Tarefa' :
             task.status === 'in-progress' ? 'Continuar' : 'Expirada'}
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
}

function PromoterTasks() {
  const [tasks] = useState({
    pending: [
      {
        id: 1,
        title: 'Compartilhar nas Redes Sociais',
        description: 'Compartilhe o evento em suas redes sociais principais com a hashtag #FestivalDeMusica2025',
        event: 'Festival de Música',
        deadline: '15/03/2025',
        reward: '50,00',
        status: 'pending'
      },
      {
        id: 2,
        title: 'Criar Conteúdo para Stories',
        description: 'Crie 5 stories no Instagram sobre os principais artistas do evento',
        event: 'Festival de Música',
        deadline: '10/03/2025',
        reward: '75,00',
        status: 'pending'
      }
    ],
    inProgress: [
      {
        id: 3,
        title: 'Produzir Vídeo Promocional',
        description: 'Crie um vídeo de 1 minuto destacando os principais pontos do evento',
        event: 'Conferência Tech',
        deadline: '20/03/2025',
        reward: '150,00',
        status: 'in-progress',
        progress: 60
      }
    ],
    completed: [
      {
        id: 4,
        title: 'Divulgação no LinkedIn',
        description: 'Fazer post detalhado sobre o evento no LinkedIn',
        event: 'Conferência Tech',
        deadline: '01/03/2025',
        reward: '100,00',
        status: 'completed',
        progress: 100
      }
    ]
  })

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <HStack justify="space-between">
              <Heading size="lg">Minhas Tarefas</Heading>
              <HStack>
                <Icon as={FaMoneyBillWave} color="green.500" />
                <Text fontWeight="bold" color="green.500">
                  Total Ganho: R$ 275,00
                </Text>
              </HStack>
            </HStack>

            <Tabs colorScheme="blue" variant="enclosed">
              <TabList>
                <Tab>Pendentes ({tasks.pending.length})</Tab>
                <Tab>Em Andamento ({tasks.inProgress.length})</Tab>
                <Tab>Concluídas ({tasks.completed.length})</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {tasks.pending.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {tasks.inProgress.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {tasks.completed.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default PromoterTasks