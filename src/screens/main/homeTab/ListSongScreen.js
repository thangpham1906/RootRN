import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {baseAPI} from '../../../config/baseApi';

export default function ListSongScreen() {
  const [loading, setLoading] = useState(false);
  const [listSong, setListSong] = useState([]);

  useEffect(() => {
    setLoading(true);
    baseAPI
      .get('/song/', {})
      .then(res => {
        setLoading(false);
        // set dữ liệu server trả về vào listSogn rồi hiển thị vào Flatlist
      })
      .catch(err => {
        setLoading(false);
        alert(err.problem);
      });
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text>LIST SONG</Text>
    </View>
  );
}
