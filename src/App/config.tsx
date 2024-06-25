import { Config } from "types";
import { Email, GitHub, LinkedIn, Resume } from "icons";

export const config: Config = {
  name: {
    display: "Surya",
  },
  title: {
    display: "Aspiring Software Engineer",
  },
  buttons: [
    {
      name: "github",
      display: "GitHub",
      ariaLabel: "GitHub profile (opens in new window)",
      icon: <GitHub />,
      href: "https://github.com/nsuryaa/",
    },
    {
      name: "linked-in",
      display: "LinkedIn",
      ariaLabel: "LinkedIn profile (opens in new window)",
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/nsuryaa/",
    },
    {
      name: "resume",
      display: "Resume",
      ariaLabel: "Resume in Google Drive (opens in new window)",
      icon: <Resume />,
      href: "https://drive.google.com/file/d/1rRArzFEAR_-_-FDKmgn9snjjeTaZXIGT/view?usp=sharing",
    },
    {
      name: "email",
      display: "Email",
      ariaLabel: "Email contact (opens in new window)",
      icon: <Email />,
      href: "mailto:surya221211@gmail.com",
    },
  ],
};
