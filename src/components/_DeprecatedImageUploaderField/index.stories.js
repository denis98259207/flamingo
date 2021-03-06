import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ImageUploaderField from '.';

const stories = storiesOf('Form/ImageUploaderField', module);

stories.add('Playground', () => (
  <ImageUploaderField
    id='image-uploader-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    onChange={action('onChange')}
    valid={boolean('Valid', false)}
    invalid={boolean('Invalid', false)}
  />
));
