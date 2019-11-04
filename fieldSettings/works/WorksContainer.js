import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Works from './Works';
import { theme } from '../../theme';

const WorksContainer = ({ field }) => {
  const plant = useSelector(state => state[field].plant);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      horizontal
      pagingEnabled
    >
      <Works field={field} plant={plant} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
  },
});

export default WorksContainer;
