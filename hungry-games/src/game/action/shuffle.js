function shuffle(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

export default shuffle;