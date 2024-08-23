import { ScrollView, Text, View } from "react-native"
import { Button, Icon, SearchBar } from '@rneui/themed';
import { useState } from "react";
import colors from "../constants/colors";
const Templates = ({navigation}) => {
    const [value, setValue] = useState("")
    const [templates, setTemplates] = useState([])
    const createTemplate = () => {
        navigation.navigate('Create Templates')
    }
    console.log(templates)
    return (
        <View>

            <SearchBar
                platform="android"
                containerStyle={{
                    margin: 10,
                    borderRadius: 10
                }}
                inputContainerStyle={{}}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                onChangeText={newVal => setValue(newVal)}
                onClearText={() => console.log(onClearText())}
                placeholder="Type query here..."
                placeholderTextColor="#888"
                cancelButtonTitle="Cancel"
                cancelButtonProps={{}}
                // onCancel={() => console.log(onCancel())}
                value={value}
            />
            <Button
                buttonStyle={{
                    width: 150,
                    backgroundColor: colors.primary,
                }}
                containerStyle={{ marginHorizontal: 10 }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                }}
                disabledTitleStyle={{ color: "#00F" }}
                linearGradientProps={null}
                icon={<Icon name="add" size={15} color={colors.secondary} />}
                iconContainerStyle={{ background: colors.secondary }}
                loadingProps={{ animating: true }}
                loadingStyle={{}}
                onPress={createTemplate}
                title="Create"
                titleProps={{
                }}
                titleStyle={{
                    marginHorizontal: 5,
                    color: colors.secondary,

                }}
            />
            <ScrollView>

                {templates.map(() => (
                    <Item />
                ))}
            </ScrollView>
        </View>
    )
}
const Item = () => {
    return (
        <View
            style={{
                backgroundColor: colors.background,
                marginHorizontal: 10,
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
                Quotation
            </Text>
            <Text
                style={
                    {
                        fontSize: 12
                    }
                }
            >
                Description
            </Text>
        </View>
    )
}
export default Templates