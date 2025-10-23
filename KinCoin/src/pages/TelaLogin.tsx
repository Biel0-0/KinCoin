import React from "react";
import { View, TextInput, Image, Button} from "react-native";
import { style } from "./StyleTelaLogin";

export default function TelaLogin (){
    return(
        <View style={style.container}>
            <TextInput style={style.input} placeholder="Insira o nome de usuário" ></TextInput>
            <TextInput style={style.input} placeholder="Insira o e-mail" ></TextInput>
            <TextInput style={style.input} placeholder="Insira a senha" ></TextInput>
            <TextInput style={style.input} placeholder="Insira a senha novamente" ></TextInput>








            <Button title="Avançar"></Button>
        </View>
    );
}