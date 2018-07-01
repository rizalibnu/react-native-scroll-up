// @flow
import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

type Props = {
  root: React.Ref,
  refView: string,
  visible: boolean,
  type: string,
  icon: React.Element,
  right: number,
  bottom: number,
  width: number,
  height: number,
  radius: boolean,
  borderRadius: number,
  backgroundColor: string,
  text: string,
  fontSize: number,
  color: string,
  customTextStyle: Object,
  image: Object,
  customImageStyle: Object,
};

const scrollUpImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC31BMVEVAQEDGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbExMTFxcXGxsa+vr7AwMDBwcG3t7e4uLi7u7u8vLyxsbGysrKzs7O1tbW2traqqqqrq6utra2urq6vr6+wsLCmpqanp6eoqKipqamenp6fn5+hoaGioqKkpKSZmZmampqcnJydnZ2RkZGWlpaXl5eNjY2Ojo6Pj4+QkJCJiYmKioqLi4uBgYGCgoKDg4OEhISFhYV6enp7e3t9fX1+fn5/f3+AgIB4eHh6enpxcXFycnJsbGxtbW1ubm5lZWVnZ2doaGheXl5fX19gYGBiYmJkZGRZWVlaWlpbW1tcXFxTU1NUVFRWVlZYWFhNTU1PT09QUFBSUlJISEhJSUlKSkpLS0tMTExNTU1DQ0NERERGRkZHR0dAQEBBQUFCQkJDQ0MxWTvgAAAA8XRSTlMAAAECAwQFBgcICQsMDQ4PEBMbHSAhIiMkKCkrLC0vMDEyMzQ3ODo7PD4/QEJDREdISUpLTE1OT1BRUlNVWV5fYGNkaWprb3BxcnN0dXZ3eHx9foOGiIqLjI2Oj5CSk5SVlpqcn6Gnqaqsra6vsLGys7W3ubq7vb6/wMLDxMXOz9HS09TW19na29zd3t/g4eLj5OXm5+jo6Onp6erq6urr6+vr6+zs7Ozs7O3t7e3u7u7u7u/v7+/w8PDx8fHx8vLy8/Pz8/P09PT09PT19fb29/f3+Pj4+fn5+fn6+vr6+/v7+/z8/Pz9/f39/f3+/v7+dDTB9QAABLFJREFUeAG92IubjGUYx/Hn3tmd2E3RAZEOQrKVrV1TLKWDqLRJJcpSDiW0lhrSpK2WHbNDxjb6sTmQlErYzorofNYhkQ4lxRZRT/kDMof32bH7Pu/zzOHp8w98r+e67vd+r+tmpMfdvviaEWW+yiCA6ofvKxtxda92btKkE2mWP7h8HpqaVzYov1lGIi2Kx86B3JwxPfPSjXQqnQuV6uEd04jkXHgP9Ezp4Uot4uo1A/p8HlcKkS5eJGdKx2QjrW5F0sKlLZOKeGYiFZWF+pG8UqRqWK5mpK0Pqbu3tVbk7NlIR1U3jchFNUhPqI8y0h9pC1+uiJQgE650jAxAZlzmEOmLDAlfLI10r0Gm1JwlibSdjcypOiExIhztg47abfX1O5dBaVquXaQUOpbs5YcdXAOlm2wiF0DHyl95TB2UCppEWs2Ehmd+55aXofLQsY0jt0HDkwd5gxehcnOjSCdoqPuXJ9oIhXDHIyIuL9TW8UbegMLkrMRIT6i9ypv4BAqFCZGcGVDaxG18CGfTXQ0RD5Te5ba2KsdYRLwpNtSVySLSCSrvc8v+f3jELm75Bo5OsyKlUPiUW7asi0U2rOeWr9XfSmQzzoWzz7nlA7zEo95LGLYdcBDIjUWK4ewLbnkbeF0M72vc8kMt5IpikbFwtI1b3gSwkUe9BWAtt+xaCqnR0UjzuXCynVs24cgI1h/gcb89DpmAOxLJh4PaH0VjAxpH8Lyo/LEcMmdGIoMht3CXaLyCphE8LVb/X6sgURKJlENq8R7RqINdBCv287hDz8LeeCLmDkFmxT4ed2AV7CNYsodb1sLWnGxiJ0Nm9d88rl40GiKi8ovqN9aGWG9ILK0XjZWQR/DYblFZAzseYiWQ2Mzjfn4CThEs2MnjvoSdAcRGQuIzHrN3ISQR4Tse871kfbGJkPiYR/20CMoIvnJ6yThi90NidXTfbl8AjQi28ogXYMdLrBIyT+04WP8RoBXB5j8P7ZFMVwWxAOSWLIJuBAsWQ8JPDGqqiELAZET4n14SMB7xE6s0HnmAmM94xEtsovHIOGIjjUeGEisxHrmCWG/jkSJi7YxH2hBzP2I4EswmxiYZjtxJxNh1hiMDI5F8w5HOkchRQaMRvzsSYWOMRkZRNNLTaKQwFskLGozMbhaLsOEGIzdSPHK6wUgHK8ImG4tMIBHxGIsUNESyfYYiU7MaIsxjKFJACRHX3UYik7ISI+yMsIHIo6eQFYkpNRAZQo0iLSszHqk4RkQs52c6Ej6XREQYluHIDWQTyZ2e0Yi3uV2EtfZDbYvehROzjifbCOsagoK4cr0DZ6GuJIkwTw1UavfxiOVwFC4maYT1hdKybznfvQ7OLiWHCLsKas/VQaEfOUZYvzDSFb6EFBHWJ4T0hHqTMsK6VSEds7qQRoSdOA2pm3QcaUVY7lCkKDwoh1QR4bwHkYqKc8gWs9fi+vlI1vzBeaQXEdqXIzl3nUQyTCqraDr0TSvIIinmwFVYDj1l3UVCPyKcOrQaKv4hHcgZU8ntMdqp4x9V2JxUmAZ312snBNFUcPzAzjmkgWnKbttjwC13TK2oqkagqmLq7cP6F7XJZoelH1HTivwHxrfn/g2Cw1IAAAAASUVORK5CYII=';

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
    visible: true,
    radius: true,
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    color: '#fff',
    fontSize: 12,
    icon: null,
    right: 30,
    bottom: 30,
    borderRadius: 50,
    text: 'Scroll Up',
    image: { uri: scrollUpImage },
    customTextStyle: {},
    customImageStyle: {},
  };

  handleOnPress = () => {
    if (this.props.refView === 'ListView' || this.props.refView === 'ScrollView') {
      this.props.root.scrollTo({ x: 0, y: 0, animated: true });
    }
    if (this.props.refView === 'FlatList') {
      this.props.root.scrollToOffset({ offset: 0, animated: true });
    }
    if (this.props.refView === 'SectionList') {
      this.props.root.scrollToLocation({ itemIndex: 0, sectionIndex: 0 });
    }
  }

  render() {
    if (!this.props.visible) return null;

    return (
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
            source={this.props.image}
          />}
      </TouchableOpacity>
    );
  }
}
