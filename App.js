import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const FutsalScoreApp = () => {
  // State untuk skor
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Fungsi untuk menambah skor
  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) {
        Alert.alert('Tim A Menang!', 'Selamat kepada Tim A!');
      }
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) {
        Alert.alert('Tim B Menang!', 'Selamat kepada Tim B!');
      }
    }
  };

  // Fungsi untuk mengurangi skor
  const decreaseScore = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{teamAScore}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => increaseScore('A')} />
            <Button title="-" onPress={() => decreaseScore('A')} />
          </View>
        </View>
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{teamBScore}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => increaseScore('B')} />
            <Button title="-" onPress={() => decreaseScore('B')} />
          </View>
        </View>
      </View>
      <View style={styles.resetButton}>
        <Button title="Reset Pertandingan" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  team: {
    alignItems: 'center',
    width: '45%',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resetButton: {
    marginTop: 20,
    width: '100%',
  },
});

export default FutsalScoreApp;
