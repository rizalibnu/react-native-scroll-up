import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import ScrollUp from 'react-native-scroll-up';

const data = Array.from(Array(20));

class ScrollViewExample extends React.Component {
  state = {
    visible: false,
  };

  handleOnScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 50) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView
          ref={scrollview => {
            this.scrollview = scrollview;
          }}
          onScroll={event => this.handleOnScroll(event)}>
          {data.map((item, index) => (
            <View
              style={{
                height: 200,
                backgroundColor: 'purple',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginTop: 100,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                scrollview component {index}
              </Text>
            </View>
          ))}
        </ScrollView>
        <ScrollUp
          refView="ScrollView"
          root={this.scrollview}
          visible={this.state.visible}
          type="image"
        />
      </React.Fragment>
    );
  }
}

export default ScrollViewExample;
