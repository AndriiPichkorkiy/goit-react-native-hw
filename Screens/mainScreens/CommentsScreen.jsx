import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BGMainScreen from "../../Components/BGMainScren/BGMainScreen";
import Comment from "../../Components/PostsComponents/Comment";
import InputComment from '../../Components/FormsComponents/InputComment'


const CommentsScreen = ({ route: { params: { post } } }) => {

    return (
        <BGMainScreen>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image source={post.photo} style={styles.img} />
                    <View style={styles.commentsList}>
                        {post.comments.map((commentItem, i) =>
                            <Comment key={i} comment={commentItem} />
                        )}
                    </View>
                </View>

            </ScrollView>
            <InputComment />

        </BGMainScreen>
    );
}

export default CommentsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16
    },
    img: {
        borderRadius: 8,
        width: "100%"
    },
    commentsList: {
        paddingTop: 32,

    }
})