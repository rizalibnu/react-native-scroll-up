import React from 'react';
import { ScrollView, View } from 'react-native';
import ScrollUp from 'react-native-scroll-up'

class App extends React.Component {
  state = {
    visible: false,
  }

  handleOnScroll = (event) => {
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
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView
          ref={(scrollview) => {
            this.scrollview = scrollview;
          }}
          onScroll={event => this.handleOnScroll(event)}
        >
          <View
            style={{
              height: 1000,
              backgroundColor: '#fff',
            }}
          />
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

export default App;
