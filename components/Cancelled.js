import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

const Cancelled = () => {
    const [response, setResponse] = useState([])
    useEffect(() => {

        (async () => {
            const data = await fetch('http://freshnfetch.tk/api/v1/survey/get-request')
                .then(res => res.json());
            setResponse(data);
            console.log(response);
        }
        )();
    }, [])

    return (
        <ScrollView>
            <View style={styles.header}>
                <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png'}} style={{height:30,width:30,tintColor:'white',marginLeft:10}}/>
                <Text style={styles.headerFont}>Cancelled request</Text>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>Request ID</Text>
                        <Text style={styles.text}>Location</Text>
                        <Text style={styles.text}>Date / Time</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text}>{response.request_id}</Text>
                        <Text style={styles.text}>{response.location}</Text>
                        <Text style={styles.text}>{response.time}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Cancelled By:</Text>
                    <Text style={styles.text}>Bandar (Admin)</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Cancellation reason:</Text>
                    <Text style={styles.text}>Out of service area</Text>
                </View>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>Engineer Name</Text>
                        <Text style={styles.text}>Mobile</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text}>Muhammad Basheer</Text>
                        <Text style={styles.text}>+966 123456789</Text>
                    </View>
                </View>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>Business Type</Text>
                        <Text style={styles.text}>Monthly Bill</Text>
                        <Text style={styles.text}>Roof Area</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text}>Company</Text>
                        <Text style={styles.text}>1500 SAR</Text>
                        <Text style={styles.text}>3500 sq:ft</Text>
                    </View>
                </View>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ ...styles.text, fontWeight: '700' }}>Revenue per month</Text>
                        <Text style={styles.text}>2486.8733 SAR</Text>
                        <Text style={{ ...styles.text, fontSize: 12 }}>Lorem ipsum is simply dummy</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 40 }}>
                        <Image source={{ uri: 'https://www.unmc.edu/phda/wp-content/plugins/ldd-directory-lite/public/images/noimage.png' }} style={{ height: 80, width: 80 }} />
                    </View>
                </View>
            </View>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ ...styles.text, fontWeight: '700' }}>Revenue per year</Text>
                        <Text style={styles.text}>4867.8733 SAR</Text>
                        <Text style={{ ...styles.text, fontSize: 12 }}>Lorem ipsum is simply dummy</Text>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 40 }}>
                        <Image source={{ uri: 'https://www.unmc.edu/phda/wp-content/plugins/ldd-directory-lite/public/images/noimage.png' }} style={{ height: 80, width: 80 }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Cancelled

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#707070',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerFont: {
        marginLeft: 80,
        color: 'white',
        fontSize: 25
    },
    container: {
        flex: 1
    },
    top: {
        backgroundColor: 'white',
        marginTop: 15,
        height: 120,
        marginHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    text: {
        fontSize: 16,
        color: '#707070',
        margin: 5
    }
})
