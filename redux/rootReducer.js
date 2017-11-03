import moment from "moment";

export default function rootReducer(currentState = {items: []}, action) {
    switch (action.type) {
        case "GET_ITEMS":
            let thisTest = action.items.filter(
                item =>
                    moment.utc(Date.now()).isSameOrAfter(moment.utc(item.duedate)) &&
                    item.status === 'current'
            );
            return {
                ...currentState,
                items: action.items,
                modalOn: thisTest.length > 0
            };

        case "UPDATE_ITEM":
            const newItems = currentState.items.filter(
                each => each.id !== action.newItem.id
            );
            newItems.push(action.newItem);
            newItems.sort(function (b, a) {
                return a.rank - b.rank;
            });
            let test = newItems.filter(
                item =>
                    moment.utc(Date.now()).isSameOrAfter(moment.utc(item.duedate)) &&
                    item.status === 'current'
            );

            return {
                ...currentState,
                items: [...newItems],
                modalOn: test.length > 0
            };

        case "CREATE_ITEM":
            const moreItems = currentState.items.slice(0);
            moreItems.unshift(action.newItem);
            return {
                ...currentState,
                items: moreItems
            };

        case "DELETE_ITEM":
            const lessItems = currentState;
            lessItems.items = currentState.items.filter(
                item => item.id !== action.id
            );
            return {
                ...currentState,
                items: lessItems.items
            };

        case "REFRESH_LIST":
            let refreshedItems = currentState.items.slice(0);
            const currentTime = moment.utc(Date.now());
            refreshedItems = refreshedItems.map(item => {
                item.timeLeft = moment.utc(item.duedate).diff(currentTime, "minutes");
                item.totalTime = moment
                    .utc(item.duedate)
                    .diff(item.createddate, "minutes");
                item.rank =
                    (1 - item.timeLeft / item.totalTime) * 0.5 + item.priority / 5 * 0.5;
                return item;
            });
            return {
                ...currentState,
                items: refreshedItems
            }

        case "USER_LOGIN":
            return {
                ...currentState,
                userToken: action.token,
                userId: action.userId,
                authenticatedUser: action.authenticatedUser
            };

        case "UPDATE_USER":

            return {
                ...currentState,
                authenticatedUser: action.updatedUser
            };

        case "LOGOUT":
            return {};

        case "DELETE_ASSIGNMENT":
            let postDeleteAssignmentItems = currentState.items.slice(0);
            let index = postDeleteAssignmentItems.findIndex(item => item.id === action.deletedAssignment.goalId);


            let smallerArray = postDeleteAssignmentItems[index].userAssignments.filter(assignment => assignment.id !== action.deletedAssignment.id);
            postDeleteAssignmentItems[index].userAssignments = smallerArray
            return {
                ...currentState,
                items: postDeleteAssignmentItems
            }

        case "CREATE_ASSIGNMENT":
            let postAddAssignmentItems = currentState.items.slice(0);
            let thisindex = postAddAssignmentItems.findIndex(item => item.id === action.goalId);

            let newUser = action.userItem
            newUser.userId = action.userId;
            newUser.goalId = action.goalId;
            newUser.id = action.id;
            newUser.status = 'current'
            newUser.profileColor = newUser.color;
            console.log(newUser)

            postAddAssignmentItems[thisindex].userAssignments = [...postAddAssignmentItems[thisindex].userAssignments, newUser];
            console.log(postAddAssignmentItems);

            return {
                ...currentState,
                items: postAddAssignmentItems
            }

        case "EXPIRED":
            return {
                ...currentState,
                modalOn: true
            };


        default:
            return currentState;
    }
}
