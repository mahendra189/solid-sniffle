import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Button, Icon, SearchBar } from '@rneui/themed';
import { useContext, useState } from "react";
import colors from "../constants/colors";
import data from "../constants/data";
import CButton from "../components/CButton";
import { GlobalContext } from "../context/GlobalContext";
const Templates = ({ navigation }) => {
    const [value, setValue] = useState("")
    const { templates, setTemplates } = useContext(GlobalContext);
    const createTemplate = () => {
        navigation.navigate('Create Templates')
    }
    return (
        <View style={styles.container}>

            <SearchBar
                platform="android"
                containerStyle={{
                    // marginT: 10,
                    borderRadius: 10
                }}
                inputContainerStyle={{}}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                onChangeText={newVal => setValue(newVal)}
                onClearText={() => console.log(onClearText())}
                placeholder="Search a template..."
                placeholderTextColor="#888"
                cancelButtonTitle="Cancel"
                cancelButtonProps={{}}
                // onCancel={() => console.log(onCancel())}
                value={value}
            />
            <CButton color={colors.primary} title="Create" onPress={createTemplate} />
            <ScrollView>
                {templates.map((item) => (
                    <Item key={item.id} name={item.name} des={item.des} navigation={navigation} to={'EditorScreen'} value={item.columns} />
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.background,
        padding: 10,
    }
})
const Item = ({ name, des, navigation, to, value }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(to, {'columns':value})}
            style={{
                backgroundColor: colors.background,
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                minHeight: 70
            }}>
            <Text
                style={
                    {
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                }
            >
                {name}
            </Text>
            <Text
                style={
                    {
                        fontSize: 12
                    }
                }
            >
                {des}
            </Text>
        </TouchableOpacity>
    )
}
export default Templates