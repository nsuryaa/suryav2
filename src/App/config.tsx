import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Surya',
  },
  title: {
    display: 'Aspiring Software Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/nsuryaa/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/nsuryaa/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1VOVaIE8Otwkyb3fzPcsLH8EYtE2U1ra5/view?usp=drive_link',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:surya221211@gmail.com',
    },
  ],
};
