'use strict';
var React = require('react-native');
var CoursePlay = require('./CoursePlay');

var REQUEST_URL = '';

var {
	Image,
	StyleSheet,
	Text,
	View,
	Component,
	ListView,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        padding: 10
	},
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    summary: {
        color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});

class CourseDetail extends Component{

	constructor(props) {
       super(props);
       this.state = {
       	   isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
      REQUEST_URL = this.props.url;
    }

    componentDidMount() {
	    this.fetchData();
    }

    fetchData(){
    	fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
        })
        .done();
    }

	render(){
		if (this.state.isLoading) {
           return this.renderLoadingView();
        }
		return (
			<ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCourse.bind(this)}
            style={styles.listView}
            />
		);
	}

	renderLoadingView() {
	    return (
	        <View style={styles.loading}>
	            <ActivityIndicatorIOS
	                size='large'/>
	            <Text>
	                课程详细列表加载中...
	            </Text>
	        </View>
	    );
	}

	renderCourse(course) {
       return (
            <TouchableHighlight onPress={() => this.playCourse(course)}  underlayColor='#dddddd'>
                <View>
                  <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{course.title}</Text>
                        <Text style={styles.summary}>{course.summary}</Text>
                    </View>
                  </View>
                  <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   playCourse(course) {
       this.props.navigator.push({
           title: course.title,
           component: CoursePlay,
           passProps: {course:course,playUrl:course.mediaUrl}
       });
   }
}

module.exports = CourseDetail;