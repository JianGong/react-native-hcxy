'use strict';

var React = require('react-native');
var TeacherList = require('./TeacherList');

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

class Teacher extends Component{
	render(){
		return (
			<NavigatorIOS
			  style={styles.container}
			  initialRoute={{
			    title: '教师列表',
			    component: TeacherList
			}} />
		);
	}
}

module.exports = Teacher;