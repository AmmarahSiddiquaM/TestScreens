import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-ratings'
const { width, height } = Dimensions.get('screen');

const Feedback = () => {

    const Submit = async () => {
        const data = await fetch('http://freshnfetch.tk/api/v1/feedback/create', {
            method: 'POST',
            body: JSON.stringify(
                {
                    service_quality: service,
                    on_time_service: onTime,
                    engineer_support: engineer,
                    comment: input
                }),
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())

        if(data){
            alert('Submitted');
        }
    }

    const [service, setService] = useState(0);
    const [onTime, setOnTime] = useState(0);
    const [engineer, setEngineer] = useState(0);
    const [input, setInput] = useState(null);

    return (
        <View style={styles.container}>
            <Modal>
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold' }}>RATE YOUR EXPERIENCE</Text>
                            <Text>X</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ ...styles.row, marginVertical: 10 }}>
                                <Text>Service Quality</Text>
                                <Rating
                                    showRating={false}
                                    onFinishRating={(rating) => setService(rating)}
                                    imageSize={30}
                                />
                            </View>
                            <View style={{ ...styles.row, marginVertical: 10 }}>
                                <Text>On Time Service</Text>
                                <Rating
                                    showRating={false}
                                    onFinishRating={(rating) => setOnTime(rating)}
                                    imageSize={30}
                                />
                            </View>
                            <View style={{ ...styles.row, marginVertical: 10 }}>
                                <Text>Engineer Support</Text>
                                <Rating
                                    showRating={false}
                                    onFinishRating={(rating) => setEngineer(rating)}
                                    imageSize={30}
                                />
                            </View>
                            <TextInput style={styles.textInput} />
                            <TouchableOpacity onPress={Submit}>
                                <View style={styles.button}>
                                    <Text style={{ color: 'white' }} onChangeText={(text) => setInput(text)}>SUBMIT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        width: width - 40,
        padding: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 100,
        marginTop: 20
    },
    button: {
        backgroundColor: 'black',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 40,
        marginTop: 20
    }

})
