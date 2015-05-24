/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Course = require('./App/Course');
var Teacher = require('./App/Teacher');

var {
    AppRegistry,
    TabBarIOS,
    Component
} = React;

class hcxy extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'course'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'course'}
                    icon={{uri:'featured'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'course'
                        });
                    }}>
                    <Course/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'teacher'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'teacher'
                        });
                    }}>
                    <Teacher/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('hcxy', () => hcxy);
