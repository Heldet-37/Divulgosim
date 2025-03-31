import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  useToast,
  Checkbox,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  HStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  // Theme values
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white')
  const inputBg = useColorModeValue('white', 'gray.700')
  const helpBg = useColorModeValue('blue.50', 'blue.900')
  const helpColor = useColorModeValue('blue.800', 'blue.100')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      if (formData.email === 'divulgador@gmail.com' && formData.password === '1234') {
        toast({
          title: 'Login realizado com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('/dashboard/promoter')
      } else if (formData.email === 'organizador@gmail.com' && formData.password === '1234') {
        toast({
          title: 'Login realizado com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate('/dashboard/organizer')
      } else {
        toast({
          title: 'Erro no login',
          description: 'Email ou senha incorretos.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Flex
      minH={{ base: "calc(100vh - 64px)", md: "calc(100vh - 64px)" }}
      align="center"
      justify="center"
      bg={bgColor}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
    >
      <Container maxW="md" p={0}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          w="full"
        >
          <Box
            bg={cardBg}
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="xl"
            border="1px"
            borderColor={borderColor}
            w="full"
          >
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Heading
                  as="h1"
                  size={{ base: "lg", md: "xl" }}
                  mb={2}
                  color={headingColor}
                >
                  Bem-vindo de volta!
                </Heading>
                <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  Entre na sua conta para continuar
                </Text>
              </Box>

              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>E-mail</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail"
                      size="lg"
                      bg={inputBg}
                      required
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>Senha</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Digite sua senha"
                        bg={inputBg}
                        required
                      />
                      <InputRightElement>
                        <IconButton
                          variant="ghost"
                          onClick={() => setShowPassword(!showPassword)}
                          icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    justify="space-between"
                    align={{ base: "stretch", sm: "center" }}
                    w="100%"
                    gap={2}
                  >
                    <Checkbox colorScheme="blue" size="sm">
                      <Text color={textColor}>Lembrar-me</Text>
                    </Checkbox>
                    <RouterLink to="/forgot-password">
                      <Text color="blue.500" fontSize="sm" textAlign={{ base: "center", sm: "left" }}>
                        Esqueceu a senha?
                      </Text>
                    </RouterLink>
                  </Flex>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    width="100%"
                    isLoading={isLoading}
                    loadingText="Entrando..."
                  >
                    Entrar
                  </Button>
                </VStack>
              </form>

              <VStack spacing={4}>
                <HStack w="100%">
                  <Divider />
                  <Text fontSize="sm" color={textColor} whiteSpace="nowrap">
                    ou continue com
                  </Text>
                  <Divider />
                </HStack>

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  w="100%"
                >
                  <Button
                    w="100%"
                    variant="outline"
                    leftIcon={<FaGoogle />}
                    onClick={() => {}}
                    size={{ base: "md", md: "lg" }}
                  >
                    Google
                  </Button>
                  <Button
                    w="100%"
                    variant="outline"
                    leftIcon={<FaGithub />}
                    onClick={() => {}}
                    size={{ base: "md", md: "lg" }}
                  >
                    GitHub
                  </Button>
                </Stack>
              </VStack>

              <Box textAlign="center">
                <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  Ainda não tem uma conta?{' '}
                  <RouterLink to="/register">
                    <Text as="span" color="blue.500" fontWeight="600">
                      Cadastre-se
                    </Text>
                  </RouterLink>
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Login credentials help */}
          <Box mt={6} p={4} bg={helpBg} borderRadius="md">
            <Text fontSize="sm" color={helpColor}>
              <strong>Dados para teste:</strong>
              <br />
              Divulgador: divulgador@gmail.com (senha: 1234)
              <br />
              Organizador: organizador@gmail.com (senha: 1234)
            </Text>
          </Box>
        </MotionBox>
      </Container>
    </Flex>
  )
}

export default Login