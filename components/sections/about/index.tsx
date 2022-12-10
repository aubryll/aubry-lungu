import { CustomLink } from "@components/CustomLink";
import {
  Divider,
  styled,
  Typography,
  Grid,
  List,
  ListItem,
  useTheme,
  ListItemText,
  Box,
} from "@mui/material";
import { SectionItem } from "../SectionItem";
import type { BaseSectionProps } from "../type/BaseProps";

type AboutProps = BaseSectionProps;

const SkillList = styled(List)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, minmax(200px, 250px))",
    display: "grid",
    gridGap: "0 10px",
    padding: 0,
    margin: "20px 0 0 0",
    overflow: "hidden",
    listStyle: "none",
  },
}));

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React & React Native",
  "Java",
  "Kotlin",
  "C#",
  "UI/UX design",
  "SQL",
  "Data analysis",
];

export const About = (props: AboutProps) => {
  const theme = useTheme();
  return (
    <>
      <SectionItem item md={8} xs={12} {...props}>
        <Divider
          component="div"
          textAlign="left"
          role="presentation"
          variant="fullWidth"
        >
          <Typography variant="h4">About me</Typography>
        </Divider>
        <Typography variant="h6">
          Hello, my name is Aubry Lungu, and I like creating products that look
          and feel amazing. My interest was sparked in 2012, when I created a
          calculator in HTML and CSS. It wasn't much, but it lit a fire that
          began a career.
        </Typography>
        <Typography variant="h6" component="div">
          Today, I've had the privilege of working with amazing, talented people
          in the{" "}
          <CustomLink href="https://first-quantum.com/">mining</CustomLink>,{" "}
          <CustomLink href="https://www.orbis.org/">health</CustomLink>, and{" "}
          <CustomLink href="https://www.abbank.co.zm/">banking</CustomLink>{" "}
          sectors to create products that enhance people's lives and grow
          economies.
        </Typography>
        <Typography variant="h6">
          Here are some of the skills I've picked up during the course of my
          profession.
        </Typography>
        <SkillList>
          {skills.map((skill, idx) => (
            <ListItem disableGutters key={idx}>
              <Typography component="div" fontFamily={`"DM Mono", monospace`}>
                <Box
                  fontWeight="bold"
                  display="inline"
                  color={theme.palette.secondary.main}
                >
                  {`${++idx}. `}
                </Box>
                {skill}
              </Typography>
            </ListItem>
          ))}
        </SkillList>
      </SectionItem>
    </>
  );
};
