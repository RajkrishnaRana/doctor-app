import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../common/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../common/fonts';

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Image
                    source={require('../assets/images/doctor.jpg')}
                    style={styles.coverImg}
                />

                <Text style={styles.coverImgDesc}>
                    Start Your Journey by filling in basic details below
                </Text>

                <View style={styles.formGap} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: wp(3),
    },
    coverImg: {
        height: wp(45),
        width: wp(65),
        alignSelf: 'center',
        marginTop: hp(2),
        marginBottom: hp(1),
    },
    coverImgDesc: {
        fontFamily: fonts.bold,
        color: colors.primary,
        fontSize: wp(4.2),
        textAlign: 'center',
        width: wp(70),
        alignSelf: 'center',
    },
    formGap: {
        height: hp(2),
    },
});
