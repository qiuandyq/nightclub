import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
})

export const App = () => {
  const onDownload = () => {
    console.log('download')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ paddingTop: '10rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: '400', fontSize: '4rem' }}
                    >
                      NightClub App
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p" sx={{ fontWeight: '400' }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">
                      Team Members: Andy Qiu, Keenan Byun, Inderdeep Manan,
                      Seungjae Ma, Yufeng Luo
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="row" alignItems="center">
                      <Link
                        href="https://github.com/sma3134/Nightclub-App"
                        underline="hover"
                      >
                        <GitHubIcon /> Link to GitHub
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" onClick={onDownload}>
                      Download APK
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <img src="/homepage.png" alt="home" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
