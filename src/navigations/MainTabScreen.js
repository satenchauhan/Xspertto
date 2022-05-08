import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { DrawerMenuScreen } from "../DrawerScreens/DrawerMenuScreen";
import NewClient from "../HomeScreens/workbook/NewClient";
// import ClientScreenTabs from "./ClientScreenTabs";
// import Profile from "../DrawerScreens/Profile";
import AddRoomFrame from "../components/addRoom/AddRoomFrame";
import Quote from '../Client/quotes/Quote';
import { 
    CompanyNavigator,
    AboutNavigator,
    DocumentsNavigator,
    ItemsNavigator,
    RatesNavigator 
} from "./SidebarMenu";
import { 
    AddRoomHeaderStyle,
    NavHeadStyle,
    StackHeadClientStyle,
    StackHeadNewClient,
    QuoteHeadStyle,
    JobHeadStyle
} from "./StackStyles";
import AddLineItem from "../Client/quotes/AddLineItem";
import CreateNewLineItem from './../Client/quotes/CreateNewLineItem';
import CreateNewQuote from "../Client/quotes/CreateNewQuote";
import SignScreen from "../Client/quotes/SignScreen";
import Job from "../Client/jobs/job-page/Job";
import JobAddLineItem from './../Client/jobs/job-page/JobAddLineItem';
import CreateNewJob from './../Client/jobs/job-page/CreateNewJob';


const RoomEstimatorNavigator = ()=> {
    const RoomStack = createStackNavigator();
    return (
        <RoomStack.Navigator screenOptions={NavHeadStyle}>
            <RoomStack.Screen name="AddRoomPage"  component={AddRoomFrame}  
                options={AddRoomHeaderStyle}   
            />
        </RoomStack.Navigator>
    );
}; 


const NewClientStack = createStackNavigator();
const NewClientNavigator = ()=> {
    return (
        <NewClientStack.Navigator screenOptions={NavHeadStyle}>
            <NewClientStack.Screen name="NewClientPage" component={NewClient}  
                options={StackHeadNewClient}   
            />
        </NewClientStack.Navigator>
    );
}; 

const QuoteStack = createStackNavigator();
const ClientQuoteNavigator = ()=> {
    return (
        <QuoteStack.Navigator initialRouteName="Quote" screenOptions={QuoteHeadStyle}>
            <QuoteStack.Screen name="Quote" component={Quote}     />
            <JobStack.Screen name="LineItem" component={AddLineItem}   />
            <JobStack.Screen name="NewLineItem" component={CreateNewLineItem}   />
            <JobStack.Screen name="NewQuote" component={CreateNewQuote}   />
            <JobStack.Screen name="Signature" component={SignScreen}  />
        </QuoteStack.Navigator>
    );
}; 

const JobStack = createStackNavigator();
const ClientJobNavigator = ()=> {
    return (
        <JobStack.Navigator initialRouteName="Job" screenOptions={JobHeadStyle}>
            <JobStack.Screen name="Job" component={Job} />
            <QuoteStack.Screen name="JobLineItem" component={AddLineItem}   />
            <QuoteStack.Screen name="NewJobLineItem" component={CreateNewLineItem}   />
            <QuoteStack.Screen name="NewJob" component={CreateNewJob}   />
           
        </JobStack.Navigator>
    );
}; 


const Drawer = createDrawerNavigator();
const MainTabScreen = () => {
     return (
        <Drawer.Navigator initialRouteName="HomePage" drawerContent={props => <DrawerMenuScreen {...props} />}>
            <Drawer.Screen name="HomePage"  options={{headerShown: false}} component={BottomTabNavigation} />
            <Drawer.Screen name="Company" component={CompanyNavigator} />
            <Drawer.Screen name="Documents" component={DocumentsNavigator} />
            <Drawer.Screen name="Rates" component={RatesNavigator} />
            <Drawer.Screen name="Items" component={ItemsNavigator} />
            <Drawer.Screen name="About" component={AboutNavigator} />
            <Drawer.Screen name="AddRoom" component={RoomEstimatorNavigator} options={{headerShown: false}} />
            <Drawer.Screen name="NewClient" component={NewClientNavigator} options={{headerShown: false}} />
            <Drawer.Screen name="ClientQuotePage" component={ClientQuoteNavigator} options={{headerShown: false}}  />  
            <Drawer.Screen name="ClientJobPage" component={ClientJobNavigator} options={{headerShown: false}}  /> 
        </Drawer.Navigator>
     )
}

export default MainTabScreen;