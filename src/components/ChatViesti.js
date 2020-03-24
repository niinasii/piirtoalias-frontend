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
    this.socket = io('http://192.168.1.5:3000/')
    this.socket.on("chat message", msg  => {
        this.setState({chatMessages: [...this.state.chatMessages, msg]})
    })
}

submitChatMessage() {
this.socket.emit('chat message', this.state.chatMessage)
this.setState({ chatMessage: "" })
}

    render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
        return (
            <View>
                {chatMessages}
                <TextInput 
                style={{height: 40, width: 200, borderWidth: 1}}
                autoCorrect={false}
                value={this.state.chatMessage}
                onSubmitEditing={()=> this.submitChatMessage()}
                onChangeText={chatMessage => {
                    this.setState({chatMessage})
                }}/>
                <View style={[{ width: 60, margin: 10, backgroundColor: "red" }]}>
                <Button title="Send" style={{height: 40, width: 200}} onPress={()=> this.submitChatMessage()}/>
                </View>
                
            </View>
        )
    }
}
