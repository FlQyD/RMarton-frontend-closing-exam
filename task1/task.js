export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {

    const actor = allActors.find(item => item.name === actorName);
    const actorIndex = actor ? actor.id : -1;

    const movies = allMovies.filter(movie => {
        let returnStatement = false;
        if (movie.actor_ids.includes(actorIndex) &&
            movie.genres.includes(genre) ) {
                returnStatement = true;
        }
        return returnStatement;
    })
    return movies.map(movie => movie.title);
}