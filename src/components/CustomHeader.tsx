import {
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../common/colors';
import BackButton from './Buttons/BackButton';
import {fonts} from '../common/fonts';

interface StackAppBarProps {
    title: string;
    backButtonEnabled?: boolean;
    rightIcon?: React.ReactNode;
}

export default function CustomHeader({
    title,
    backButtonEnabled = false,
}: StackAppBarProps) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.bodyContainer}>
                {backButtonEnabled && <BackButton />}
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.bodyContainer}>
                <Image
                    source={require('../assets/icons/question.png')}
                    style={{height: wp(5), width: wp(5)}}
                    tintColor={colors.primary}
                />
                <Text style={styles.helpText}>Help</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: wp(4),
        paddingBottom: hp(1),
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight ?? 0,
    },
    bodyContainer: {
        flexDirection: 'row',
        gap: wp(2),
        alignItems: 'center',
    },
    headerText: {
        fontSize: wp(6),
        color: colors.darkGrey,
        fontFamily: fonts.bold,
        marginLeft: wp(2),
    },
    helpText: {
        fontSize: wp(4),
        color: colors.darkGrey,
        fontFamily: fonts.regular,
    },
});
