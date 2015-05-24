'use strict';
var React = require('react-native');

var CourseDetail = require('./CourseDetail');

var REQUEST_URL = 'http://localhost/course';

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
	},
	thumbnail: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius:10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    category: {
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

class CourseList extends Component{

	constructor(props) {
       super(props);
       this.state = {
       	   isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
       if(this.props.url!=undefined){
          REQUEST_URL = this.props.url;
       }
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
	                课程列表加载中...
	            </Text>
	        </View>
	    );
	}

	renderCourse(course) {
       return (
            <TouchableHighlight onPress={() => this.showCourseDetail(course)}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: course.middlePicture}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{course.title}</Text>
                            <Text style={styles.category}>{course.category}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   showCourseDetail(course) {
       this.props.navigator.push({
           title: course.title,
           component: CourseDetail,
           passProps: {course:course,url:"http://localhost/course/"+course.id}
       });
   }
}

module.exports = CourseList;