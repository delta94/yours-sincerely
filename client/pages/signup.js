import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AuthForm from '@containers/AuthForm';
import { Logo, Header, Link, Card } from '@components';

const styles = (theme) => ({
  page: {
    textAlign: 'center',
    '@media (min-width: 700px)': {
      textAlign: 'left',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.brand.background,
      padding: 0,
    },
  },
  container: {
    maxWidth: 700,
    margin: 'auto',
    '& a': {
      borderColor: 'transparent',
    },
  },
  card: {
    padding: theme.spacing(2),
    boxShadow: 'none',
    '@media (min-width: 700px)': {
      boxShadow: theme.brand.boxShadow,
      borderRadius: 8,
      padding: '40px 350px 40px 40px',
      backgroundImage: 'url("/static/assets/girl-typing.svg")',
      backgroundSize: '60%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '132% 60%',
    },
  },
  logoContainer: {
    '&:hover': {
      borderColor: 'transparent',
    },
    '& .logo': {
      width: 80,
      marginBottom: theme.spacing(1),
    },
  },
  header: {
    fontSize: '1.6rem',
    marginBottom: theme.spacing(2),
    '@media (min-width: 700px)': {
      marginBottom: theme.spacing(4),
    },
  },
  moreContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(2)}px`,
    '& a': {
      fontSize: '0.9rem',
      color: theme.palette.secondary.main,
    },
    '@media (min-width: 700px)': {
      padding: `${theme.spacing(2)}px 0`,
    },
  },
  moreRight: {
    '& a': {
      marginRight: theme.spacing(2),
    },
    '& a:last-child': {
      marginRight: 0,
    },
  },
});

function Signup(props) {
  const { classes } = props;
  return (
    <main className={classes.page}>
      <section className={classes.container}>
        <Card className={classes.card}>
          <Link href="/" className={classes.logoContainer}>
            <Logo />
          </Link>
          <Header className={classes.header}>Create your account</Header>
          <AuthForm />
        </Card>
        <div className={classes.moreContainer}>
          <Link href="/login">Log in instead</Link>
          <div className={classes.moreRight}>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withStyles(styles)(Signup);
