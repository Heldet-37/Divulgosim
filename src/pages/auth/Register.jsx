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
  Radio,
  RadioGroup,
  Stack,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
  HStack,
  Divider,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'promoter',
    acceptTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
  const radioBoxBg = useColorModeValue('white', 'gray.700')
  const radioBoxHoverBg = useColorModeValue('blue.50', 'gray.600')
  const radioBoxActiveBg = useColorModeValue('blue.50', 'blue.900')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Erro no cadastro',
        description: 'As senhas não coincidem.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (!formData.acceptTerms) {
      toast({
        title: 'Erro no cadastro',
        description: 'Você precisa aceitar os termos de uso.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Cadastro realizado com sucesso!',
        description: 'Você será redirecionado para o login.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate('/login')
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
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
      <Container maxW="lg" p={0}>
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
                  Criar Conta
                </Heading>
                <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>
                  Preencha os dados para se cadastrar
                </Text>
              </Box>

              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>Nome completo</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      size="lg"
                      bg={inputBg}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>E-mail</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail"
                      size="lg"
                      bg={inputBg}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>Senha</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Digite sua senha"
                        bg={inputBg}
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

                  <FormControl isRequired>
                    <FormLabel fontSize={{ base: "sm", md: "md" }} color={headingColor}>Confirmar senha</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirme sua senha"
                        bg={inputBg}
                      />
                      <InputRightElement>
                        <IconButton
                          variant="ghost"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <FormControl as="fieldset" isRequired>
                    <FormLabel as="legend" fontSize={{ base: "sm", md: "md" }} color={headingColor}>
                      Tipo de conta
                    </FormLabel>
                    <RadioGroup
                      value={formData.userType}
                      onChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}
                    >
                      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Box
                          as="label"
                          flex="1"
                          p={4}
                          borderWidth="1px"
                          borderRadius="lg"
                          cursor="pointer"
                          _hover={{ bg: radioBoxHoverBg }}
                          bg={formData.userType === 'promoter' ? radioBoxActiveBg : radioBoxBg}
                          borderColor={borderColor}
                        >
                          <Radio value="promoter" size="lg" colorScheme="blue">
                            <Box ml={3}>
                              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} color={headingColor}>
                                Divulgador
                              </Text>
                              <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
                                Quero divulgar eventos
                              </Text>
                            </Box>
                          </Radio>
                        </Box>

                        <Box
                          as="label"
                          flex="1"
                          p={4}
                          borderWidth="1px"
                          borderRadius="lg"
                          cursor="pointer"
                          _hover={{ bg: radioBoxHoverBg }}
                          bg={formData.userType === 'organizer' ? radioBoxActiveBg : radioBoxBg}
                          borderColor={borderColor}
                        >
                          <Radio value="organizer" size="lg" colorScheme="blue">
                            <Box ml={3}>
                              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} color={headingColor}>
                                Organizador
                              </Text>
                              <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
                                Quero criar eventos
                              </Text>
                            </Box>
                          </Radio>
                        </Box>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <Checkbox
                      name="acceptTerms"
                      isChecked={formData.acceptTerms}
                      onChange={handleChange}
                      colorScheme="blue"
                      size="lg"
                    >
                      <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>
                        Li e aceito os{' '}
                        <RouterLink to="/terms">
                          <Text as="span" color="blue.500">
                            Termos de Uso
                          </Text>
                        </RouterLink>
                        {' '}e a{' '}
                        <RouterLink to="/privacy">
                          <Text as="span" color="blue.500">
                            Política de Privacidade
                          </Text>
                        </RouterLink>
                      </Text>
                    </Checkbox>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    width="100%"
                    isLoading={isLoading}
                    loadingText="Criando conta..."
                  >
                    Criar conta
                  </Button>
                </VStack>
              </form>

              <VStack spacing={4}>
                <HStack w="100%">
                  <Divider />
                  <Text fontSize="sm" color={textColor} whiteSpace="nowrap">
                    ou cadastre-se com
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
                  Já tem uma conta?{' '}
                  <RouterLink to="/login">
                    <Text as="span" color="blue.500" fontWeight="600">
                      Faça login
                    </Text>
                  </RouterLink>
                </Text>
              </Box>
            </VStack>
          </Box>
        </MotionBox>
      </Container>
    </Flex>
  )
}

export default Register