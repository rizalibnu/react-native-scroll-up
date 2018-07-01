// @flow
import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

type Props = {
  radius: boolean,
  icon: React.Element,
  text: string,
  root: React.Ref,
  borderRadius: number,
  backgroundColor: string,
  color: string,
  fontSize: number,
  width: number,
  height: number,
  right: number,
  bottom: number,
  refTo: string,
  type: string,
  customTextStyle: Object,
  customImageStyle: Object,
};

const scrollUpImage = 'data:image/png;base64,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';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ScrollUp extends React.Component<Props> {
  static defaultProps = {
    radius: true,
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    color: '#fff',
    fontSize: 12,
    icon: null,
    right: 60,
    bottom: 150,
    borderRadius: 50,
    text: 'Scroll Up',
    imageUri: scrollUpImage,
    customTextStyle: {},
    customImageStyle: {},
  };

  handleOnPress = () => {
    if (this.props.refTo === 'ListView' || this.props.refTo === 'ScrollView') {
      this.props.root.scrollTo({ x: 0, y: 0, animated: true });
    }
    if (this.props.refTo === 'FlatList') {
      this.props.root.scrollToOffset({ offset: 0, animated: true });
    }
    if (this.props.refTo === 'SectionList') {
      this.props.root.scrollToLocation({ itemIndex: 0, sectionIndex: 0 });
    }
  }

  render = () => (
    <TouchableOpacity
      onPress={() => this.handleOnPress()}
      style={[
        styles.wrapper,
        {
          width: this.props.width,
          height: this.props.height,
          right: this.props.right,
          bottom: this.props.bottom,
          backgroundColor: this.props.backgroundColor,
          borderRadius: this.props.radius ? this.props.borderRadius : 0,
        },
      ]}
    >
      {this.props.type === 'icon' && { ...this.props.icon }}
      {this.props.type === 'text' &&
        <Text
            style={[
              {
                textAlign: 'center',
                color: this.props.color,
                fontSize: this.props.fontSize,
              },
              this.props.customTextStyle,
            ]}
          >
            {this.props.text}
        </Text>}
      {this.props.type === 'image' &&
        <Image 
          style={[
            {
              width: this.props.width,
              height: this.props.height,
            },
            this.props.customImageStyle,
          ]} 
          source={{ uri: this.props.imageUri }}
        />}
    </TouchableOpacity>
  );
}
