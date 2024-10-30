import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
styles;

const Input = ({
  placeholder = 'Type something',
  keyboardTpye = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardTpye}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
