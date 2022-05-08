import React,{useState,useContext, Linking} from 'react';
import { magic,loginUser } from '../components/common/magic';
import { SuperContext } from '../context/ContextProvider';
    

const MagicBox =  () => {
    const [loader, setLoader] = useState(false);
    const {user, setUser} = useContext(SuperContext);
    
    const result = async () =>{
        try {  
            await loginUser(user.email);
            // console.log(magic);
            const isLoggedIn = await magic.user.isLoggedIn();
            // console.log(isLoggedIn);
            if(isLoggedIn===true){
                const data = await magic.user.getMetadata();
                // const idToken = await magic.user.getIdToken();
                // console.log(idToken);
                // console.log(data)
                setUser({...user, isLoggedIn:true, name:null, email: data.email, photoUrl:null, token:null});
                // props.navigation.navigate('HomePage'); 
            } 
        } catch (error) {
            console.error(error);
        }
    }
    result();
    return <> 
                <magic.Relayer /> 
        </>
    
};



export default MagicBox;