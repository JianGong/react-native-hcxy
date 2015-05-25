'use strict';

var React = require('react-native');
var About = require('./About');

var {
	StyleSheet,
    NavigatorIOS,
    Component
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class More extends Component{
	render(){
		return (
			<NavigatorIOS
			  style={styles.container}
			  initialRoute={{
			    title: '更多',
			    component: About
			}} />
		);
	}
}

module.exports = More;