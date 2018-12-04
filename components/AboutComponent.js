import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

const History = () => {
  return (
    <Card title={`Our History`}>
      <View>
        <Text style={{ alignContent: 'center' }}>
          Started in 2010, Ristorante con Fusion quickly established itself as a
          culinary icon par excellence in Hong Kong. With its unique brand of
          world fusion cuisine that can be found nowhere else, it enjoys
          patronage from the -list clientele in Hong Kong. Featuring four of the
          best three-star Michelin chefs in the world,ou never know what will
          arrive on your plate the next time you visit us.
        </Text>
        <Text>
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
      </View>
    </Card>
  );
};

const RenderLeadership = (props) => {
  const renderLeaderList = ({ item, index }) => {
    return (
      <ListItem
        roundAvatar
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        avatar={{ source: require('./images/alberto.png') }}
      />
    );
  };

  return (
    <Card title={`Corporate Leadership`}>
      <FlatList
        data={props.item}
        renderItem={renderLeaderList}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }

  static navigationOptions = {
    title: 'Contact'
  };
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <History />
        <RenderLeadership item={this.state.leaders} />
      </ScrollView>
    );
  }
}

export default About;
