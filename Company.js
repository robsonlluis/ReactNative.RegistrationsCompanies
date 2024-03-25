import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const Company = ({ text, onDelete, onEdit }) => {
  return (
     <View style={styles.company}>
        <View style={styles.textWrapper}>
           <Text
              style={styles.text}
           >{text}</Text>
        </View>
        <TouchableOpacity onPress={onEdit}>
           <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>  </Text>
        <TouchableOpacity onPress={onDelete}>
           <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
  company: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     backgroundColor: "#f8f8f8",
     padding: 15,
     borderRadius: 10,
     margin: 10,
  },
  textWrapper: {
     flex: 1,
  },
  text: {
     fontSize: 18,
  },
  delete: {
     color: "red",
  },
  edit: {
    color: "orange",
 },
});

export default Company;