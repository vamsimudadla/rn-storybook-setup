import React from 'react';
import {Text} from 'react-native';

import {storiesOf, addDecorator} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text} from '@storybook/addon-knobs';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

// eslint-disable-next-line import/extensions
import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

addDecorator(withKnobs);
addDecorator(withBackgrounds);

storiesOf('Welcome', module)
  .addParameters({
    backgrounds: [
      {name: 'light', value: '#00004d'},
      {name: 'dark', value: '#000000', default: true},
    ],
  })
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add(
    'with text',
    () => (
      <Button onPress={action('clicked-text')}>
        <Text>{`Hello ${text('Name', 'John')}`}</Text>
      </Button>
    ),
    {
      notes: 'Button notes',
    },
  )
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
