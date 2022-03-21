import { Container, FormControl, FormLabel, Input, FormHelperText, Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container mt={5}>
      <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' mb={5} />
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input id='password' type='password' mb={5} />
          <Button width='100%' colorScheme='blue' >Sign in</Button>
          <FormHelperText mt={10}>We'll never share your email.</FormHelperText>
        </FormControl>
    </Container>
    
  )
}
