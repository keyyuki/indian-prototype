import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

function gradientButton ({text}) {
    return <TouchableOpacity>
        <View >
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
}
