const styles = (theme) => {
  return {
    wrapper: {
      backgroundSize: "cover",
      minHeight: "91.8vh",
      backgroundImage:
        "url(https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg)",
    },

    form: {
      borderRight: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[3]
      }`,
      minHeight: "91.8vh",
      maxWidth: 550,
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: "100%",
      },
    },

    title: {
      color: theme.colors.yellow[6],
    },

    logo: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      width: 120,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
};
export default styles;
