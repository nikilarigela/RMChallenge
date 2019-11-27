import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, ItemSeparator, ListEmpty } from '../../components';
import { GET } from '../../utils';

const Post = props => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { params = {} } = props.navigation.state;

  useEffect(() => {
    function fetchPost() {
      GET(`posts/${params.id}`).then(data => setPost(data));
    }
    function fetchComments() {
      GET(`posts/${params.id}/comments`).then(data => setComments(data));
    }
    fetchPost();
    fetchComments();
  }, [params.id]);

  const listHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
        <Text style={styles.comment}>{item.body}</Text>
      </View>
    );
  };

  return (
    <Container padder>
      <FlatList
        ListHeaderComponent={listHeader}
        data={comments}
        renderItem={renderItem}
        initialNumToRender={10}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={<ListEmpty />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 4,
  },
  listHeader: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  body: {
    color: '#757575',
    fontSize: 16,
    padding: 4,
  },
  listItem: {
    paddingHorizontal: 4,
    paddingVertical: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  email: {
    color: '#757575',
    fontSize: 14,
    marginLeft: 2,
  },
  comment: {
    color: '#757575',
    fontSize: 14,
    padding: 4,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default Post;
