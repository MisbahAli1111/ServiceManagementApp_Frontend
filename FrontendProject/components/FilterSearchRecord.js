import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FilterSearchRecord = ({onFilterSelect}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [sortOrder, setSortOrder] = useState('');



  const applyFilter = () => {
    // Here, you can handle the logic for applying the filter
    onFilterSelect(selectedAttributes, sortOrder);
    
  };

  return (
    <View style={styles.container}>
      
      
        <View style={styles.dropdown}>
        
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select Attributes:</Text>
            <View style={styles.radioButtonGroup}>
              <RadioButton.Item
                label="Date"
                value="date"
                status={selectedAttributes.includes('date') ? 'checked' : 'unchecked'}
                onPress={() => {
                  if (selectedAttributes.includes('date')) {
                    setSelectedAttributes(selectedAttributes.filter(attr => attr !== 'date'));
                  } else {
                    setSelectedAttributes([...selectedAttributes, 'date']);
                  }
                }}
                color={selectedAttributes.includes('date') ? Color.steelblue_100 : undefined}
              />
              <RadioButton.Item
                label="Employees"
                value="employee"
                status={selectedAttributes.includes('employee') ? 'checked' : 'unchecked'}
                onPress={() => {
                  if (selectedAttributes.includes('employee')) {
                    setSelectedAttributes(selectedAttributes.filter(attr => attr !== 'employee'));
                  } else {
                    setSelectedAttributes([...selectedAttributes, 'employee']);
                  }
                }}
                color={selectedAttributes.includes('employee') ? Color.steelblue_100 : undefined}
              />
              <RadioButton.Item
                label="Service"
                value="service"
                status={selectedAttributes.includes('service') ? 'checked' : 'unchecked'}
                onPress={() => {
                  if (selectedAttributes.includes('service')) {
                    setSelectedAttributes(selectedAttributes.filter(attr => attr !== 'service'));
                  } else {
                    setSelectedAttributes([...selectedAttributes, 'service']);
                  }
                }}
                color={selectedAttributes.includes('service') ? Color.steelblue_100 : undefined}
              />
              <RadioButton.Item
                label="Mileage"
                value="mileage"
                status={selectedAttributes.includes('mileage') ? 'checked' : 'unchecked'}
                onPress={() => {
                  if (selectedAttributes.includes('mileage')) {
                    setSelectedAttributes(selectedAttributes.filter(attr => attr !== 'mileage'));
                  } else {
                    setSelectedAttributes([...selectedAttributes, 'mileage']);
                  }
                }}
                color={selectedAttributes.includes('mileage') ? Color.steelblue_100 : undefined}
              />
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select Sort Order:</Text>
            <View style={styles.radioButtonGroup}>
              <RadioButton.Item
                label="Ascending"
                value="ascending"
                status={sortOrder === 'ascending' ? 'checked' : 'unchecked'}
                onPress={() => setSortOrder('ascending')}
                color={sortOrder === 'ascending' ? Color.steelblue_100 : undefined}
              />
              <RadioButton.Item
                label="Descending"
                value="descending"
                status={sortOrder === 'descending' ? 'checked' : 'unchecked'}
                onPress={() => setSortOrder('descending')}
                color={sortOrder === 'descending' ? Color.steelblue_100 : undefined}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
            <Text style={styles.applyButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  filterText: {
    top: -5,
    height: 20,
    left: 1,
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    fontWeight: "500",
  },
  dropdown: {
    width: 200,
    height: 436,
    position: 'absolute',
    top: 0,
    left: -235,
    backgroundColor: Color.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    zIndex:999
  },
  pickerContainer: {
    marginBottom: 8,
  },
  pickerLabel: {
    marginBottom: 2,
    fontWeight: 'bold',
  },
  radioButtonGroup: {
    flexDirection: 'column',
  },
  applyButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterSearchRecord;