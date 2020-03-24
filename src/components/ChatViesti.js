import React, { Component } from 'react'
import {Button, TextInput, Text, View } from 'react-native'
import io from 'socket.io-client'


export default class ChatViesti extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        };
    }

componentDidMount () {
    this.socket = io('http://192.168.1.5:3000/') //avataan socket-yhteys kun sivu komponentti on latautunut
    this.socket.on("chat message", msg  => {
        this.setState({chatMessages: [...this.state.chatMessages, msg]}) //lisätään lähetetty viesti chatMessages-arrayhyn
    })
}

submitChatMessage() {
this.socket.emit('chat message', this.state.chatMessage) //lähetetään chat-viesti
    if (this.state.chatMessage == this.props.sana) { //ennen viestin lisäämistä stateen tarkastetaan mätsääkö sana 
        alert('sanat mätsää!')                  //propsina tulleen arvotun piirrettävän sanan kanssa
    } else {
this.setState({ chatMessage: "" })
}
}
    render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>) //mäpätään chatMessages ja luodaan taulukon jokaisesta
        return (                                                                                                //itemistä <Text>- elementti
            <View>
                {chatMessages}
                <TextInput 
                style={{height: 40, width: 200, borderWidth: 1}}
                autoCorrect={false}
                value={this.state.chatMessage}
                onSubmitEditing={()=> this.submitChatMessage()} //voidaan lähettää viesti esim enteriä painamalla
                onChangeText={chatMessage => {
                    this.setState({chatMessage}); //muutetaan chatMessagen steittiä sitä mukaan, kun kirjoitetaan
                }}/>
                <View style={[{ width: 60, margin: 10, backgroundColor: "red" }]}>
                <Button title="Send" onPress={()=> this.submitChatMessage()}/> 
                </View> 
                
            </View>
        )
    }
}
