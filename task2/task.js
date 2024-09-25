export function findUniqueGenres(genres) {
    const uniqueGenres = [];

    genres.forEach(innerGenres => {
        innerGenres.forEach(genre => {

            if (!uniqueGenres.includes(genre)) uniqueGenres.push(genre)    

        });
    });

    return uniqueGenres;
}