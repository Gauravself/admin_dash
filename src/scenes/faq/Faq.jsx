import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ_LIST = [
  {
    id: "Q1",
    title: "An important Question",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
  {
    id: "Q2",
    title: "An important FAQ",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
  {
    id: "Q3",
    title: "An important Dashboard",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
  {
    id: "Q4",
    title: "What is pie chart",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
  {
    id: "Q5",
    title: "what is customer data",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
  {
    id: "Q6",
    title: "An important Question",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },

  {
    id: "Q7",
    title: "An important Question",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend vitae eros id laoreet. Etiam vehicula luctus fringilla. Nullam ut.",
  },
];

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions" />
      {FAQ_LIST.map((quesItems) => (
        <Accordion key={quesItems.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {quesItems.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{quesItems.summary}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
