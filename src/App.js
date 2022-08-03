import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import Button from '@mui/material/Button'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
})

export const App = () => {
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
                      The NightClub App is an application that provides users,
                      club owners, and DJs a one stop shop for all their club
                      needs. For users, they are able to view clubs within their
                      area and scope out which club they want to go to. Within
                      each club page, users can view information such as hours
                      of operation, special events, and more. In addition users
                      are also able to make song requests and also book tables
                      at a venue through this app. For Club Owners, they are
                      able to display information, edit menu, view bookings for
                      tables, and more. For DJs, they are able to view song
                      requests and special announcements submitted by the DJs.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">
                      <Link
                        href="https://docs.google.com/presentation/d/1E5ivBBBQgjOPdOdpv6vmwX99etDC1rkd07CZwgv86Bc/edit#slide=id.p"
                        underline="hover"
                      >
                        Link to Project Pitch Slides
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2} direction="row">
                      <Grid item xs={6}>
                        <Typography variant="p">
                          <Link
                            href="https://docs.google.com/presentation/d/12XVq_q52xl0T9NW6iVoT3P6xkG4hruHM2upbfdlWpnc/edit#slide=id.g13d1311500e_1_0"
                            underline="hover"
                          >
                            Link to S.A.T. 1 Slides
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="p">
                          <Link
                            href="https://youtu.be/DsVECrVilgQ"
                            underline="hover"
                          >
                            Link to S.A.T. 1 Youtube Video
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2} direction="row">
                      <Grid item xs={6}>
                        <Typography variant="p">
                          <Link
                            href="https://docs.google.com/presentation/d/10KdAcWubPYZgm0YjLw_ZSespxXUnrDUBN5pb8ZQvXsA/edit#slide=id.p"
                            underline="hover"
                          >
                            Link to S.A.T. 2 Slides
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="p">
                          <Link
                            href="https://youtu.be/D2wq_KtLq00"
                            underline="hover"
                          >
                            Link to S.A.T. 2 Youtube Video
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
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
                        <GitHubIcon /> Link to Application GitHub
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="row" alignItems="center">
                      <Link
                        href="https://github.com/qiuandyq/nightclub"
                        underline="hover"
                      >
                        <GitHubIcon /> Link to Website GitHub
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      href="/NightclubApp.apk"
                      // onClick={onDownload}
                      download
                      // disabled="true"
                    >
                      Download APK
                    </Button>
                    {/* <Typography variant="p" sx={{ paddingLeft: '1rem' }}>
                      APK currently unavailable
                    </Typography> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <img src="/map.png" alt="map" style={{ width: '350px' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
