import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Header from '@app/shared/components/header-home/header-home.component';
import CardLarger from '@app/shared/components/news-card/news-card.component';
import CardSmall from '@app/shared/components/news-small-list-item/news-small-list-item.component';

function HomeScreen(props) {
    return <View style={styles.main}>
        <Header />
        <View style={styles.body}>
            <ScrollView>
                {
                    props.list.map((item, index) => {
                        if(index === 0){
                            return <View key={'new_' + index}>
                                <CardLarger {...item}/>
                                <View style={styles.devider}></View>
                            </View>
                        } else {
                            return <View key={'new_' + index}>
                                <CardSmall {...item}/>
                                <View style={styles.devider}></View>
                            </View>
                        }
                    })
                }
            </ScrollView>
        </View>
    </View>
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    body:{
        flex: 1,
        alignItems: 'stretch'
    },
    devider: {
        height: 1,
        backgroundColor: 'gray',
        marginHorizontal: 16
    }
})
const mapStateToProps = state => {
    return {
        list: state.homeScreen.list
    }
}
export default connect(mapStateToProps) (HomeScreen);
