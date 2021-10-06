import React from 'react'
import { View, Text, Image} from 'react-native';
import glasses from "../assets/glasses.png"

const Mask = ({face}) => {

  const faces = {
    containerX: face && face[0]?.bounds?.origin?.x,
    containerY: face && face[0]?.bounds?.origin?.y,
    sizeWidth: face && face[0]?.bounds?.size?.width,
    sizeHeight: face && face[0]?.bounds?.size?.height,
    leftEyePosition: face && face[0]?.leftEyePosition,
    rightEyePosition:face && face[0]?.rightEyePosition,
    leftEarPosition: face && face[0]?.leftEarPosition,
    rightEarPosition: face && face[0]?.rightEarPosition,
    noseBasePosition: face && face[0]?.noseBasePosition,
}

console.log("faces", faces)

// const eyeWidth = faces.size ? faces.size/4 : 0
// console.log("eyeWidth ", eyeWidth)




// const translatedEyePositionX = (eyePosition) => {
//     if(eyePosition!==undefined){
//       return eyePosition.x - eyeWidth / 2 - faces.containerX
//     }
//     else {
//       return 0
//     }
// }
// const translatedEyePositionY = eyePosition => {
//    if(eyePosition!==undefined){
//       return eyePosition.y - eyeWidth / 2 - faces.containerY
//    }
//    else {
//      return 0
//    }
//   }

// const translatedLeftEyePosition = {
//     x: translatedEyePositionX( faces?.leftEyePosition ),
//     y: translatedEyePositionY( faces?.leftEyePosition)
// }

// console.log(translatedLeftEyePosition)


// const translatedRightEyePosition = {
//     x: translatedEyePositionX( faces?.rightEyePosition),
//     y: translatedEyePositionY( faces?.rightEyePosition)
// }
//   const eyeStyle = (eyePosition, eyeBorderWidth = eyeWidth / 6) => ({
//     position: 'absolute',
//     left: eyePosition?.x,
//     top: eyePosition?.y,
//     borderRadius: eyeWidth,
//     width: eyeWidth,
//     height: eyeWidth,
//     borderWidth: eyeBorderWidth,
//     borderColor: 'black',
//     backgroundColor:'yellow'
//   });

const glassesWidth = faces.sizeWidth+5
const glassesHeight = faces.sizeHeight / 3


const transformAngle = (
  angleRad = Math.atan(
    (faces.rightEarPosition.y - faces.leftEarPosition.y) /
    (faces.rightEarPosition.x - faces.leftEarPosition.x)
  )
) => angleRad * 180 / Math.PI

  return (

    <View style={(face && face[0]!==undefined)? {
      position: 'absolute',
      left: faces.noseBasePosition.y - glassesWidth * 1.73,
      top: faces.leftEarPosition.y
    }:null}>

      {(face && face[0]!==undefined) ?       <Image
          source={require("../assets/hair.png")}
          style={{
            width: glassesWidth,
            height: glassesHeight,
            resizeMode: 'contain',
            transform: [{ rotate: `${transformAngle()}deg`}]
          }}
        />:null}
 
    </View>
     
      /* {   (face && face[0]!==undefined) ?  <View style = {{...eyeStyle(translatedLeftEyePosition)}} /> : <Text>Not face</Text> }
      {   (face && face[0]!==undefined) ?  <View style = {{position:'absolute', left:translatedLeftEyePosition.x,     
    borderColor: 'black',
    backgroundColor:'yellow'}} /> : <Text>Not face</Text> }
      {   (face && face[0]!==undefined) ?  <View style = { {...eyeStyle(translatedRightEyePosition)}} /> : <Text>Not face</Text> } */
      
 

    
  );
};

export default Mask