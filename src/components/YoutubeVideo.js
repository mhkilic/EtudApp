import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const YouTubeVideo = ({ videoId }) => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    margin:20,
  },
  webview: {
    width: 375,
    height: 300,
    
  },
});

export default YouTubeVideo;