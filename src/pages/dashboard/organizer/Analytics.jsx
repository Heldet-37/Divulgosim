import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Select,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Progress,
} from '@chakra-ui/react'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

function OrganizerAnalytics() {
  const [timeRange, setTimeRange] = useState('month')

  const stats = {
    revenue: {
      current: 15000,
      previous: 12000,
      percentChange: 25
    },
    events: {
      current: 8,
      previous: 6,
      percentChange: 33.33
    },
    promoters: {
      current: 45,
      previous: 35,
      percentChange: 28.57
    },
    engagement: {
      current: 78,
      previous: 65,
      percentChange: 20
    }
  }

  const topEvents = [
    {
      name: 'Festival de Música',
      revenue: 5000,
      tickets: 250,
      promoters: 12,
      completion: 85
    },
    {
      name: 'Conferência Tech',
      revenue: 3500,
      tickets: 175,
      promoters: 8,
      completion: 65
    },
    {
      name: 'Workshop de Gastronomia',
      revenue: 2000,
      tickets: 40,
      promoters: 5,
      completion: 90
    }
  ]

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <HStack justify="space-between">
              <Heading size="lg">Análise de Desempenho</Heading>
              <Select
                w="200px"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="week">Última Semana</option>
                <option value="month">Último Mês</option>
                <option value="quarter">Último Trimestre</option>
                <option value="year">Último Ano</option>
              </Select>
            </HStack>

            {/* Métricas Principais */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel>Receita Total</StatLabel>
                    <StatNumber>R$ {stats.revenue.current}</StatNumber>
                    <StatHelpText>
                      <StatArrow
                        type={stats.revenue.percentChange >= 0 ? 'increase' : 'decrease'}
                      />
                      {stats.revenue.percentChange}%
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel>Eventos Ativos</StatLabel>
                    <StatNumber>{stats.events.current}</StatNumber>
                    <StatHelpText>
                      <StatArrow
                        type={stats.events.percentChange >= 0 ? 'increase' : 'decrease'}
                      />
                      {stats.events.percentChange}%
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel>Divulgadores Ativos</StatLabel>
                    <StatNumber>{stats.promoters.current}</StatNumber>
                    <StatHelpText>
                      <StatArrow
                        type={stats.promoters.percentChange >= 0 ? 'increase' : 'decrease'}
                      />
                      {stats.promoters.percentChange}%
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel>Taxa de Engajamento</StatLabel>
                    <StatNumber>{stats.engagement.current}%</StatNumber>
                    <StatHelpText>
                      <StatArrow
                        type={stats.engagement.percentChange >= 0 ? 'increase' : 'decrease'}
                      />
                      {stats.engagement.percentChange}%
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Tabela de Eventos */}
            <Card>
              <CardBody>
                <Heading size="md" mb={6}>Desempenho por Evento</Heading>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Evento</Th>
                      <Th isNumeric>Receita</Th>
                      <Th isNumeric>Ingressos</Th>
                      <Th isNumeric>Divulgadores</Th>
                      <Th>Progresso</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {topEvents.map((event, index) => (
                      <Tr key={index}>
                        <Td fontWeight="medium">{event.name}</Td>
                        <Td isNumeric>R$ {event.revenue}</Td>
                        <Td isNumeric>{event.tickets}</Td>
                        <Td isNumeric>{event.promoters}</Td>
                        <Td>
                          <Box>
                            <HStack justify="space-between" mb={2}>
                              <Text fontSize="sm">{event.completion}%</Text>
                              <Badge
                                colorScheme={
                                  event.completion >= 80 ? 'green' :
                                  event.completion >= 60 ? 'yellow' : 'red'
                                }
                              >
                                {event.completion >= 80 ? 'Ótimo' :
                                 event.completion >= 60 ? 'Bom' : 'Regular'}
                              </Badge>
                            </HStack>
                            <Progress
                              value={event.completion}
                              colorScheme={
                                event.completion >= 80 ? 'green' :
                                event.completion >= 60 ? 'yellow' : 'red'
                              }
                              size="sm"
                              borderRadius="full"
                            />
                          </Box>
                        </Td>
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

export default OrganizerAnalytics