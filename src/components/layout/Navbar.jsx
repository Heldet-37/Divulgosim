import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Text,
  Container,
  Avatar,
  Divider
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'

function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box 
      bg={bgColor} 
      borderBottom="1px" 
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Container maxW="1200px" px={4}>
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between"
        >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onToggle}
            variant="ghost"
          />
          
          <HStack spacing={8} alignItems="center">
            <Box>
              <RouterLink to="/">
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.500, blue.600)"
                  bgClip="text"
                  letterSpacing="tight"
                >
                  Divulgosim
                </Text>
              </RouterLink>
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link 
                as={RouterLink} 
                to="/eventos"
                color={textColor}
                fontWeight="500"
                _hover={{ color: 'blue.500' }}
              >
                Eventos
              </Link>
              <Link 
                as={RouterLink} 
                to="/divulgadores"
                color={textColor}
                fontWeight="500"
                _hover={{ color: 'blue.500' }}
              >
                Divulgadores
              </Link>
              <Link 
                as={RouterLink} 
                to="/como-funciona"
                color={textColor}
                fontWeight="500"
                _hover={{ color: 'blue.500' }}
              >
                Como Funciona
              </Link>
            </HStack>
          </HStack>

          <Flex alignItems="center" gap={4}>
            <HStack
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link 
                as={RouterLink} 
                to="/login"
                color={textColor}
                fontWeight="500"
                _hover={{ color: 'blue.500' }}
              >
                Login
              </Link>
              <Button
                as={RouterLink}
                to="/register"
                colorScheme="blue"
                size="md"
                fontWeight="500"
                px={6}
                _hover={{
                  transform: 'translateY(-1px)',
                  boxShadow: 'sm',
                }}
              >
                Começar Agora
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Link 
                as={RouterLink} 
                to="/eventos"
                color={textColor}
                fontWeight="500"
                py={2}
                _hover={{ color: 'blue.500' }}
              >
                Eventos
              </Link>
              <Link 
                as={RouterLink} 
                to="/divulgadores"
                color={textColor}
                fontWeight="500"
                py={2}
                _hover={{ color: 'blue.500' }}
              >
                Divulgadores
              </Link>
              <Link 
                as={RouterLink} 
                to="/como-funciona"
                color={textColor}
                fontWeight="500"
                py={2}
                _hover={{ color: 'blue.500' }}
              >
                Como Funciona
              </Link>
              <Divider />
              <Link 
                as={RouterLink} 
                to="/login"
                color={textColor}
                fontWeight="500"
                py={2}
                _hover={{ color: 'blue.500' }}
              >
                Login
              </Link>
              <Button
                as={RouterLink}
                to="/register"
                colorScheme="blue"
                w="full"
                size="md"
                fontWeight="500"
              >
                Começar Agora
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Navbar