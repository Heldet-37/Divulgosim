import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Avatar,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Textarea,
  useToast,
  Card,
  CardBody,
  Divider,
  HStack,
  Badge,
  Icon,
} from '@chakra-ui/react'
import { FaStar, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

function PromoterProfile() {
  const toast = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98765-4321',
    bio: 'Influenciadora digital especializada em eventos culturais e entretenimento. Experiência em marketing digital e gestão de comunidades.',
    instagram: '@anasilva',
    facebook: 'anasilva.oficial',
    twitter: '@anasilva',
    linkedin: 'anasilva',
    specialties: ['Música', 'Festivais', 'Cultura', 'Entretenimento']
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: 'Perfil atualizado',
      description: 'Suas informações foram salvas com sucesso.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setIsEditing(false)
  }

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            <HStack justify="space-between">
              <Heading size="lg">Meu Perfil</Heading>
              <Button
                colorScheme="blue"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancelar' : 'Editar Perfil'}
              </Button>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {/* Coluna da Esquerda - Informações Básicas */}
              <Card>
                <CardBody>
                  <VStack spacing={6} align="center">
                    <Avatar
                      size="2xl"
                      name={formData.name}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    />
                    <VStack spacing={2} align="center">
                      <Heading size="md">{formData.name}</Heading>
                      <Badge colorScheme="blue">Divulgador Premium</Badge>
                      <HStack>
                        <Icon as={FaStar} color="yellow.400" />
                        <Text fontWeight="bold">4.8</Text>
                        <Text color="gray.600">(124 avaliações)</Text>
                      </HStack>
                    </VStack>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      isDisabled={!isEditing}
                    >
                      Alterar Foto
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Coluna Central - Formulário */}
              <Card gridColumn={{ md: 'span 2' }}>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={6} align="stretch">
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <FormControl>
                          <FormLabel>Nome Completo</FormLabel>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>E-mail</FormLabel>
                          <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Telefone</FormLabel>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                      </SimpleGrid>

                      <FormControl>
                        <FormLabel>Biografia</FormLabel>
                        <Textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          isReadOnly={!isEditing}
                          rows={4}
                        />
                      </FormControl>

                      <Divider />

                      <Heading size="sm">Redes Sociais</Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        <FormControl>
                          <FormLabel>
                            <Icon as={FaInstagram} mr={2} />
                            Instagram
                          </FormLabel>
                          <Input
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>
                            <Icon as={FaFacebook} mr={2} />
                            Facebook
                          </FormLabel>
                          <Input
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>
                            <Icon as={FaTwitter} mr={2} />
                            Twitter
                          </FormLabel>
                          <Input
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>
                            <Icon as={FaLinkedin} mr={2} />
                            LinkedIn
                          </FormLabel>
                          <Input
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                      </SimpleGrid>

                      {isEditing && (
                        <Button type="submit" colorScheme="blue">
                          Salvar Alterações
                        </Button>
                      )}
                    </VStack>
                  </form>
                </CardBody>
              </Card>
            </SimpleGrid>

            {/* Estatísticas */}
            <Card>
              <CardBody>
                <Heading size="md" mb={6}>Estatísticas</Heading>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                  <VStack align="start">
                    <Text color="gray.600">Eventos Promovidos</Text>
                    <Heading size="md">32</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Tarefas Concluídas</Text>
                    <Heading size="md">156</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Total Ganho</Text>
                    <Heading size="md">R$ 4.850</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Taxa de Conclusão</Text>
                    <Heading size="md">95%</Heading>
                  </VStack>
                </SimpleGrid>
              </CardBody>
            </Card>

            {/* Especialidades */}
            <Card>
              <CardBody>
                <Heading size="md" mb={4}>Especialidades</Heading>
                <HStack spacing={2} wrap="wrap">
                  {formData.specialties.map((specialty, index) => (
                    <Badge
                      key={index}
                      colorScheme="blue"
                      fontSize="sm"
                      py={1}
                      px={3}
                      borderRadius="full"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </HStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default PromoterProfile