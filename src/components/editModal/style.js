import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 4,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
