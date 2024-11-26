function getImageUrl(name){
    return new URL(`../assets/book/${name}`,import.meta.url)
}
export {getImageUrl}
