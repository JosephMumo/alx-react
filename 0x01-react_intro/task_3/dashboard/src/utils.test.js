import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test ("To return current year", () => {
    expect(getFullYear()).toBe(2023);
});

test ("To get the correct footer message", () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test ("To check returned string", () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
})