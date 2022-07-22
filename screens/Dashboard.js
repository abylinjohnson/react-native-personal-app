// @ts-nocheck
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import TimetableCard from '../components/TimetableCard';
import { getClass } from "../utils/GetClass.js";
import { Ionicons } from '@expo/vector-icons'; 
import { Card, Title, Paragraph } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BusRoute from './BusRoute';

const Stack = new createStackNavigator();
function Dashboard({navigation}) {
  const [date, setDate] = useState(null);
  const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  const month = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
  const classdata = {subject: "Networks", time: "10:20", class: "201"}
  const today = new Date();
  useEffect(()=>{
    const today = new Date();
    let date = day[today.getDay()]+", "+month[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear();
    setDate(date); 
  },[])
const classes = getClass(today.getDay()-1);
    return (
      <>
      <View style={{padding: 10}}>
        <Text style={styles.greet}>Welcome, Abylin!</Text>
        <Text style={styles.timeline}>TODAY'S TIMELINE</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <View style={{paddingLeft: 10}} >
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {classes.map((e)=>(
        <TimetableCard data={e}/>
      ))}
      </ScrollView>
      </View>
      <View style={{ height: 1, backgroundColor: 'rgb(34, 40, 49)', marginTop: 20}} />
      <View style={{padding:20, flex:1 , paddingTop:50}}>
      <View style={{flexDirection: "row", alignItems:'center', justifyContent: 'space-evenly'}}>
        <View onStartShouldSetResponder={()=> navigation.navigate('settings')}>
        <Card style={{padding: 30, backgroundColor: 'rgb(34, 40, 49)'}}>
          <Card.Content>
            <View style={{alignItems: 'center', justifyContent: 'center'}}><Ionicons name="bus" size={45} color="grey" /></View>
            
            <Paragraph style={{alignItems: 'center', color:'white'}}>Bus Route</Paragraph>
          </Card.Content>
        </Card>
        </View>
        <View>
        <Card style={{padding: 30, backgroundColor: 'rgb(34, 40, 49)'}}>
          <Card.Content>
            <View style={{alignItems: 'center', justifyContent: 'center'}}><Ionicons name="calendar-outline" size={45} color="grey" /></View>
            
            <Paragraph style={{alignItems: 'center', color:"white"}}>Timetable</Paragraph>
          </Card.Content>
        </Card>
        </View>
        </View>
      </View>
           
      </>
    );
  }
  const styles =  StyleSheet.create({
    timeline: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 13,
        padding: 5
    },
    date: {
      color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5
    },
    greet:{
      color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 5
    },
    cardContainer: {
      height: 15
    }
})

export default Dashboard;
