import { NativeBaseProvider, Center, HStack, Button, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { increaseOne, decreaseOne } from "../redux/counterSlice";
import { selectCounter } from "../redux/counterSlice";

// Then, you can use the redux state management:
// get states by useSelector
// send actions by useDispatch
const HomeScreen = () => {

   const counterValue = useSelector(selectCounter);
   const dispatch = useDispatch();
 
   return (
     <NativeBaseProvider>
       <Center flex={1} bg={"#ffe2de"}>
         <HStack space={20}>
           <Button borderRadius={0} width={70} onPress={() => dispatch(increaseOne(counterValue))}>
             <Text fontSize={40} color="white">+</Text>
           </Button>
           <Button borderRadius={0} width={70} onPress={() => dispatch(decreaseOne(counterValue))}>
             <Text fontSize={40} color="white">-</Text>
           </Button>
         </HStack>
         <Text fontSize={40} mt={20} color={"#459bcc"}>
           {counterValue}
         </Text>
       </Center>
     </NativeBaseProvider>
   );
 }

 export default HomeScreen;