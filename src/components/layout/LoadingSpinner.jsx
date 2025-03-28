import { Box, Spinner, Center, Text, VStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const pulseAnimation = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
`

function LoadingSpinner() {
  return (
    <Center 
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(8px)"
      zIndex={9999}
    >
      <VStack spacing={6}>
        <Box
          position="relative"
          animation={`${pulseAnimation} 2s infinite`}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="80px"
            height="80px"
            borderRadius="full"
            bg="blue.100"
            opacity="0.3"
          />
          <Spinner
            thickness="4px"
            speed="0.8s"
            emptyColor="blue.100"
            color="blue.500"
            size="xl"
            width="60px"
            height="60px"
          />
        </Box>
        <VStack spacing={2}>
          <Text 
            color="gray.700" 
            fontSize="lg" 
            fontWeight="semibold"
            letterSpacing="tight"
          >
            Carregando
          </Text>
          <Text 
            color="gray.500" 
            fontSize="sm"
            fontWeight="medium"
          >
            Aguarde um momento...
          </Text>
        </VStack>
      </VStack>
    </Center>
  )
}

export default LoadingSpinner