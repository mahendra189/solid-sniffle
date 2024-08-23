// screens/CreateTemplateScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import colors from '../constants/colors'; // Adjust the path as needed
import TableView from '../components/TableView';
import CButton from '../components/CButton';
import { GlobalContext } from '../context/GlobalContext';
const CreateTemplates = ({ navigation }) => {
    const {templates,setTemplates} = useContext(GlobalContext)
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [columns, setColumns] = useState([
        "Sr",
        "Particular",
        "Width",
        "Height",
        "Qnty",
        "Unit",
        "Rate",
        "Amount"
    ]);
    const [columnName, setColumnName] = useState('');

    const addColumn = () => {
        if (columnName) {
            setColumns([...columns, columnName]);
            setColumnName('');
        }
    };

    const saveTemplate = () => {
        let newTemplate = {
            'name':name,
            'des':des,
            'columns':columns
        }
        setTemplates((prev) => [...prev,newTemplate])
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.subLabel}>Template Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Template name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Template Description"
                value={des}
                onChangeText={setDes}
            />
            <Text style={styles.subLabel}>Create Column</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter column name"
                value={columnName}
                onChangeText={setColumnName}
            />
            <CButton color={colors.primary} title="Add Column" onPress={addColumn} />
            {columns.length > 0 && (
                <View style={styles.columnsList}>
                    <ScrollView horizontal={true}>

                        <TableView columns={columns} />
                    </ScrollView>
                </View>
            )}
            <View style={{
                flex:1
            }}>

            </View>
            <CButton title="Save Template" onPress={saveTemplate} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: colors.primary,
    },
    subLabel: {
        fontSize: 14,
        color: colors.secondary,
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: colors.primary,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    columnsList: {
        marginVertical: 20,
    },
    column: {
        fontSize: 18,
        color: colors.secondary,
    },
    separator: {
        height: 1,
        backgroundColor: colors.primary,
        marginVertical: 10,
        width: '100%',
    },
});

export default CreateTemplates;
