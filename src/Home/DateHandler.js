// Handles various date operations that are used across several components.
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
    
    static date = new Date();
    
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

// Forecast API can only forecast up to 21:00, therefore any hour past this will require the application to increment the date to the next day.
function updateDate()
{
    const waitTime = 21-DateHandler.date.getHours()
    if(waitTime >= 0)
    {
        setTimeout(() => {
          DateHandler.date.setDate(DateHandler.date.getDate()+1);  
          updateDate();
        }, waitTime*60*60*1000);
    }
    else
    {
        DateHandler.date.setDate(DateHandler.date.getDate()+1);
    }
}
updateDate();

export default DateHandler;