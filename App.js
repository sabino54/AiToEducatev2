import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import article1URL from './Data/article1.txt';
import article2URL from './Data/article2.txt';
import article3URL from './Data/article3.txt';
import article4URL from './Data/article4.txt';
import article5URL from './Data/article5.txt';
import article6URL from './Data/article6.txt';

const MultipleArticlesReader = () => {
  const [articles, setArticles] = useState([]);
  const files = [article1URL, article2URL, article3URL, article4URL, article5URL, article6URL]; // Array of file URLs

  useEffect(() => {
    Promise.all(files.map(fileURL => 
      fetch(fileURL)
        .then(response => response.text())
        .catch(error => console.error(`Error fetching ${fileURL}:`, error))
    ))
    .then(contents => setArticles(contents))
    .catch(error => console.error('Error with fetching articles:', error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Articles</Text>
        {articles.map((content, index) => (
          <View key={index} style={styles.articleContainer}>
            <Text style={styles.articleTitle}>Article {index + 1}</Text>
            <Text style={styles.articleContent}>{content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  articleContainer: {
    width: '70%', // Adjust the width as needed
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleContent: {
    fontSize: 16,
    color: '#333',
  },
});

export default MultipleArticlesReader;



