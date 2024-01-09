import { useDispatch } from 'react-redux';
import { ACTIONS } from './actionTypes';
export var getActionCreators = function () {
    var dispatch = useDispatch();
    return {
        setCurrentRepository: function (data) {
            dispatch({
                type: ACTIONS.setCurrentRepository,
                payload: data
            });
        },
        setSearchResults: function (data) {
            dispatch({
                type: ACTIONS.setCurrentRepository,
                payload: data
            });
        }
    };
};
