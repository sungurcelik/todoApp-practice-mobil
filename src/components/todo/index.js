import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';
import EditModal from '../editModal';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);

  const deleteTodo = () => {
    Alert.alert(
      'Silme İşlemi',
      `${todo?.id} numaralı todo'yu silmek istediğinize emin misiniz?`,
      [
        {
          text: 'Vazgeç',
        },
        {
          text: 'Sil',
          onPress: () => {
            const filteredTodos = todos.filter(item => item.id !== todo.id);
            setTodos(filteredTodos);
          },
          style: 'destructive',
        },
      ],
    );
  };

  const changeComplated = () => {
    const tempArr = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArr.push(todos[i]);
      } else {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };
        tempArr.push(newTodo);
      }
    }
    setTodos(tempArr);
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo.completed && styles.completedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeComplated}>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircleo" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
      <EditModal
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </View>
  );
};

export default Todo;
