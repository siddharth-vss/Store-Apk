import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, TextInput, StyleSheet, CursorValue } from 'react-native';
import { Interface, Theme } from '../utils';

interface CustomSelects {
  options: Interface.User[],
  placeholder: string,
  selectedOption:any,
  setSelectedOption: any,
}
const CustomSelect: React.FC<CustomSelects> = ({ options, placeholder,selectedOption,setSelectedOption }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  const handleOptionPress = (option: any) => {
  // const handleOptionPress = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={selectedOption?.name}
          cursorColor={'#FFF'}
          placeholderTextColor="#ccc"
          editable={false} // Disable typing in input field
          style={styles.input}
        />
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleOptionPress(item)}>
                  <Text style={styles.optionText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    height: 50,
    backgroundColor: Theme.Theme.background,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    borderColor: Theme.Theme.contrast,
    borderWidth: 1,
  },
  input: {
    fontSize: 16,
    color: Theme.Theme.color,
    backgroundColor: Theme.Theme.background,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: Theme.COLORS[0],
  },
});

export default CustomSelect;
