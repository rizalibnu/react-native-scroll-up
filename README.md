# react-native-scroll-up
A React Native component to add custom button for scrolling back to top

## Install

```npm
npm install react-native-scroll-up
```

or

```yarn
yarn add react-native-scroll-up
```

## Example
### Basic Example

```jsx
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
```

### Image Example
```jsx
import arrowUpImage from '../../assets/image.png';

<ScrollUp
  refView="ScrollView"
  root={this.scrollview}
  type="image"
  image={arrowUpImage}
/>
```

### Text Example
```jsx
<ScrollUp
  refView="ScrollView"
  root={this.scrollview}
  type="text"
  text="scroll to top"
  fontSize={14}
  color="#fff"
  backgroundColor="#dd0000"
/>
```

### Custom Icon Example
```jsx
import Icon from 'react-native-vector-icons/Feather';

<ScrollUp
  refView="ScrollView"
  root={this.scrollview}
  type="icon"
  icon={<Icon name="arrow-up" size={24} style={{ color: '#fff' }} />}
  backgroundColor="#dd0000"
/>
```


## Props

Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
root            | React.Ref | required |        | pass a ref of the root view
refView         | string  | required |          | type of your scrollable view. choose one of `ListView`, `ScrollView`, `FlatList`, `SectionList`
type            | string  | required |          | type of your button component. choose one of `image`, `text`, `icon`
icon            | React.Element | Yes | null    | custom icon button, if type is `icon`. you can use this to put custom component
right           | number | Yes      | 30        | distance from the right
bottom          | number | Yes      | 30     | distance from the bottom
width           | number | Yes      | 40        | width of the button and the image if you have
height          | number | Yes      | 40        | height of the button and the image if you have
radius          | boolean | Yes     | true      | is a round view
borderRadius    | number | Yes      | 50        | border radius of the button
backgroundColor | string | Yes      | 'transparent' | background color of the button，
text            | string | Yes      | Scroll Up | custom text button, if type is `text`
fontSize        | number | Yes      | 12        |	font size of the text button, if type is `text`
color           | string | Yes      | `#fff`    | color of the text button, if type is `text`
customTextStyle | Object | Yes      | {}        | custom stylesheet of the text button, if type is `text`
image           | Object | Yes      | { uri : a base64 image }  | source of your image button, if type is `image`
customImageStyle | string | Yes     | {}        | custom stylesheet of your image button, if type is `image`
