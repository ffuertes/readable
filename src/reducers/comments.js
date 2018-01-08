import { RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENT_VOTE_UP, COMMENT_VOTE_DOWN, EDIT_COMMENT } from '../actions';

function commentVote(state, action) {
    state[action.commentId].voteScore = action.voteScore;
    return state;
}

function deleteComment(state, action) {
    delete state[action.commentId];
    return state;
}

function editComment(state, action) {
    state[action.id] = action.comment;
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
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case COMMENT_VOTE_UP:
        case COMMENT_VOTE_DOWN: return commentVote({...state}, action);
        case EDIT_COMMENT: return editComment({...state}, action);
        case DELETE_COMMENT: return deleteComment({...state}, action);

        default:
            return state;
    }
}