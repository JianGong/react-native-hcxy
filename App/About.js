'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Image,
	Text,
	Component
} = React;

var styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	thumbnail: {
        width: 250,
        height: 100
    },
    info: {
    	fontSize: 20,
    	margin: 30
    }
});

class About extends Component {

	render(){
		return (
			<View style={styles.container}>
			      	<Image style={styles.thumbnail} source={{uri: 'http://www.hcxy.me/files/system/logo_1422622852.png'}}></Image>
			      	<Text style={styles.info}>花川学院 版权所有</Text>
				</View>
		);
	}
}

module.exports = About;