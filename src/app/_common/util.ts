import {formatDistanceToNow} from "date-fns";
import { format } from 'date-fns';

export const formatDate = (apiDate:Date) => {
    const distance = formatDistanceToNow(new Date(apiDate), { addSuffix: true, includeSeconds: true });
    return distance.replace('about', '')
};
export const formatDateToMdy = (apiDate: Date) => {
    return format(new Date(apiDate), "MMMM dd, yyyy 'at' HH:mm:ss");
};