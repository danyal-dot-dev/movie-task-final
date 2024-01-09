import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    Group,
  } from "@mantine/core";
  import {useNavigate} from 'react-router-dom'
import styles from "./styles";
  const useStyles = createStyles((theme) => styles(theme));
  
  export default function ErrorPage(props) {
    const { classes } = useStyles();
    return (
      <Container className={classes.root}>
        <div className={classes.label}>Error</div>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          Unfortunately, An error occurred!
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md" onClick={() => window.location.assign('/')}>
            Take me back to home page
          </Button>
        </Group>
      </Container>
    );
  }