import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    FlatList,
    TextInput,
    Platform,
} from 'react-native';
import { errorMessages } from '../models/Errors/errorMessages';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import { grettingMessage } from '../utils/grettingMessage';
import { useAlert } from '../hooks/useAlert';

export const Home = () => {
    const [newSkill, setNewSkill] = useState<string>("");
    const [mySkills, setMySkills] = useState<string[]>([]);
    const [hasSkills, setHassSkills] = useState<boolean>(false);
    const [inputError, setInputError] = useState<boolean>(false);
    const [inputWarnning, setInputWarnning] = useState<boolean>(false);
    const [gretting, setGretting] = useState<string>("");
    const [newUser, setNewUser] = useState<boolean>(true);

    useEffect(() => {
        setGretting(grettingMessage());
    }, []);

    useEffect(() => {
        if (!newSkill && !newUser) setInputError(true);
        
        if (!newSkill) setInputWarnning(false);
        
        if (mySkills.includes(newSkill)) setInputWarnning(true);
        
        if (newSkill && newSkill.indexOf(" ") !== 0) setInputError(false);

        setNewUser(false);
    }, [newSkill]);

    function handleAddNewSkill() {
        if (!newSkill || newSkill.indexOf(" ") === 0) {
            useAlert({ 
                title: "Falha ao cadastrar sua skill!", 
                message: errorMessages.emptySkill 
            });
            setInputError(true);
            return;
        }

        if (mySkills.includes(newSkill)) {
            useAlert({ 
                title: "Falha ao cadastrar sua skill!", 
                message: errorMessages.invalidSkillValue 
            });
            setInputWarnning(true);
            return;
        }

        setInputError(false);
        setInputWarnning(false);
        setNewSkill("");

        setMySkills((oldState: string[]) => [...oldState, newSkill]);

        setHassSkills(true)
    }

    const handleRemoveAllSkills = useCallback(() => {
        setMySkills([]);
        setNewSkill("");
        setHassSkills(false);
        setInputError(false);
        setInputWarnning(false);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hey, Welcome Lucas !
            </Text>

            <Text style={styles.grettings}>
                {gretting}
            </Text>

            <TextInput
                style={
                    inputError ? styles.inputError :
                        inputWarnning ? styles.inputWarnning :
                            styles.input
                }
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={(value: string) => setNewSkill(value)}
                value={newSkill}
            /> 

            {
                (inputError || inputWarnning) && (
                    <Text
                        style={inputError
                            ? styles.labelError
                            : styles.labelWarnning}
                    >
                        {inputError ? errorMessages.emptySkill
                            : errorMessages.invalidSkillValue}
                    </Text>
                )
            }

            <Button type="ADD" disabled={false} onPress={handleAddNewSkill} />
            <Button type="REMOVE" disabled={!hasSkills} onPress={handleRemoveAllSkills} />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>
            {
                mySkills.length ? (
                    <FlatList
                        data={mySkills}
                        keyExtractor={item => item}
                        renderItem={({ item }) => <SkillCard skill={item} />}
                    />
                ) : (
                    <Text style={styles.textNotSkill}>
                        Cadastre uma skill para começar!
                    </Text>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121015",
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    textNotSkill: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "bold",
    },
    grettings: {
        color: "#FFF",
        marginTop: 5,
    },
    input: {
        backgroundColor: "#1f1e25",
        color: "#FFF",
        fontSize: 18,
        padding: Platform.OS === "ios" ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    inputError: {
        backgroundColor: "#1f1e25",
        color: "#FFF",
        fontSize: 18,
        padding: Platform.OS === "ios" ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "red",
    },
    inputWarnning: {
        backgroundColor: "#1f1e25",
        color: "#FFF",
        fontSize: 18,
        padding: Platform.OS === "ios" ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "orange",
    },
    labelError: {
        color: "red",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 5,
    },
    labelWarnning: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 5,
    }
});