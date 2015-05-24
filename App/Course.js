'use strict';

var React = require('react-native');
var CourseList = require('./CourseList');

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

class Course extends Component{
	render(){
		return (
			<NavigatorIOS
			  style={styles.container}
			  initialRoute={{
			    title: '课程列表',
			    component: CourseList
			}} />
		);
	}
}

module.exports = Course;