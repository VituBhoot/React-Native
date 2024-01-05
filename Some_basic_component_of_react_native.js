import { View, Text, Button, Pressable, Image, ImageBackground, ScrollView } from "react-native"
const logoImg=require("./assets/adaptive-icon.png")

export default function App(){
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <ScrollView>
      {/*<View style= {{ width: 200, height: 200, backgroundColor: "lightblue"}}></View>
    <View style= {{ width: 200, height: 200, backgroundColor: "lightgreen"}}></View>
  <Text><Text style={{ color: "white", fontSize: 30 }}>Hello World</Text> Welcome Bangladesh</Text>
  <Image source={logoImg} style={{ width: 100, height: 100 }}/>
  <Image source={{ uri: "https://picsum.photos/200"}} style={{ width: 100, height: 100 }}/> */}
  <ImageBackground source={logoImg} style={{ flex: 1 }}>
  <Image source={logoImg} style={{ width: 300, height: 300 }}/>
    
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero tellus, auctor vitae mi in, sagittis blandit velit. Ut nec tempor nulla. Etiam tellus nibh, blandit at rhoncus vel, venenatis quis dui. Donec eu metus bibendum est tincidunt elementum. In consectetur ac enim non sodales. Fusce vel porta est. Donec magna elit, feugiat eu imperdiet vitae, fringilla condimentum velit. Nullam vel eleifend ligula, sit amet luctus ante. Sed iaculis, risus et efficitur congue, nibh justo viverra arcu, eget facilisis purus lacus non odio.</Text>
    <Image source={logoImg} style={{ width: 300, height: 300 }}/>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero tellus, auctor vitae mi in, sagittis blandit velit. Ut nec tempor nulla. Etiam tellus nibh, blandit at rhoncus vel, venenatis quis dui. Donec eu metus bibendum est tincidunt elementum. In consectetur ac enim non sodales. Fusce vel porta est. Donec magna elit, feugiat eu imperdiet vitae, fringilla condimentum velit. Nullam vel eleifend ligula, sit amet luctus ante. Sed iaculis, risus et efficitur congue, nibh justo viverra arcu, eget facilisis purus lacus non odio.</Text>
    <Image source={logoImg} style={{ width: 300, height: 300 }}/>
  </ImageBackground>
  <Button title="Press" onPress={()=> console.log("Button pressed") }
  color="midnightblue"
  disabled
  />
  <Pressable onPress={()=> console.log("Image pressed")}><Image source={logoImg} style={{ width: 300, height: 300 }}/></Pressable>
    </ScrollView>

  </View>;
}
