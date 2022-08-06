import React from 'react';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from '@radix-ui/react-icons';

export default function Credits() {
  return (
    <div className='credits'>
      <div>Designed and coded by Wildson Seguchi</div>
      <div className='credits-social-media'>
        <a target='_blank' rel='noreferrer' href='https://github.com/wseguchi'>
          <GitHubLogoIcon />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/wildson-seguchi/'
        >
          <LinkedInLogoIcon />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://discordapp.com/users/733873632593576039'
        >
          <DiscordLogoIcon />
        </a>
      </div>
    </div>
  );
}
