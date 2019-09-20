import React from 'react';
import { connect } from 'react-redux'
import AppRouting from '@app/app.routing';
import NavigationService from '@app/shared/services/navigation.service';
import { tracking } from '@app/shared/actions/navigation.action'

const App = (props) => <AppRouting
    ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    onNavigationStateChange={props.tracking}
/>

const mapDispatchToProp = (dispatch, ownProps) => {
    return {
        tracking: (prevState, currentState, action) => dispatch(tracking(prevState, currentState, action))
    }
}

export default connect(null, mapDispatchToProp) (App);