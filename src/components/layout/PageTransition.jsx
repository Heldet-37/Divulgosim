import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula um tempo mínimo de carregamento para evitar flash
    const minLoadTime = 600
    const startTime = Date.now()

    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)

      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition