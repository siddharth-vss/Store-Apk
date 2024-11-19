import { useNavigation } from '@react-navigation/native'

const Micro = () => {
    const navigation = useNavigation();

    const navigate = ({path = "ShowInvoice",data = ""}:{path : string , data :string}) => {
        navigation.navigate(path,data);
        console.log(data);
    }
    // navigation.()
    const hello = () => {
    }
    const hello1 = () => {
    }
    const hello2 = () => {
    }
    const hello3 = () => {
    }
    return {
        navigate,
        hello,
        hello1,
        hello2,
        hello3,
        // navigation,
    };
}


export default Micro;