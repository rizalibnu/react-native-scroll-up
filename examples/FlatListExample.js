import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScrollUp from 'react-native-scroll-up';

const data = Array.from(Array(20));

class FlatListExample extends React.Component {
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

  renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          height: 200,
          backgroundColor: 'purple',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}>
          flatlist item {index}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <React.Fragment>
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          ref={flatlist => {
            this.flatlist = flatlist;
          }}
          onScroll={event => this.handleOnScroll(event)}
        />
        <ScrollUp
          refView="FlatList"
          root={this.flatlist}
          visible={this.state.visible}
          type="image"
        />
      </React.Fragment>
    );
  }
}

export default FlatListExample;
