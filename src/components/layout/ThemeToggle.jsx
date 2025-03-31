import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="ghost"
      color={colorMode === 'light' ? 'gray.600' : 'yellow.300'}
      _hover={{
        bg: colorMode === 'light' ? 'gray.100' : 'whiteAlpha.200'
      }}
    />
  )
}

export default ThemeToggle