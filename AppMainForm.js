import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Company from "./Company";

const { width } = Dimensions.get("window");

const App = () => {
  // State to manage companies and user input
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState("");
  
  // This is to manage Modal State 
  const [isModalVisible, setModalVisible] = useState(false); 
  // This is to manage TextInput State 
  const [inputValue, setInputValue] = useState("");

  // Function to add a new company
  const addCompany = () => {
     if (company.trim() !== "") {
        setCompanies([...companies, company]);
        setCompany(""); // Clear the input
     }
  };

  // Function to delete a company by its index
  const deleteCompany = (index) => {
     const newCompanies = [...companies];
     newCompanies.splice(index, 1);
     setCompanies(newCompanies);
  };

  // Function to edit a company within an array by its index
  function editArrayCompany(index) {
     const nextCompanies = companies.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCompanies(nextCompanies);
  }

  // Function to delete a company by its index
  const editCompany = (index) => {
    // const newCompanies = [...companies];
    // newCompanies.splice(index, 1);
    // setCompanies(newCompanies);
        
    //editArrayCompany(index)

    toggleModalVisibility();
  };

  // Create toggleModalVisibility function that will 
  // Open and close modal upon button clicks. 
  const toggleModalVisibility = () => { 
    setModalVisible(!isModalVisible); 
  }; 

  return (
     <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
           <Text style={styles.headerText}>Companies</Text>
        </View>

        {/** This is our modal component containing textinput and a button */} 
        <Modal animationType="slide" 
                transparent visible={isModalVisible}  
                presentationStyle="overFullScreen" 
                onDismiss={toggleModalVisibility}> 
            <View style={styles.viewWrapper}> 
                <View style={styles.modalView}> 
                    <Text>Edit the company name</Text>    
                    <TextInput 
                      value={inputValue} 
                      style={styles.textInput}
                      placeholder="Sorry, but I didn't have time enough ..."
                      onChangeText={(value) => setInputValue(value)} />

                    {/** This button is responsible to close the modal */} 
                    <Button title="Close" onPress={toggleModalVisibility} /> 
                </View> 
            </View> 
        </Modal> 

        {/* Company Input */}
        <View style={styles.inputContainer}>
           <TextInput
              style={styles.input}
              placeholder="Add a company..."
              value={company}
              onChangeText={(text) => setCompany(text)}
           />
           <FontAwesome5
              name="plus"
              size={24}
              color="green"
              onPress={addCompany}
           />
        </View>

        {/* Company List */}
        <ScrollView style={styles.companies}>
           {companies.map((text, index) => (
              <Company
                 key={index}
                 text={text}
                 onDelete={() => deleteCompany(index)}
                 onEdit={() => editCompany(index, text)}
              />
           ))}
        </ScrollView>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 20,
     marginTop: 20,
  },
  header: {
     marginTop: 20,
     marginBottom: 20,
     alignItems: "center",
  },
  headerText: {
     fontSize: 36,
     fontWeight: "bold",
  },
  inputContainer: {
     flexDirection: "row",
     alignItems: "center",
  },
  input: {
     flex: 1,
     borderWidth: 1,
     borderColor: "#777",
     borderRadius: 10,
     padding: 10,
     margin: 10,
  },
  companies: {
     marginTop: 30,
  },
  buttonStyleContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
  },
  editButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    alignItems: 'center'
  },
  deleteButton: {
      marginLeft: 10,
      height: 40,
      width: 40,
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 10,
      fontSize: 12,
      elevation: 10,
      shadowOpacity: 10,
      shadowColor: '#ccc',
      alignItems: 'center'
  },
  screen: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#fff", 
}, 
viewWrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
}, 
modalView: { 
    alignItems: "center", 
    justifyContent: "center", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    elevation: 5, 
    transform: [{ translateX: -(width * 0.4) },  
                { translateY: -90 }], 
    height: 180, 
    width: width * 0.8, 
    backgroundColor: "#fff", 
    borderRadius: 7, 
}, 
textInput: { 
    width: "80%", 
    borderRadius: 5, 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderColor: "rgba(0, 0, 0, 0.2)", 
    borderWidth: 1, 
    marginBottom: 8, 
}, 
});

export default App;