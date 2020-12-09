import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <NextLink href="/about" passHref>
          <MuiLink color="secondary">Go to the about page</MuiLink>
        </NextLink>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
