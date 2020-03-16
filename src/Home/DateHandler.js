let initDate = new Date();

if(initDate.getHours() >= 21)
{
    initDate = new Date(initDate);
    initDate.setDate(initDate.getDate()+1);
}

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
    static numDays;

    static date = initDate;

    static getDateList(numberOfDates) {
        let list = [this.date]
        let nextDate = new Date(this.date);

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