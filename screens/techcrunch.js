// @ts-nocheck
import { StyleSheet, Text, View,ScrollView } from "react-native";
import axios from "axios";
import { Linking } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import React, { useState, useEffect } from "react";
//const [news, setNews] = useState();

function TechCrunch() {
  const [news, setNews] = useState({});
  useEffect(async () => {
    const url = `https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=d8e2778905e34165b2b3907b685ee365`;
    const response = await axios.get(url);
    console.log("#######");
    setNews(response.data.articles);
  }, 1);
  console.log();
  if (news.length > 0) {
    const data = news[0];
    // console.log(data);
    return (
      <View >
        <ScrollView>
        {news.map((data) => (
          <View style={{ padding: 15 }}>
            <Card
              onPress={() => {
                Linking.openURL(data.url);
              }}
            >
              <Card.Cover source={{ uri: data.urlToImage }} />
              <Card.Content />
              <Title style={{ padding: 10, fontWeight: "bold" }}>
                {data.title}
              </Title>
              <Paragraph style={{ padding: 10 }}>{data.description}</Paragraph>
              <Card.Content />
            </Card>
          </View>
        ))}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }
}

export default TechCrunch;
