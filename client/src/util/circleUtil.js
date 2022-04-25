import { addCircle, changeCircle, deleteCircle } from "../slices/circlesSlice"

function addCircleToStore({ dispatchCallback, title, color }) {
    const defaultTop = 20
    const defaultLeft = 20

    dispatchCallback(addCircle({
        title: title,
        backgroundColor: color,
        top: defaultTop,
        left: defaultLeft,
    }))
}

function updateCircleInStore({ dispatchCallback, id, title, backgroundColor }) {
    dispatchCallback(changeCircle({
        id: id,
        title: title,
        backgroundColor: backgroundColor,
    }))
}

function deleteCircleFromStore ({ dispatchCallback, id }) {
    dispatchCallback(deleteCircle({ id }))
}

export { addCircleToStore, updateCircleInStore, deleteCircleFromStore }