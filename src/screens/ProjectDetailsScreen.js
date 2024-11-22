import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, ProgressBar } from 'react-native-paper';

const ProjectDetailsScreen = ({ route }) => {
  const { project } = route.params;
  const progress = project.raised / project.target;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium">{project.title}</Text>
          <Text variant="bodyLarge" style={styles.description}>
            {project.description}
          </Text>
          <Text variant="titleMedium" style={styles.fundingText}>
            Funding Progress
          </Text>
          <ProgressBar progress={progress} style={styles.progressBar} />
          <Text variant="bodyMedium" style={styles.fundingDetails}>
            ${project.raised} raised of ${project.target} goal
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => alert('Support feature coming soon!')}>
            Support This Project
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">About the Farm</Text>
          <Text variant="bodyMedium">
            This project aims to create sustainable farming practices while supporting local farmers.
            Your investment will help in purchasing equipment, seeds, and implementing modern
            agricultural techniques.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  description: {
    marginVertical: 16,
  },
  fundingText: {
    marginTop: 16,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  fundingDetails: {
    marginTop: 8,
    textAlign: 'right',
  },
});

export default ProjectDetailsScreen;
