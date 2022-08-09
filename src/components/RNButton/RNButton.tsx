import {Pressable, Text} from 'react-native';
import React from 'react';

interface RNButtonProps {
  title?: string;
  onPress?: () => void;
}
const RNButton: React.FC<RNButtonProps> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default RNButton;
