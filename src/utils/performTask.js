export const changeElementStatus = (list, id) => {
    return list.map((taskItem) => {
        return taskItem.id === id ? { ...taskItem, isDone: !taskItem.isDone } : taskItem
    })
}
export const deleteElementFromArray = (list, id) => {
    return list.filter((taskItem) => taskItem.id !== id);
}

