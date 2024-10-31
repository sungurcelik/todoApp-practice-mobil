import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Input from '../input';

const EditModal = ({visible, closeModal, willEditText, setWillEditText}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Güncelle</Text>
          <Input
            value={willEditText}
            onChangeText={text => setWillEditText(text)}
            placeholder="Güncellenecek texti yazın"
          />
          <TouchableOpacity onPress={closeModal}>
            <Text>Kapat</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Onayla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
