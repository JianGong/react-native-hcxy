/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Course = require('./App/Course');
var Teacher = require('./App/Teacher');
var More = require('./App/More');

var {
    AppRegistry,
    TabBarIOS,
    Component
} = React;

class hcxy extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={{uri:'featured'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Course/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Teacher/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'more'}
                    icon={{uri:'more'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'more'
                        });
                    }}>
                    <More/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('hcxy', () => hcxy);
