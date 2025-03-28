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
} from '@chakra-ui/react'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

function OrganizerProfile() {
  const toast = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    company: 'Eventos Silva Ltda',
    bio: 'Organizador de eventos com mais de 10 anos de experiência em eventos corporativos e festivais.',
    website: 'www.eventossilva.com.br',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para salvar os dados
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
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    />
                    <VStack spacing={2} align="center">
                      <Heading size="md">{formData.name}</Heading>
                      <Badge colorScheme="blue">Organizador Premium</Badge>
                      <Text color="gray.600" fontSize="sm">
                        Membro desde Janeiro 2024
                      </Text>
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
                        <FormControl>
                          <FormLabel>Empresa</FormLabel>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            isReadOnly={!isEditing}
                          />
                        </FormControl>
                      </SimpleGrid>

                      <FormControl>
                        <FormLabel>Website</FormLabel>
                        <Input
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          isReadOnly={!isEditing}
                        />
                      </FormControl>

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
                    <Text color="gray.600">Total de Eventos</Text>
                    <Heading size="md">24</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Eventos Ativos</Text>
                    <Heading size="md">3</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Divulgadores</Text>
                    <Heading size="md">45</Heading>
                  </VStack>
                  <VStack align="start">
                    <Text color="gray.600">Avaliação Média</Text>
                    <Heading size="md">4.8</Heading>
                  </VStack>
                </SimpleGrid>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default OrganizerProfile