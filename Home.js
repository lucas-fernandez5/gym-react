import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import background from "./assets/images/descarga.jpg"

export default function Home({navigation}){
    return(<>
            <View style={styles.container}>
            <div style={{ backgroundImage: `url(${background})` }}>
              AAA
            </div>
            </View>
        </>
    );
} 
  