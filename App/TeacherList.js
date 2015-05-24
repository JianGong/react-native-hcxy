'use strict';
var React = require('react-native');

//var BookDetail = require('./BookDetail');

var REQUEST_URL = 'http://localhost/teachers';

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
    author: {
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

class TeacherList extends Component{

	constructor(props) {
       super(props);
       this.state = {
       	   isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
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
            renderRow={this.renderTeacher.bind(this)}
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
	                教师列表加载中...
	            </Text>
	        </View>
	    );
	}

	renderTeacher(teacher) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: teacher.largeAvatar}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{teacher.truename}</Text>
                            <Text style={styles.author}>{teacher.about}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   // showTeacherCourse(teacher) {
   //     this.props.navigator.push({
   //         title: course.volumeInfo.title,
   //         component: TeacherCourse,
   //         passProps: {teacher}
   //     });
   // }
}

module.exports = TeacherList;