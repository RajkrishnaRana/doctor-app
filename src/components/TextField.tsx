import {
    StyleSheet,
    Text,
    TextInput,
    View,
    StyleProp,
    ViewStyle,
    Image,
    TouchableOpacity,
    TextStyle,
} from 'react-native';
import React, {useState} from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../common/colors';
import {fonts} from '../common/fonts';

interface TextFieldProps {
    customContainerStyle?: StyleProp<ViewStyle>;
    customLabelStyle?: StyleProp<TextStyle>;
    customStyle?: StyleProp<ViewStyle>;
    editable?: boolean;
    label?: string;
    placeholder: string;
    value: string | undefined;
    isPassword?: boolean;
    isNumeric?: boolean;
    isNecessary?: boolean;
    errorValue?: string;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
}

export default function TextField({
    customContainerStyle,
    customLabelStyle,
    customStyle,
    editable = true,
    label,
    placeholder,
    value,
    errorValue,
    isPassword = false,
    isNumeric = false,
    isNecessary = false,
    onChangeText,
    onBlur,
}: TextFieldProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={customContainerStyle}>
            <Text style={customLabelStyle || styles.label}>
                {label}
                {isNecessary && <Text style={{color: 'red'}}> *</Text>}
            </Text>
            <View
                style={[
                    styles.textInputContainer,
                    {
                        borderBottomColor: errorValue ? 'red' : colors.black,
                        opacity: editable ? 1 : 0.5,
                    },
                ]}>
                <TextInput
                    style={[
                        customStyle || styles.textInput,
                        {
                            borderBottomColor: isFocused
                                ? colors.primary
                                : colors.grey,
                            borderBottomWidth: isFocused ? 2 : 1,
                        },
                    ]}
                    value={value}
                    editable={editable}
                    placeholder={placeholder}
                    placeholderTextColor={colors.grey}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        onBlur && onBlur();
                    }}
                    secureTextEntry={isVisible}
                    keyboardType={isNumeric ? 'numeric' : 'default'}
                />

                {isPassword && (
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                            <Image
                                source={require('../assets/icons/eyeClose.png')}
                                style={styles.passIcon}
                            />
                        ) : (
                            <Image
                                source={require('../assets/icons/eyeOpen.png')}
                                style={[
                                    styles.passIcon,
                                    {tintColor: colors.black},
                                ]}
                            />
                        )}
                    </TouchableOpacity>
                )}
            </View>
            {errorValue && (
                <Text style={{color: 'red', fontSize: wp(3), marginTop: 5}}>
                    * {errorValue}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: wp(4.2),
        color: colors.black,
        fontFamily: fonts.semiBold,
        marginLeft: wp(2),
        marginBottom: hp(0.5),
    },
    textInputContainer: {
        // height: hp(6.5),
        // borderBottomWidth: 1,
        // borderRadius: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 2,
    },
    textInput: {
        flex: 1,
        color: colors.black,
        fontSize: wp(3.7),
        fontFamily: fonts.regular,
        alignItems: 'baseline',
    },
    passIcon: {
        width: wp(6),
        height: wp(6),
        tintColor: colors.grey,
    },
});
