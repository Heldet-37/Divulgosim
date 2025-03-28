import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Select,
  useToast,
  Divider,
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import PageTransition from '../../../components/layout/PageTransition'

function PromoterSettings() {
  const toast = useToast()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    currency: 'BRL',
    showEarnings: true,
    twoFactorAuth: false,
    autoAcceptTasks: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = () => {
    toast({
      title: 'Configurações salvas',
      description: 'Suas preferências foram atualizadas com sucesso.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            <Heading size="lg">Configurações</Heading>

            {/* Preferências Gerais */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Preferências Gerais</Heading>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl>
                      <FormLabel>Idioma</FormLabel>
                      <Select
                        name="language"
                        value={settings.language}
                        onChange={handleChange}
                      >
                        <option value="pt-BR">Português (Brasil)</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Fuso Horário</FormLabel>
                      <Select
                        name="timezone"
                        value={settings.timezone}
                        onChange={handleChange}
                      >
                        <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                        <option value="America/New_York">New York (GMT-4)</option>
                        <option value="Europe/London">London (GMT+1)</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Moeda</FormLabel>
                      <Select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                      >
                        <option value="BRL">Real (R$)</option>
                        <option value="USD">US Dollar ($)</option>
                        <option value="EUR">Euro (€)</option>
                      </Select>
                    </FormControl>
                  </SimpleGrid>
                </VStack>
              </CardBody>
            </Card>

            {/* Notificações */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Notificações</Heading>
                  
                  <FormControl display="flex" alignItems="center">
                    <Switch
                      id="email-notifications"
                      name="emailNotifications"
                      isChecked={settings.emailNotifications}
                      onChange={handleChange}
                      mr={3}
                    />
                    <FormLabel htmlFor="email-notifications" mb={0}>
                      Notificações por E-mail
                    </FormLabel>
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <Switch
                      id="push-notifications"
                      name="pushNotifications"
                      isChecked={settings.pushNotifications}
                      onChange={handleChange}
                      mr={3}
                    />
                    <FormLabel htmlFor="push-notifications" mb={0}>
                      Notificações Push
                    </FormLabel>
                  </FormControl>
                </VStack>
              </CardBody>
            </Card>

            {/* Privacidade */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Privacidade</Heading>

                  <FormControl display="flex" alignItems="center">
                    <Switch
                      id="show-earnings"
                      name="showEarnings"
                      isChecked={settings.showEarnings}
                      onChange={handleChange}
                      mr={3}
                    />
                    <Box>
                      <FormLabel htmlFor="show-earnings" mb={0}>
                        Mostrar Ganhos no Perfil
                      </FormLabel>
                      <Text fontSize="sm" color="gray.600">
                        Permite que outros usuários vejam seus ganhos totais
                      </Text>
                    </Box>
                  </FormControl>
                </VStack>
              </CardBody>
            </Card>

            {/* Segurança */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Segurança</Heading>

                  <FormControl display="flex" alignItems="center">
                    <Switch
                      id="two-factor-auth"
                      name="twoFactorAuth"
                      isChecked={settings.twoFactorAuth}
                      onChange={handleChange}
                      mr={3}
                    />
                    <Box>
                      <FormLabel htmlFor="two-factor-auth" mb={0}>
                        Autenticação em Dois Fatores
                      </FormLabel>
                      <Text fontSize="sm" color="gray.600">
                        Adicione uma camada extra de segurança à sua conta
                      </Text>
                    </Box>
                  </FormControl>

                  <Divider />

                  <VStack spacing={4} align="stretch">
                    <Heading size="sm">Alterar Senha</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <FormControl>
                        <FormLabel>Senha Atual</FormLabel>
                        <Input type="password" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Nova Senha</FormLabel>
                        <Input type="password" />
                      </FormControl>
                    </SimpleGrid>
                    <Button colorScheme="blue" size="sm" alignSelf="start">
                      Atualizar Senha
                    </Button>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Configurações de Tarefas */}
            <Card>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Configurações de Tarefas</Heading>

                  <FormControl display="flex" alignItems="center">
                    <Switch
                      id="auto-accept-tasks"
                      name="autoAcceptTasks"
                      isChecked={settings.autoAcceptTasks}
                      onChange={handleChange}
                      mr={3}
                    />
                    <Box>
                      <FormLabel htmlFor="auto-accept-tasks" mb={0}>
                        Aceitar Tarefas Automaticamente
                      </FormLabel>
                      <Text fontSize="sm" color="gray.600">
                        Aceita automaticamente tarefas de eventos que você já divulga
                      </Text>
                    </Box>
                  </FormControl>
                </VStack>
              </CardBody>
            </Card>

            <HStack justify="flex-end" spacing={4}>
              <Button variant="ghost">Cancelar</Button>
              <Button colorScheme="blue" onClick={handleSave}>
                Salvar Alterações
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  )
}

export default PromoterSettings