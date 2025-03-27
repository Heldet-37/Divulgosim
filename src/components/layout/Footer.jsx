import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={1}
      borderStyle="solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container as={Stack} maxW="1200px" py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, brand.600, brand.400)"
                bgClip="text"
              >
                Divulgosim
              </Text>
            </Box>
            <Text fontSize="sm">
              Conectando eventos e divulgadores
            </Text>
          </Stack>
          
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>Plataforma</Text>
            <Link as={RouterLink} to="/como-funciona">Como funciona</Link>
            <Link as={RouterLink} to="/eventos">Eventos</Link>
            <Link as={RouterLink} to="/divulgadores">Divulgadores</Link>
          </Stack>
          
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>Suporte</Text>
            <Link as={RouterLink} to="/central-de-ajuda">Central de Ajuda</Link>
            <Link as={RouterLink} to="/contato">Contato</Link>
            <Link as={RouterLink} to="/faq">FAQ</Link>
          </Stack>
          
          <Stack align="flex-start">
            <Text fontWeight="semibold" color="gray.600" mb={2}>Legal</Text>
            <Link as={RouterLink} to="/termos-de-uso">Termos de Uso</Link>
            <Link as={RouterLink} to="/privacidade">Privacidade</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      
      <Box py={4} borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Text pt={2} fontSize="sm" textAlign="center">
          © 2025 Divulgosim. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer