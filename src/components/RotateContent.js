import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

const RotateContent = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateLayout = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onLayout={() => setScreenWidth(Dimensions.get('window').width)}>
      {children}
    </View>
  );
};

export default RotateContent;