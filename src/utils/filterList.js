import filtersEnum from "../constants/filtersEnum";

const filterList = (list, filter) => {
    return list.filter((task) => {
        switch (filter) {
            case filtersEnum.done:
                return task.isDone === true;
            case filtersEnum.notdone:
                return task.isDone === false;          
            default:
                return true;
        };
    });
};

export default filterList;