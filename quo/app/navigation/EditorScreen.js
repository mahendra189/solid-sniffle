import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// Sample data and columns
const sampleItems = [
    { Sr: 'Table', Particular: '2', Price: '$200' },
    { Sr: 'Chair', Particular: '4', Price: '$100' },
    { Sr: 'Lamp', Particular: '3', Price: '$30' },
];

const EditorScreen = ({ navigation, route }) => {
    const { columns } = route.params;
    const [tablecolumns, setTableColumns] = useState(columns || []);
    const [items, setItems] = useState(sampleItems);
    const [newRow, setNewRow] = useState({});

    const handleInputChange = (index, column, value) => {
        const updatedItems = [...items];
        updatedItems[index][column] = value;
        setItems(updatedItems);
    };

    const addRow = () => {
        const emptyRow = tablecolumns.reduce((acc, col) => ({ ...acc, [col]: '' }), {});
        setItems([...items, emptyRow]);
    };

    const tableHead = [...tablecolumns];
    const tableData = items.map((item, rowIndex) =>
        tablecolumns.map((col) => (
            <TextInput
                key={col}
                style={styles.input}
                value={item[col]}
                onChangeText={(text) => handleInputChange(rowIndex, col, text)}
            />
        ))
    );

    const generatePDF = async () => {
        try {
            const htmlContent = `
                <html>
                    <head>
                        <style>
                            table {
                                width: 100%;
                                border-collapse: collapse;
                            }
                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                            }
                            th {
                                background-color: #f1f8ff;
                            }
                            td {
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <h2>Bill/Quotation Template</h2>
                        <table>
                            <thead>
                                <tr>${tablecolumns.map(col => `<th>${col}</th>`).join('')}</tr>
                            </thead>
                            <tbody>
                                ${items.map(item => `
                                    <tr>${tablecolumns.map(col => `<td>${item[col] || '-'}</td>`).join('')}</tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </body>
                </html>
            `;

            const options = {
                html: htmlContent,
                fileName: 'template',
                directory: 'Documents',
            };

            const file = await RNHTMLtoPDF.convert(options);
            Alert.alert('PDF Created', `File saved to ${file.filePath}`);
        } catch (error) {
            Alert.alert('Error', 'Failed to create PDF');
        }
    };

    // Define column widths, adjust as needed
    const columnWidth = 100; // Width for each column
    const widthArr = tablecolumns.map(() => columnWidth);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create Bill/Quotation Template</Text>

            <Text style={styles.subHeader}>Preview</Text>
            <ScrollView horizontal={true}>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text} widthArr={widthArr} />
                    {tableData.map((row, index) => (
                        <Row
                            key={index}
                            data={row}
                            style={styles.row}
                            textStyle={styles.text}
                            widthArr={widthArr}
                        />
                    ))}
                </Table>
            </ScrollView>

            <Button title="Add Row" onPress={addRow} />
            <Button title="Save Template" onPress={() => navigation.goBack()} />
            <Button title="Export as PDF" onPress={generatePDF} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    tableBorder: {
        borderWidth: 2,
        borderColor: '#c8e1ff',
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    row: {
        height: 40,
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
});

export default EditorScreen;
