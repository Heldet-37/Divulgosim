import { Link as RouterLink, useLocation } from 'react-router-dom'
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
  Divider,
  Badge,
  Collapse,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Simula um hook de autenticação
const useAuth = () => {
  // Aqui você implementaria a lógica real de autenticação
  const pathname = window.location.pathname
  return {
    isAuthenticated: pathname.includes('/dashboard'),
    userType: pathname.includes('/promoter') ? 'promoter' : 'organizer',
    user: {
      name: pathname.includes('/promoter') ? 'Ana Silva' : 'João Silva',
      avatar: pathname.includes('/promoter') 
        ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  }
}

function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()
  const { isAuthenticated, userType, user } = useAuth()
  
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const activeColor = useColorModeValue('blue.500', 'blue.300')
  const buttonHoverBg = useColorModeValue('gray.50', 'gray.700')

  const isActive = (path) => location.pathname === path

  const NavLink = ({ to, children }) => (
    <Link
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      position="relative"
      color={isActive(to) ? activeColor : textColor}
      fontWeight="500"
      transition="all 0.2s"
      _hover={{
        textDecoration: 'none',
        color: activeColor,
        bg: buttonHoverBg,
      }}
    >
      {children}
      {isActive(to) && (
        <Box
          position="absolute"
          bottom="-2px"
          left="0"
          right="0"
          height="2px"
          bg={activeColor}
          borderRadius="full"
        />
      )}
    </Link>
  )

  // Links de navegação baseados no tipo de usuário
  const getNavLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <NavLink to="/eventos">Eventos</NavLink>
          <NavLink to="/divulgadores">Divulgadores</NavLink>
          <NavLink to="/como-funciona">Como Funciona</NavLink>
        </>
      )
    }

    if (userType === 'promoter') {
      return (
        <>
          <NavLink to="/eventos">Explorar Eventos</NavLink>
          <NavLink to="/dashboard/promoter">Meus Eventos</NavLink>
          <NavLink to="/dashboard/promoter/tasks">Minhas Tarefas</NavLink>
        </>
      )
    }

    return (
      <>
        <NavLink to="/dashboard/organizer">Meus Eventos</NavLink>
        <NavLink to="/dashboard/organizer/promoters">Divulgadores</NavLink>
        <NavLink to="/dashboard/organizer/analytics">Análises</NavLink>
      </>
    )
  }

  return (
    <Box 
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      transition="all 0.2s"
      shadow="sm"
    >
      <Container maxW="1200px" px={4}>
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between"
        >
          <HStack spacing={8} alignItems="center">
            <Box>
              <RouterLink to={isAuthenticated ? `/dashboard/${userType}` : "/"}>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.500, blue.600)"
                  bgClip="text"
                  letterSpacing="tight"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, blue.700)",
                  }}
                  transition="all 0.2s"
                >
                  Divulgosim
                </Text>
              </RouterLink>
            </Box>
            <HStack
              as="nav"
              spacing={1}
              display={{ base: 'none', md: 'flex' }}
            >
              {getNavLinks()}
            </HStack>
          </HStack>

          <Flex alignItems="center" gap={4}>
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Abrir Menu"
              display={{ md: 'none' }}
              onClick={onToggle}
              variant="ghost"
              transition="all 0.3s"
              transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
            />
            
            {isAuthenticated ? (
              <HStack spacing={3}>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    rightIcon={<ChevronDownIcon />}
                  >
                    <HStack>
                      <Avatar
                        size="sm"
                        name={user.name}
                        src={user.avatar}
                      />
                      <Text display={{ base: 'none', md: 'block' }}>
                        {user.name}
                      </Text>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={RouterLink} to={`/dashboard/${userType}/profile`}>
                      Meu Perfil
                    </MenuItem>
                    <MenuItem as={RouterLink} to={`/dashboard/${userType}/settings`}>
                      Configurações
                    </MenuItem>
                    <Divider />
                    <MenuItem as={RouterLink} to="/login">
                      Sair
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            ) : (
              <HStack
                spacing={2}
                display={{ base: 'none', md: 'flex' }}
              >
                <Button
                  as={RouterLink}
                  to="/login"
                  variant="ghost"
                  colorScheme="blue"
                  size="md"
                  fontWeight="500"
                  px={6}
                  _hover={{
                    bg: buttonHoverBg,
                  }}
                >
                  Login
                </Button>
                <Button
                  as={RouterLink}
                  to="/register"
                  colorScheme="blue"
                  size="md"
                  fontWeight="500"
                  px={6}
                  _hover={{
                    transform: 'translateY(-1px)',
                    boxShadow: 'md',
                  }}
                  transition="all 0.2s"
                >
                  Começar Agora
                </Button>
              </HStack>
            )}
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MotionBox
            pb={4}
            display={{ md: 'none' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Stack as="nav" spacing={1}>
              {getNavLinks()}
              {!isAuthenticated && (
                <>
                  <Divider my={2} />
                  <NavLink to="/login">Login</NavLink>
                  <Button
                    as={RouterLink}
                    to="/register"
                    colorScheme="blue"
                    w="full"
                    size="md"
                    fontWeight="500"
                    mt={2}
                  >
                    Começar Agora
                  </Button>
                </>
              )}
            </Stack>
          </MotionBox>
        </Collapse>
      </Container>
    </Box>
  )
}

export default Navbar