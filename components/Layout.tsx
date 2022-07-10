import { ListItem, Grid } from '@mui/material';
import Header from './Header';

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
      <>
        <Header />
        <Grid container spacing={2} sx={{ backgroundColor: "#FFFFFF" }}>
          <Grid item md={2} />
          <Grid item xs={12} md={8}>
            <ListItem>{children}</ListItem>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </>
    )
}

export default Layout;