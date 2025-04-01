import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Box,
  useBreakpointValue,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  Select,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  Divider,
  HStack,
  Switch,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast,
  InputRightElement,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react'
import { 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaImage, 
  FaLink,
  FaPlus,
  FaTags,
  FaTicketAlt,
  FaClock,
  FaInfoCircle
} from 'react-icons/fa'

function EventForm({ onSubmit, onClose, initialData = null }) {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    shortDescription: initialData?.shortDescription || '',
    date: initialData?.date || '',
    time: initialData?.time || '',
    endDate: initialData?.endDate || '',
    endTime: initialData?.endTime || '',
    value: initialData?.value || '',
    location: initialData?.location || '',
    category: initialData?.category || '',
    capacity: initialData?.capacity || '',
    image: initialData?.image || '',
    website: initialData?.website || '',
    tags: initialData?.tags || [],
    isOnline: initialData?.isOnline || false,
    isFeatured: initialData?.isFeatured || false,
    ticketTypes: initialData?.ticketTypes || [
      { name: 'Regular', price: '', quantity: '' }
    ],
    minimumAge: initialData?.minimumAge || '',
    organizerInfo: initialData?.organizerInfo || '',
    cancellationPolicy: initialData?.cancellationPolicy || '',
  })

  const [newTag, setNewTag] = useState('')
  const [errors, setErrors] = useState({})

  const isMobile = useBreakpointValue({ base: true, md: false })
  const inputSize = useBreakpointValue({ base: "md", md: "lg" })
  const spacing = useBreakpointValue({ base: 4, md: 6 })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação básica
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Nome é obrigatório'
    if (!formData.description) newErrors.description = 'Descrição é obrigatória'
    if (!formData.date) newErrors.date = 'Data é obrigatória'
    if (!formData.time) newErrors.time = 'Horário é obrigatório'
    if (!formData.category) newErrors.category = 'Categoria é obrigatória'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast({
        title: 'Erro no formulário',
        description: 'Por favor, preencha todos os campos obrigatórios',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    onSubmit({
      ...formData,
      date: `${formData.date}T${formData.time}`,
      endDate: formData.endDate ? `${formData.endDate}T${formData.endTime}` : null,
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Limpa o erro do campo quando ele é modificado
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleNumberChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleAddTicketType = () => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: [...prev.ticketTypes, { name: '', price: '', quantity: '' }]
    }))
  }

  const handleRemoveTicketType = (index) => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: prev.ticketTypes.filter((_, i) => i !== index)
    }))
  }

  const handleTicketTypeChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: prev.ticketTypes.map((ticket, i) => 
        i === index ? { ...ticket, [field]: value } : ticket
      )
    }))
  }

  return (
    <Container maxW="100%" p={0}>
      <Box 
        as="form" 
        onSubmit={handleSubmit}
        width="100%"
        maxHeight={{ base: "75vh", md: "auto" }}
        overflowY={{ base: "auto", md: "visible" }}
        px={{ base: 2, md: 4 }}
        py={4}
        sx={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'blue.500',
            borderRadius: '24px',
          },
        }}
      >
        <VStack spacing={spacing} align="stretch">
          {/* Informações Básicas */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Informações Básicas
            </Text>
            <VStack spacing={spacing}>
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel>Nome do Evento</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Festival de Música 2025"
                  size={inputSize}
                />
                <FormHelperText>
                  Escolha um nome claro e atrativo
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Descrição Curta</FormLabel>
                <Input
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Uma breve descrição para listagens e cards"
                  size={inputSize}
                />
              </FormControl>

              <FormControl isRequired isInvalid={errors.description}>
                <FormLabel>Descrição Completa</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descreva os detalhes do seu evento..."
                  size={inputSize}
                  rows={4}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <InputGroup size={inputSize}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaTags} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Adicione tags relevantes"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleAddTag}>
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box mt={2}>
                  <HStack spacing={2} wrap="wrap">
                    {formData.tags.map((tag, index) => (
                      <Tag
                        key={index}
                        size="md"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="blue"
                      >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                      </Tag>
                    ))}
                  </HStack>
                </Box>
              </FormControl>
            </VStack>
          </Box>

          <Divider />

          {/* Data e Hora */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Data e Hora
            </Text>
            <VStack spacing={spacing}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
                <FormControl isRequired isInvalid={errors.date}>
                  <FormLabel>Data de Início</FormLabel>
                  <InputGroup size={inputSize}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaCalendar} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      pl="2.5rem"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired isInvalid={errors.time}>
                  <FormLabel>Horário de Início</FormLabel>
                  <InputGroup size={inputSize}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaClock} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      pl="2.5rem"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Data de Término</FormLabel>
                  <InputGroup size={inputSize}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaCalendar} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      min={formData.date || new Date().toISOString().split('T')[0]}
                      pl="2.5rem"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Horário de Término</FormLabel>
                  <InputGroup size={inputSize}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaClock} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      pl="2.5rem"
                    />
                  </InputGroup>
                </FormControl>
              </SimpleGrid>
            </VStack>
          </Box>

          <Divider />

          {/* Ingressos */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Ingressos
            </Text>
            <VStack spacing={spacing}>
              {formData.ticketTypes.map((ticket, index) => (
                <HStack key={index} width="100%" spacing={4} align="flex-end">
                  <FormControl>
                    <FormLabel>Tipo</FormLabel>
                    <Input
                      value={ticket.name}
                      onChange={(e) => handleTicketTypeChange(index, 'name', e.target.value)}
                      placeholder="Ex: VIP, Regular"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Preço</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FaMoneyBillWave} color="gray.400" />
                      </InputLeftElement>
                      <NumberInput
                        min={0}
                        value={ticket.price}
                        onChange={(value) => handleTicketTypeChange(index, 'price', value)}
                      >
                        <NumberInputField pl="2.5rem" />
                      </NumberInput>
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Quantidade</FormLabel>
                    <NumberInput
                      min={1}
                      value={ticket.quantity}
                      onChange={(value) => handleTicketTypeChange(index, 'quantity', value)}
                    >
                      <NumberInputField />
                    </NumberInput>
                  </FormControl>
                  {index > 0 && (
                    <IconButton
                      icon={<Icon as={FaPlus} transform="rotate(45deg)" />}
                      onClick={() => handleRemoveTicketType(index)}
                      colorScheme="red"
                      variant="ghost"
                    />
                  )}
                </HStack>
              ))}
              <Button
                leftIcon={<FaPlus />}
                onClick={handleAddTicketType}
                variant="outline"
                size="sm"
                alignSelf="start"
              >
                Adicionar Tipo de Ingresso
              </Button>
            </VStack>
          </Box>

          <Divider />

          {/* Local e Capacidade */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Local e Capacidade
            </Text>
            <VStack spacing={spacing}>
              <FormControl display="flex" alignItems="center" mb={4}>
                <Switch
                  id="is-online"
                  name="isOnline"
                  isChecked={formData.isOnline}
                  onChange={handleChange}
                  mr={3}
                />
                <FormLabel htmlFor="is-online" mb={0}>
                  Evento Online
                </FormLabel>
              </FormControl>

              <FormControl isRequired={!formData.isOnline}>
                <FormLabel>Local</FormLabel>
                <InputGroup size={inputSize}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaMapMarkerAlt} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={formData.isOnline ? "Link da transmissão" : "Endereço do evento"}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Capacidade Total</FormLabel>
                <InputGroup size={inputSize}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaUsers} color="gray.400" />
                  </InputLeftElement>
                  <NumberInput
                    min={1}
                    value={formData.capacity}
                    onChange={(value) => handleNumberChange('capacity', value)}
                    w="100%"
                  >
                    <NumberInputField
                      pl="2.5rem"
                      placeholder="Número de participantes"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
              </FormControl>
            </VStack>
          </Box>

          <Divider />

          {/* Detalhes Adicionais */}
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Detalhes Adicionais
            </Text>
            <VStack spacing={spacing}>
              <FormControl isRequired>
                <FormLabel>Categoria</FormLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Selecione a categoria do evento"
                  size={inputSize}
                >
                  <option value="music">Música</option>
                  <option value="business">Negócios</option>
                  <option value="technology">Tecnologia</option>
                  <option value="sports">Esportes</option>
                  <option value="education">Educação</option>
                  <option value="culture">Cultura</option>
                  <option value="food">Gastronomia</option>
                  <option value="other">Outro</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Website</FormLabel>
                <InputGroup size={inputSize}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaLink} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Site oficial do evento"
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Imagem do Evento</FormLabel>
                <InputGroup size={inputSize}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaImage} color="gray.400" />
                  </InputLeftElement>
                  <Input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="URL da imagem do evento"
                  />
                </InputGroup>
                <FormHelperText>
                  Adicione uma URL de imagem para ilustrar seu evento
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Idade Mínima</FormLabel>
                <NumberInput
                  min={0}
                  max={100}
                  value={formData.minimumAge}
                  onChange={(value) => handleNumberChange('minimumAge', value)}
                >
                  <NumberInputField placeholder="Idade mínima para participar" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Informações do Organizador</FormLabel>
                <Textarea
                  name="organizerInfo"
                  value={formData.organizerInfo}
                  onChange={handleChange}
                  placeholder="Informações sobre o organizador do evento"
                  size={inputSize}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Política de Cancelamento</FormLabel>
                <Textarea
                  name="cancellationPolicy"
                  value={formData.cancellationPolicy}
                  onChange={handleChange}
                  placeholder="Descreva a política de cancelamento e reembolso"
                  size={inputSize}
                />
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <Switch
                  id="is-featured"
                  name="isFeatured"
                  isChecked={formData.isFeatured}
                  onChange={handleChange}
                  mr={3}
                />
                <FormLabel htmlFor="is-featured" mb={0}>
                  Destacar Evento
                </FormLabel>
              </FormControl>
            </VStack>
          </Box>
        </VStack>

        {/* Botões de Ação */}
        <Box
          position="sticky"
          bottom={0}
          bg="white"
          pt={4}
          pb={2}
          mt={6}
          borderTop="1px"
          borderColor="gray.100"
        >
          <HStack spacing={4} width="100%">
            <Button
              onClick={onClose}
              size={inputSize}
              variant="ghost"
              flex="1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              size={inputSize}
              flex="1"
            >
              {initialData ? 'Salvar Alterações' : 'Criar Evento'}
            </Button>
          </HStack>
        </Box>
      </Box>
    </Container>
  )
}

export default EventForm