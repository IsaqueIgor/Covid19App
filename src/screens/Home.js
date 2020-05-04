import React from 'react';
import {
  View,
  Text,
  Picker,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {Block, Button, TextView} from '../components';
import {Colors} from '../colors';
const W = Dimensions.get('window').width; //Pegar a largura do celular
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
    img: {
      width: '100%',
      height: 300,
    },
    doctor: {
      position: 'absolute',
      top: 100,
      left: 60,
  
      // width: 50,
      // height: 80,
    },
    wrapperimage: {
      position: 'absolute',
      bottom: 0,
  
      alignSelf: 'center',
      width: W,
      height: 300,
    },
    bg: {
      position: 'absolute',
      width: 1000,
      height: 1000,
      top: -(930 - W / 2),
      alignSelf: 'center',
      // top: 500 - W / 2,
      // left: 500 - W / 2,
      borderRadius: 1000,
      overflow: 'hidden',
    },
    containerHeader: {
      position: 'relative',
    },
    map: {
      borderRadius: 8,
      marginTop: 15,
      padding: 15,
    },
});

const ItemDot = ({color1, color2, num, title}) => {
    return (
      <Block block>
        <Block middle>
          <Block
            width={30}
            height={30}
            middle
            centered
            borderRadius={30}
            color={color1}>
            <Block
              width={20}
              height={20}
              borderWidth={4}
              borderRadius={20}
              borderColor={color2}
            />
          </Block>
          <TextView color={color2} h3>
            {num}
          </TextView>
          <TextView color="gray" h6>
            {title}
          </TextView>
        </Block>
      </Block>
    );
};

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
    <ScrollView style={{flex: 1}}>
        <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
            <Block style={styles.wrapperimage}>
            <Image
                style={styles.doctor}
                source={require('../../assets/Drcorona.png')}
            />
            </Block>
        </Block>

        <Block style={styles.containerHeader}>
            <Image style={styles.img} source={require('../../assets/virus.png')} />
        </Block>

        <Block>
            <Button
                color="#fff"
                borderWidth={1}
                borderColor="#f0f0f0"
                margin={10}
                borderRadius={30}>
            <Block direction="row" paddingHorizontal={15} middle>
                <Feather name="map-pin" size={16} color={Colors.blue1} />
                <Block block padding={10}>
                <TextView h6>Brasil</TextView>
                </Block>
                <Feather name="chevron-down" size={16} color={Colors.blue1} />
            </Block>
            </Button>
        </Block>

        <Block padding={10} style={{marginTop: 10}}>
            <Block justifyContent="space-between" direction="row">
                <Block>
                    <TextView h6>Casos Atualizados</TextView>
                    <TextView>Ultima Atualizacao 02 de Maio</TextView>
                </Block>
                <Button textColor={Colors.blue1}>Veja Detalhes</Button>
            </Block>

            <Block
            color="#fff"
            borderRadius={8}
            padding={10}
            shadow
            style={{marginTop: 10}}
            direction="row">
            <ItemDot
                color1={Colors.carot_op}
                color2={Colors.carot}
                num={101000}
                title={'Infectados'}
            />
            <ItemDot
                color1={Colors.red_op}
                color2={Colors.red}
                num={7025} //TODO: PUT DATA
                title={'Mortes'}
            />

            <ItemDot
                color1={Colors.green_op}
                color2={Colors.green}
                num={42991}
                title={'Recuperados'}
            />
            </Block>

            <Block style={{marginTop: 20}}>
                <Block direction="row" justifyContent="space-between">
                    <TextView h6>Mapa do Virus</TextView>
                    <Button
                    textColor={Colors.blue1}
                    onPress={() => navigation.navigate('Detail')}>
                    Ver Detalhes
                    </Button>
                </Block>
                <Block color={'#fff'} style={styles.map}>
                    <Image source={require('../../assets/map.png')} />
                </Block>
            </Block>
        </Block>

     </Block>

    </ScrollView>
    );
};
  
export default HomeScreen;