import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <StatusBar
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="dark-content"
                />
                <MainRoute />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({});
