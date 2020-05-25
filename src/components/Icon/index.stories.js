import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Card from '../Card/Card.tsx';
import StoryHeading from '../StoryHeading/StoryHeading';
import Helper from '../Helper';
import Input from '../Input';
import Label from '../Label';
import Icon from '.';
import { theme } from '../../theme';

const icons = Object.keys(Icon.ICONS);
const sizes = Object.values(Icon.SIZES);

const IconsFilterer = () => {
  const [filter, setFilter] = React.useState('');

  const displayedIcons = icons.filter(icon =>
    icon.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleInputChange = e => setFilter(e.target.value);

  return (
    <div>
      <StoryHeading>Icons</StoryHeading>
      <Label htmlFor='icon-search'>Search</Label>
      <Input id='icon-search' onChange={handleInputChange} type='search' />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {displayedIcons.map(icon => (
          <div
            key={icon}
            style={{
              padding: theme.space.s,
              width: '25%',
              textAlign: 'center',
            }}
          >
            <Card size={Card.SIZES.S}>
              <Icon
                key={`f-iconSize--${icon}`}
                icon={icon}
                size={Icon.SIZES.L}
              />
              <Helper style={{ marginTop: theme.space.s }}>{icon}</Helper>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const stories = storiesOf('Icons', module);

stories.add('All', () => <IconsFilterer />);

stories.add('Playground', () => (
  <Icon
    icon={select('Icon', icons, Icon.ICONS.IconAlertOctagon)}
    size={select('Size', sizes, Icon.SIZES.M)}
  />
));
