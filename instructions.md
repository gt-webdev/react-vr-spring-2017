# Instructions
These instructions are mostly based on the information here: https://facebook.github.io/react-vr/docs/getting-started.html

## 1. Install React VR
```bash
npm install -g react-vr-cli
```

## 2. Create the Initial Project
```bash
react-vr init WelcomeToVR
```

## 3. Copy the assets from /complete/static_assets to /WelcomeToVR/static_assets

## 4. Change the Panorama
```
<Pano source={asset('louvre.jpg')}/>
```

## 3. Create some interactive buttons
```
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
// ...
constructor(props) {
  super(props);
  this.state = {
    background: 'louvre.jpg',
    phone: 'louvrephone.png'
  }
}
// ...
<View>
  <Pano source={asset(this.state.background)}/>
  <View>
    <VrButton
      onClick={()=>this.setState({background: 'tropical.jpg'})}>
      <Text>Tropical</Text>
    </VrButton>
    <VrButton
      onClick={()=>this.setState({background: 'louvre.jpg'})}>
      <Text>Louvre</Text>
    </VrButton>
    <VrButton
      onClick={()=>this.setState({background: 'snow.jpg'})}>
      <Text>Snow</Text>
    </VrButton>
  </View>
</View>
```

## 4. Style the buttons
```
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
```

## Create a shape
```
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
// ...
<Box
  width={1}
  depth={0.1}
  height={0.5}
  style={{
    transform: [{translate: [-2.5, 0.5, -2]}, {rotateX: -10}],
  }}
/>
```

## Apply Textures and Box Interaction
```
constructor(props) {
  super(props);
  this.state = {
    background: 'louvre.jpg',
    phone: 'louvrephone.png'
  }
}
//...
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
```
