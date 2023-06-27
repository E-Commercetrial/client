// app/providers.tsx
'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider
        resetCSS
    
      >
        <Box
          bg={"white"}
        >
        <Navbar/>
        {children}
          <Footer />
          </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}