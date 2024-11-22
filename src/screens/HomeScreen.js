import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const farmProjects = [
    {
      id: 1,
      title: 'Sustainable Rice Farm',
      description: 'Help fund our sustainable rice farming project',
      target: 50000,
      raised: 30000,
    },
    {
      id: 2,
      title: 'Organic Vegetable Garden',
      description: 'Support local organic farming initiative',
      target: 25000,
      raised: 15000,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Featured Projects</Text>
      {farmProjects.map((project) => (
        <Card key={project.id} style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge">{project.title}</Text>
            <Text variant="bodyMedium">{project.description}</Text>
            <Text variant="bodyMedium">
              Raised: ${project.raised} / ${project.target}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('ProjectDetails', { project })}>
              View Details
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;
