
export const useGetLatestTime  = () => {
    const latestTime: Date = new Date();
    const currentDate : string=`${latestTime.getDate()}/${latestTime.getMonth()+1}/${latestTime.getFullYear()}`;

    let hours: number = latestTime.getHours();
    let minutes: string | number = latestTime.getMinutes(); 
    const newformat: string = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12; 
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
 
    const time: string = `${hours}:${minutes} ${newformat}`;
    return {currentTime: time, date: currentDate};
}