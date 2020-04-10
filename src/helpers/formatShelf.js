// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text

export default function formatShelf(shelf) {
    const result = shelf.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);
}
