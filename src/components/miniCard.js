import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';

const MiniCard = (props) => {
  return(
    <TouchableOpacity onPress={() => { Linking.openURL( 'http://www.youtube.com/embed/' + props.videoId ) }}>
      <View style={styles.cardContainer}>
        <Image
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
                {props.title}
              </Text>
              <Text style={styles.subtitle}>{props.channel}</Text>
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default MiniCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 15,
  },
  image: {
    width: "45%",
    height: 100
  },
  content: {
    paddingLeft: 7
  },
  title: {
    fontSize: 17,
    width: Dimensions.get("screen").width/2,
    color: '#333',
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 12,
    color: '#555'
  }
});