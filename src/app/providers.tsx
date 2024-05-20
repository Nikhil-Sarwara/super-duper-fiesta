// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider><ClerkProvider>{children}</ClerkProvider></ChakraProvider>
}