import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { getAllWords } from '../services/restclient';
import ChatViesti from './ChatViesti'
import io from 'socket.io-client'

export default class ArvattavaSana extends React.Component {
    constructor() {
        super()
        this.state = {
            word: "",
            id: "",
            randomWord: "",
            allWords: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //hakee kaikki sanat tietokannasta
    componentDidMount = () => {
        // this.socket = io('http://192.168.1.5:3000/')
        
        getAllWords().then(allWords => {
            this.setState({ allWords });
        }).catch(err => {
            console.error("Caught an error", err);
            this.setState({ error: err.message })
        });
    }
//valitsee random sanan
    handleSubmit(event) {
        
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allWords.length)
        const randWord = this.state.allWords[randNum].word
        this.setState({ randomWord: randWord })
        
            
    }
//nappia painamalla esittää random sanan piirtäjää varten
    render() {
        return (
            <View style={styles.toptext} onSubmit={this.handleSubmit}>
                <Text>Click on the Button & Start to Draw {'\n'}</Text>
                <View>
                    <Button title="Press me" onPress={this.handleSubmit} />
                    <Text style={styles.word}>{this.state.randomWord}</Text>
                </View>
                <ChatViesti sana={this.state.randomWord}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toptext: {
        width: "60 %",
        textAlign: "center",
        left: "30 %",
        fontSize: 20,
        color: "black",
        letterSpacing: 1,
        textShadowRadius: 10,
        top: 0,
    },
    word: {
        width: "60 %",
        textAlign: "center",
        left: "30 %",
        fontSize: 20,
        textTransform: "uppercase",
        color: "black",
        letterSpacing: 1,
        textShadowRadius: 10,
        top: 0
    }
})