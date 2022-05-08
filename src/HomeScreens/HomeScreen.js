import  React  from 'react';
import { Text, View, ScrollView, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import { Card, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeFloatButtons} from './HomeFloatButtons';
import styles from './styles';
import TopStatusBar from '../components/common/TopStatusBar';



const HomeScreen= (props) => {
  return (
      <SafeAreaView style={styles.safeContainer}>
          <TopStatusBar />
            <ScrollView style={styles.mainContainer} horizontal={false}>
               <View>
                    <Text style={styles.pip}>Job Pipeline</Text> 
               </View>
               <View style={{flexDirection:'row', alignItems:'center',alignSelf:'center',margin:10}}>
                 <View><Text style={styles.chartTxt}>Closed</Text><Text style={{textAlign:'center'}}>$2,500</Text></View>
                 <View><Image style={styles.chart}  source={require('../assets/images/chart.png')}/></View>
                 <View><Text style={styles.chartTxt}>Potential</Text><Text style={{textAlign:'center'}}>$10,000</Text></View>
               </View>
                <View>
                    <Text style={{fontSize: 20,fontWeight:'bold', textAlign:'center'}}>Today's Appointment</Text> 
                </View>
                <View style={styles.appoint}>
                    <View style={{flexDirection:'column', alignItems:'center', marginRight:10}}>
                      <Text style={styles. centerTxt}>To-do</Text>
                      <Text>6</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Text  style={styles. centerTxt}>Done</Text>
                      <Text>3</Text>
                    </View>    
                </View>
                <View style={styles.hrLine}></View>
                <View style={styles.homeTabs}>
                  <Card style={styles.btnCard}>
                    <Badge style={styles.bdg}>3</Badge>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Requests')}>
                      <Text style={{textAlign:'center',lineHeight:40}}>Requests</Text> 
                      <MaterialIcons style={{alignSelf:'center'}} name="request-page" size={40} color="#E06666" /> 
                    </TouchableOpacity>
                  </Card>
                  <Card style={styles.btnCard}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Estimator")}>
                      <Text style={{textAlign:'center',lineHeight:40}}>Estimator </Text>
                      <MaterialIcons style={{alignSelf:'center'}} name="calculate" size={40} color="#93C47D" />
                    </TouchableOpacity>
                  </Card>
                  <Card style={styles.btnCard}>
                    <TouchableOpacity  onPress={() =>props.navigation.navigate("Jobs")}>
                      <Text style={{textAlign:'center',lineHeight:40,}}>Jobs</Text>
                      <MaterialIcons style={{alignSelf:'center'}} name="work" size={40} color="#6FA8DC" />
                    </TouchableOpacity>
                  </Card>
                </View>
                <View style={styles.homeTabs}>
                  <Card style={styles.btnCard}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Invoices")}>
                      <Text style={{textAlign:'center',lineHeight:40}}>Invoices</Text>
                      <MaterialIcons style={{alignSelf:'center'}} name="file-copy" size={37} color="#686de0" />
                    </TouchableOpacity>
                  </Card>
                  <Card style={styles.btnCard}>
                    <TouchableOpacity  onPress={() => props.navigation.navigate("Workbook")}>
                      <Text style={{textAlign:'center',lineHeight:40}}>Workbook </Text>
                      <AntDesign style={{alignSelf:'center'}} name="appstore-o" color="#FFD966" size={37} />
                    </TouchableOpacity>
                  </Card>
                  <Card style={styles.btnCard}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Expenses")}>
                      <Text style={{textAlign:'center',lineHeight:40}}>Expenses</Text>
                      <Icon style={{alignSelf:'center'}} name="money" size={42} color="#37B8B4" />
                    </TouchableOpacity>
                  </Card>
                </View>
                <View style={styles.homeTabs}>
                    <Card style={styles.btnCard}>
                      <TouchableOpacity onPress={() => props.navigation.navigate("Task")}>
                        <Text style={{textAlign:'center',lineHeight:40}}>Tasks</Text>
                        <MaterialIcons style={{alignSelf:'center'}} name="list" size={40} color="#DB74DB" />
                      </TouchableOpacity>
                    </Card>
                    <Card style={styles.btnCard}>
                      <TouchableOpacity onPress={() =>  props.navigation.navigate("Note")}>
                        <Text style={{textAlign:'center',lineHeight:40}}>Notes </Text>
                        <MaterialIcons style={{alignSelf:'center'}} name="note-add" size={40} color="#FF9D47" />
                      </TouchableOpacity>
                    </Card>
                    <Card style={styles.btnCard}>
                      <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
                        <Text style={{textAlign:'center',lineHeight:40}}>Settings </Text>
                            <Icon style={{alignSelf:'center'}} name="gear" size={40} color="lightgreen" />
                      </TouchableOpacity>
                    </Card>
                </View>
                <View style={{marginBottom:50}}></View>
            </ScrollView>
            <HomeFloatButtons/>
        </SafeAreaView>
    );
}

export default HomeScreen;



