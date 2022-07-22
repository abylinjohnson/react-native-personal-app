// @ts-nocheck
import { Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Timeline from 'react-native-timeline-flatlist';

const TimetableCard = (props) => {
  const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]
  return (
    <Card style={{ padding: 5, marginTop: 10,height: 150,marginRight: 10, backgroundColor: 'rgb(34, 40, 49)' }} >
    <Card.Content>
      <View style={styles.top}>
        <AntDesign name={"clockcircle"} size={15} color={"grey"} />
        <Text style={styles.details}> {props.data.time} </Text>
        
      </View>
      <Text style={styles.subject}>{props.data.subject}</Text>
      <View style={styles.bottom}>
      <FontAwesome5 name={"door-open"} size={20} color={"grey"} />
        <Text style={styles.details}> {props.data.class}</Text>
        {/* <View
          style={{
            backgroundColor: "green",
            height: 15,
            width: 15,
            borderRadius: 10,
            padding: 2,
          }}
        ></View>
        <Text style={styles.details}> ONGOING CLASS</Text> */}
      </View>
    </Card.Content>
  </Card>
  );
};

const styles = StyleSheet.create({
  details: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 13,
    padding: 2,
    paddingTop: 4,
  },
  subject: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    padding: 2,
  },
  bottom: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
});

export default TimetableCard;


//Card to show timeline
