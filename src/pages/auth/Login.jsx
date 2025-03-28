import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  useToast,
  Checkbox,
  Flex,
  Container,
} from '@chakra-ui/react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

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
    <Container maxW="container.sm" py={10}>
      <Box
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="xl"
        border="1px"
        borderColor="gray.100"
      >
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Login
            </Text>
            <Text color="gray.600">
              Acesse sua conta no Divulgosim
            </Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  size="lg"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  size="lg"
                  required
                />
              </FormControl>

              <Flex justify="space-between" w="100%" align="center">
                <Checkbox colorScheme="blue" size="sm">
                  Lembrar-me
                </Checkbox>
                <Link to="/forgot-password" style={{ color: '#3182CE', fontSize: '14px' }}>
                  Esqueceu a senha?
                </Link>
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

          <Box textAlign="center" pt={4}>
            <Text color="gray.600">
              Ainda não tem uma conta?{' '}
              <Link to="/register" style={{ color: '#3182CE', fontWeight: '600' }}>
                Cadastre-se
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* Login credentials help */}
      <Box mt={6} p={4} bg="blue.50" borderRadius="md">
        <Text fontSize="sm" color="blue.800">
          <strong>Dados para teste:</strong>
          <br />
          Divulgador: divulgador@gmail.com (senha: 1234)
          <br />
          Organizador: organizador@gmail.com (senha: 1234)
        </Text>
      </Box>
    </Container>
  )
}

export default Login