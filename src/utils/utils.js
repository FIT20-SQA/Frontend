export const truncateString = (str, num) => {
    if (str.split(" ").length <= num) {
        return str;
    }
    const words = str.split(" ");
    const truncated = words.slice(0, num).join(" ");
    return truncated + "...";
}