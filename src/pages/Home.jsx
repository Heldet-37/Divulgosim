import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaRocket, FaChartLine, FaUsers, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa'
import PageTransition from '../components/layout/PageTransition'

function FeatureCard({ icon, title, description }) {
  return (
    <VStack
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      borderRadius="lg"
      boxShadow="md"
      border="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      align="start"
      spacing={4}
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      <Icon as={icon} w={8} h={8} color="blue.500" />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  )
}

function BenefitSection({ title, benefits, image, isReversed }) {
  return (
    <Stack
      direction={{ base: 'column', lg: isReversed ? 'row-reverse' : 'row' }}
      spacing={{ base: 8, lg: 12 }}
      align="center"
    >
      <Box flex="1">
        <VStack align="start" spacing={6}>
          <Heading size="lg">{title}</Heading>
          {benefits.map((benefit, index) => (
            <HStack key={index} spacing={4}>
              <Icon as={FaCheckCircle} color="green.500" />
              <Text>{benefit}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
      <Box flex="1">
        <Image
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="2xl"
          w="full"
          h="auto"
        />
      </Box>
    </Stack>
  )
}

function Home() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.600, blue.400)',
    'linear(to-r, blue.900, blue.700)'
  )

  return (
    <PageTransition>
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={{ base: 20, md: 28 }}
        px={4}
      >
        <Container maxW="1200px">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 10, lg: 20 }}
            align="center"
          >
            <VStack
              spacing={6}
              align={{ base: 'center', lg: 'start' }}
              textAlign={{ base: 'center', lg: 'left' }}
              maxW="600px"
            >
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="shorter"
              >
                Divulgue eventos e seja recompensado
              </Heading>
              <Text fontSize="xl" opacity={0.9}>
                A plataforma que conecta organizadores de eventos com divulgadores profissionais.
                Crie, promova e gerencie seus eventos de forma eficiente.
              </Text>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                w={{ base: 'full', sm: 'auto' }}
              >
                <Button
                  as={RouterLink}
                  to="/register"
                  size="lg"
                  colorScheme="white"
                  variant="solid"
                  bg="white"
                  color="blue.600"
                  _hover={{ bg: 'gray.100' }}
                  width={{ base: 'full', sm: 'auto' }}
                >
                  Começar Agora
                </Button>
                <Button
                  as={RouterLink}
                  to="/como-funciona"
                  size="lg"
                  variant="outline"
                  borderWidth={2}
                  width={{ base: 'full', sm: 'auto' }}
                >
                  Como Funciona
                </Button>
              </Stack>
            </VStack>
            <Box flex="1" display={{ base: 'none', lg: 'block' }}>
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                alt="Eventos e Divulgação"
                borderRadius="2xl"
                shadow="2xl"
                w="full"
                h="auto"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} px={4}>
        <Container maxW="1200px">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center" maxW="800px">
              <Heading size="xl">Como o Divulgosim funciona</Heading>
              <Text fontSize="lg" color="gray.600">
                Uma plataforma completa para conectar organizadores e divulgadores,
                tornando a promoção de eventos mais eficiente e lucrativa.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              <FeatureCard
                icon={FaRocket}
                title="Crie Eventos"
                description="Cadastre seus eventos e defina tarefas específicas para divulgação"
              />
              <FeatureCard
                icon={FaUsers}
                title="Encontre Divulgadores"
                description="Conecte-se com divulgadores qualificados e experientes"
              />
              <FeatureCard
                icon={FaChartLine}
                title="Acompanhe Resultados"
                description="Monitore o desempenho das campanhas em tempo real"
              />
              <FeatureCard
                icon={FaMoneyBillWave}
                title="Receba Pagamentos"
                description="Sistema seguro de pagamentos e recompensas"
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20} px={4}>
        <Container maxW="1200px">
          <VStack spacing={20}>
            <BenefitSection
              title="Para Organizadores de Eventos"
              benefits={[
                'Acesso a uma rede de divulgadores qualificados',
                'Ferramentas completas de gestão de eventos',
                'Métricas detalhadas de desempenho',
                'Sistema automatizado de pagamentos',
                'Suporte dedicado 24/7'
              ]}
              image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
            />

            <BenefitSection
              title="Para Divulgadores"
              benefits={[
                'Encontre eventos alinhados com seu perfil',
                'Receba pagamentos de forma segura e rápida',
                'Construa sua reputação na plataforma',
                'Gerencie todas as suas tarefas em um só lugar',
                'Ganhe badges e benefícios exclusivos'
              ]}
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              isReversed
            />
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} px={4}>
        <Container maxW="800px">
          <VStack
            spacing={8}
            bg={useColorModeValue('white', 'gray.800')}
            p={12}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            textAlign="center"
          >
            <Badge
              colorScheme="blue"
              fontSize="md"
              px={4}
              py={2}
              borderRadius="full"
            >
              Comece Gratuitamente
            </Badge>
            <Heading size="xl">
              Pronto para revolucionar seus eventos?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Junte-se a milhares de organizadores e divulgadores que já estão
              transformando a maneira de promover eventos.
            </Text>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              w="full"
              maxW="md"
            >
              <Button
                as={RouterLink}
                to="/register"
                size="lg"
                colorScheme="blue"
                flex="1"
              >
                Criar Conta Grátis
              </Button>
              <Button
                as={RouterLink}
                to="/planos"
                size="lg"
                variant="outline"
                colorScheme="blue"
                flex="1"
              >
                Ver Planos
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default Home