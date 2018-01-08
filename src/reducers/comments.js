import { RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../actions';

function deleteComment(state, action) {
    delete state[action.commentId];
    return state;
}

export default function comments(state={}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments.reduce( (byId, comment) => {
                byId[comment.id] = comment;
                return byId;
            }, {})
        case ADD_COMMENT: 
            console.log(action.comment.id);
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case DELETE_COMMENT: return deleteComment({...state}, action);
            
        default:
            return state;
    }
}