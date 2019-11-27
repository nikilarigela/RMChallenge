import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FlatList,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { Container, ItemSeparator, ListEmpty, Loading } from '../../components';
import { GET } from '../../utils';

const Posts = props => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    function fetchData() {
      GET('posts').then(data => {
        setPosts(data);
        setIsFetching(false);
      });
    }
    fetchData();
  }, [posts]);

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback
      onPress={() => props.navigation.navigate('Post', { id: item.id })}>
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <Container padder>
      {isFetching ? (
        <Loading />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          initialNumToRender={10}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={<ListEmpty />}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    margin: 2,
  },
});

export default Posts;
