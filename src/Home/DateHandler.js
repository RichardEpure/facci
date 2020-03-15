class DateHandler {
    static days = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
    }
    static numDays = 5;
    static date = new Date();

    static getDateList(numberOfDates) {
        let list = [this.date]
        let nextDate = new Date();

        for(let i=0; i<numberOfDates; i++)
        {
            nextDate = new Date(nextDate);
            nextDate.setDate(nextDate.getDate()+1);
            list.push(nextDate);
        }
        return list;
    }
}

export default DateHandler;