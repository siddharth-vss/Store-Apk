import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CSS, Theme } from '../utils';
import { Text } from 'react-native';

const PromptBox = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const Themes = Theme.Style();
    const Css = CSS.Styles();

    const showPrompt = () => {
        setModalVisible(true);
    };

    const handleConfirm = () => {
        console.log('User input:', inputValue);
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={showPrompt}>
                <Text style={Css.text_temp}>Confirm</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Enter your name:</Text>
                        <TextInput
                            style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
                            placeholder="Your name"
                            value={inputValue}
                            onChangeText={setInputValue}
                        />
                        <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }} onPress={handleConfirm}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default PromptBox