import React from 'react';
import {render} from '@testing-library/react-native';
import RNButton from './RNButton';

describe('Render Button UI', () => {
  it('Should render UI', () => {
    render(<RNButton />);
  });
  it('should have title', () => {
    render(<RNButton title="Press" />);
  });
});
