import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaUserPlus, FaCalendarPlus, FaBullhorn, FaMoneyBillWave } from 'react-icons/fa'
import PageTransition from '../components/layout/PageTransition'

function FeatureCard({ icon, title, description }) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      bg={bgColor}
      p={8}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
    >
      <VStack spacing={4} align="start">
        <Icon as={icon} w={10} h={10} color="blue.500" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
    </Box>
  )
}

function HowItWorks() {
  return (
    <PageTransition>
      <Box w="100%" py={16}>
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Hero Section */}
            <Box textAlign="center" w="100%">
              <Heading
                as="h1"
                size="2xl"
                mb={6}
                bgGradient="linear(to-r, blue.400, blue.600)"
                bgClip="text"
              >
                Como Funciona o Divulgosim
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto">
                Uma plataforma que conecta organizadores de eventos com divulgadores profissionais,
                criando oportunidades para todos.
              </Text>
            </Box>

            {/* Process Steps */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
              <FeatureCard
                icon={FaUserPlus}
                title="1. Cadastro Simples"
                description="Crie sua conta como organizador de eventos ou divulgador. O processo é rápido e fácil."
              />
              <FeatureCard
                icon={FaCalendarPlus}
                title="2. Criação de Eventos"
                description="Organizadores podem criar eventos e definir tarefas específicas para divulgação."
              />
              <FeatureCard
                icon={FaBullhorn}
                title="3. Divulgação Estratégica"
                description="Divulgadores escolhem eventos para promover e recebem tarefas específicas."
              />
              <FeatureCard
                icon={FaMoneyBillWave}
                title="4. Recompensas"
                description="Ganhe recompensas por cada tarefa concluída com sucesso na divulgação."
              />
            </SimpleGrid>

            {/* Benefits Section */}
            <Box w="100%" py={8}>
              <Heading as="h2" size="xl" mb={8} textAlign="center">
                Benefícios da Plataforma
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box p={6} textAlign="center">
                  <Heading size="md" mb={4}>Para Organizadores</Heading>
                  <VStack spacing={3} align="start">
                    <Text>✓ Acesso a divulgadores qualificados</Text>
                    <Text>✓ Controle total sobre as campanhas</Text>
                    <Text>✓ Métricas de desempenho</Text>
                    <Text>✓ Maior visibilidade para eventos</Text>
                  </VStack>
                </Box>
                <Box p={6} textAlign="center">
                  <Heading size="md" mb={4}>Para Divulgadores</Heading>
                  <VStack spacing={3} align="start">
                    <Text>✓ Oportunidades constantes</Text>
                    <Text>✓ Recompensas por performance</Text>
                    <Text>✓ Flexibilidade de horários</Text>
                    <Text>✓ Crescimento profissional</Text>
                  </VStack>
                </Box>
                <Box p={6} textAlign="center">
                  <Heading size="md" mb={4}>Geral</Heading>
                  <VStack spacing={3} align="start">
                    <Text>✓ Interface intuitiva</Text>
                    <Text>✓ Suporte dedicado</Text>
                    <Text>✓ Pagamentos seguros</Text>
                    <Text>✓ Comunidade ativa</Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default HowItWorks