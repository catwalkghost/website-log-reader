import { str, isStr } from 'fpx';
import { LOG_PATH } from '../lib/constants';

/**
 * Converts plain text log file to an array of objects, with 'page' and 'ip' keys.
 * @param string
 * @returns {{ip: string, page: string}[]}
 */
const toObject = string => {
    const validatedString = str(string);

    return validatedString
        .split('\n')
        .map(item => item.split(' '))
        .map(([page, ip]) => ({page, ip}));
}

/**
 * Sorts an array in descending order based on value
 * @param arr
 * @returns {*}
 */
const sortDescending = arr => {
    return arr.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
}

/**
 * Counts visits per page based on all IPs.
 * @param log
 * @returns {unknown[]}
 */
const countVisits = log => {
    return Object.values(log.reduce((mapping, item) => {
        const { page } = item;
        const { [ page ]: matchingItem } = mapping;
        if(matchingItem) {
            // eslint-disable-next-line no-plusplus
            matchingItem.count ++;
        }
        else {
            // eslint-disable-next-line no-param-reassign
            mapping[ page ] = { page, count : 1 };
        }
        return mapping;
    },{}))
}

/**
 * Counts and sorts the visits log in the descending order
 * @param log
 * @returns {*}
 */
const countAndSortVisits = log => {
    const visitsLog = countVisits(log);
    return sortDescending(visitsLog);
}

/**
 * Gets response from promise, parses text and converts to Object
 * @param log
 * @returns {Promise<{ip: string, page: string}[]>}
 */
const parseLog = async (log) => {
    const parsedLog = await log.text();

    return toObject(parsedLog);
}

/**
 * Fetches the plaintext log, then runs a parser
 * @returns {Promise<{ip: string, page: string}[]>}
 */
const fetchLog = async () => {
    const response = await fetch(LOG_PATH);

    if (response.ok === false) {
        throw new Error(`Error: ${response.text}`);
    }

    const parsedLog = await parseLog(response);

    // Using Promise.all to avoid race condition
    // eslint-disable-next-line no-return-await
    return await Promise.all(parsedLog);
}

/**
 * Runs fetchLog() and then counts visits and sorts them in descending order
 * @returns {Promise<*>}
 */
const fetchVisits = async () => {
    const response = await fetchLog();
    return countAndSortVisits(response);
}

/**
 * Checks if a string is not empty
 * @param value
 * @returns {boolean}
 */
const isNonEmptyString = value => {
    return isStr(value) && value.trim() !== ''
}

export  {
    fetchVisits,
    isNonEmptyString
}



