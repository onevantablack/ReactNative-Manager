import React from 'react';
import { Text, StyleSheet, View , Platform} from 'react-native';

const Header = (props) => {
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
    )}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    },
    viewStyle : {
        backgroundColor: '#F8F8F8',
        justifyContent : 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2},
                shadowOpacity: 0.2
            },
            android: {
              elevation: 10
            }
          })
    }
  });

export {Header};