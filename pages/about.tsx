import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from 'next/link'
import Copyright from '../src/Copyright'

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/" passHref>
          <MuiLink>Go to the main page</MuiLink>
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
