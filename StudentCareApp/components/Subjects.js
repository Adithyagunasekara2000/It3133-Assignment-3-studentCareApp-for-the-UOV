import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { subjects, marks, courses } from './StudentDb'; // Import the subjects, marks, and courses data

export default function SubjectDetailsPage({ route }) {
    const { user } = route.params || {}; // Provide a default value

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>User  not found. Please log in again.</Text>
            </View>
        );
    }

    // Filter subjects based on the user's course_id
    const userSubjects = subjects.filter(subject => subject.course_id === user.course_id);

    // Get marks for the user's subjects
    const userMarks = marks.filter(mark => mark.student_id === user.id);

    // Calculate total and average marks
    const totalMarks = userMarks.reduce((total, mark) => total + mark.marks, 0);
    const averageMarks = userMarks.length > 0 ? (totalMarks / userMarks.length).toFixed(2) : 0;

    // Find the course details for the user's course_id
    const userCourse = courses.find(course => course.id === user.course_id);

    return (
        <ScrollView>
            <View>
                <Image source={require('../assets/uovlogo.png')} style={styles.icon} />
            </View>
            <View style={styles.container}>
                {/* Display the course name */}
                <Text style={styles.courseName}>{userCourse ? userCourse.name : 'Course Not Found'}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Subjects: {userSubjects.length} | Average Marks: {averageMarks}</Text>
                </View>
                <Text style={styles.markInfoHeading}>Mark Information</Text>
                {userSubjects.length > 0 ? (
                    <View style={styles.table}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderText}>Subject</Text>
                            <Text style={styles.tableHeaderText}>Marks</Text>
                        </View>
                        <FlatList
                            data={userSubjects}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                const mark = userMarks.find(m => m.subject_id === item.id);
                                return (
                                    <View style={styles.tableRow}>
                                        <Text style={styles.tableCell}>{item.name}</Text>
                                        <Text style={styles.tableCell}>{mark ? mark.marks : 'N/A'}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                ) : (
                    <Text style={styles.noSubjects}>No subjects found for this user.</Text>
                )}
                <View style={styles.footer}>
                    <Text>UOV © 2024</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    icon: {
        alignItems: 'center',
        width: 200,
        height: 50,
        marginTop: 10,
        marginLeft: 80,
    },
    courseName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    footer: {
        marginTop: 200,
        backgroundColor: '#8B008B',
        marginLeft: 10,
        marginRight: 10,
        height: 20,
        alignItems: 'center',
    },
    infoContainer: {
        marginVertical: 8,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 18,
        textAlign: 'center',
    },
    markInfoHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
        textAlign: 'center',
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
    },
    noSubjects: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    error: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});