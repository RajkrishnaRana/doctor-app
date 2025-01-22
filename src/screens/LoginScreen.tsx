import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../common/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../common/fonts';
import {z} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import TextField from '../components/TextField';

// ZOD VALIDATION SCHEMA  ------------>
const loginSchema = z.object({
    phone_no: z
        .string()
        .length(10, 'Phone No. must be 10 digits')
        .regex(/^\d{10}$/, {message: 'Phone number must be numeric'}),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});
export type LoginDataType = z.infer<typeof loginSchema>;

export default function LoginScreen() {
    // LOCAL STATES -------------------------->

    // FORM STATES ----------------------------->
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginDataType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone_no: '8100365591',
            password: 'Pradip@123',
        },
    });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Image
                    source={require('../assets/images/doctor.jpg')}
                    style={styles.coverImg}
                />

                <Text style={styles.coverImgDesc}>Welcome Back Doctor !</Text>
                <Text style={styles.details}>Login to your account</Text>

                <View style={styles.formGap} />

                <Controller
                    control={control}
                    name="phone_no"
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextField
                            label="Phone No."
                            placeholder="Enter Phone Number"
                            value={value}
                            isNumeric={true}
                            onChangeText={onChange}
                            onBlur={onBlur} // Trigger validation onBlur
                            errorValue={errors.phone_no?.message}
                            isNecessary={true}
                        />
                    )}
                />
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
        fontSize: wp(5),
        textAlign: 'center',
    },
    details: {
        fontFamily: fonts.regular,
        color: colors.grey,
        fontSize: wp(4),
        textAlign: 'center',
    },
    formGap: {
        height: hp(2),
    },
});
