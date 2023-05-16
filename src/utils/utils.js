export const truncateString = (str, num) => {
    if (str.split(" ").length <= num) {
        return str;
    }
    const words = str.split(" ");
    const truncated = words.slice(0, num).join(" ");
    return truncated + "...";
}

export const colors = [
    '#FE6244',
    '#85F4FF',
    '#FF33FF',
    '#FFD95A',
    '#00FFCA',
    "#E11299",
    "#F9D949",
    "#EA8FEA",
    "#E93B81",
    "#B3FFAE",
    "#FDCFDF",
]