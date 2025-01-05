import React from 'react';
import { View, Text, StyleSheet, FlatList,Image,ScrollView } from 'react-native';
import { courses } from './StudentDb'; // Import the courses data

export default function CourseDetailsPage({ route }) {
    const { user } = route.params; // Get user from route params

    // Filter courses based on the user's course_id
    const userCourses = courses.filter(course => course.id === user.course_id);

    return (
      <ScrollView>
        <View>
                  <Image source={require('../assets/uovlogo.png')}
                  style={styles.icon}/>
                
        <View style={styles.container}>
           
            <Text style={styles.title}>Course Details</Text>
            {userCourses.length > 0 ? (
                <FlatList
                    data={userCourses}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.courseCard}>
                            <Text style={styles.courseName}>{item.name}</Text>
                            <Text style={styles.courseDescription}>{item.description}</Text>
                            <Text style={styles.courseDuration}>Duration: {item.duration}</Text>
                            <Text style={styles.courseCode}>Course Code: {item.course_code}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noCourses}>No courses found for this user.</Text>
            )}

             <View style={styles.footer}> <Text>UOV © 2024</Text></View>
        </View>  </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  icon:{
    alignItems:'center',
    width:200,
    height:50,
    marginTop:10,
    marginLeft:80

},
footer:{
  marginTop: 200, 
  backgroundColor:'#8B008B',
  marginLeft:10,
  marginRight:10,
  height:20, alignItems:'center'
},
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    courseCard: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    courseName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    courseDescription: {
        fontSize: 14,
        marginVertical: 4,
    },
    courseDuration: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    courseCode: {
        fontSize: 14,
        color: '#555',
    },
    noCourses: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
});