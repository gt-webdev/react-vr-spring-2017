import React from 'react';

import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
  Box
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'louvre.jpg',
      phone: 'louvrephone.png'
    }
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.background)}/>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: 5,
          alignItems: 'stretch',
          transform: [{translate: [-2.5, -2, -5]}],
        }}>
          <VrButton
            onClick={()=>this.setState({background: 'tropical.jpg'})}
            style={{flex: 1}}>
            <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: 'red'}}>Tropical</Text>
          </VrButton>
          <VrButton
            onClick={()=>this.setState({background: 'louvre.jpg'})}
            style={{flex: 1}}>
            <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: 'red'}}>Louvre</Text>
          </VrButton>
          <VrButton
            onClick={()=>this.setState({background: 'snow.jpg'})}
            style={{flex: 1}}>
            <Text style={{fontSize: 0.2, textAlign: 'center', margin: 0.1, height: 0.3, backgroundColor: 'red'}}>Snow</Text>
          </VrButton>
        </View>
        <Box
          width={1}
          depth={0.1}
          height={0.5}
          texture={asset(this.state.phone)}
          style={{
            transform: [{translate: [-2.5, 0.5, -2]}, {rotateX: -10}],
          }}
        />
        <VrButton
          onClick={()=>this.setState({phone: 'tropicalphone.png'})}
          style={{
            position: 'absolute',
            height: 0.03,
            width: 0.15,
            transform: [{translate: [-0.25, -0.15, -1.9]}, {rotateX: -10}]
          }}>
        </VrButton>
        <VrButton
          onClick={()=>this.setState({phone: 'louvrephone.png'})}
          style={{
            position: 'absolute',
            height: 0.03,
            width: 0.15,
            transform: [{translate: [-0.075, -0.15, -1.9]}, {rotateX: -10}]
          }}>
        </VrButton>
        <VrButton
          onClick={()=>this.setState({phone: 'snowphone.png'})}
          style={{
            position: 'absolute',
            height: 0.03,
            width: 0.15,
            transform: [{translate: [0.1, -0.15, -1.9]}, {rotateX: -10}]
          }}>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
