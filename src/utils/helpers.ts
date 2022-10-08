class Helpers {
  /*// format genre array to human-friendly string*/
  static formatGenres = (genres: string[]) => {
    const genreStr = genres.reduce((str: string, genre: string, index: number) => {
      if (index === genres.length - 1) return str.concat(genre)
      else return str.concat (genre + ' | ')
    }, '');
    return genreStr;
  }

    /*// capitalise the first letter of each word in a string*/
    static capitaliseString = (str: string) => {
      if (!str || str.trim() === '') return str
  
      const words = str.split(' ').filter((word: string) => word !== '')
      const formattedStr = words.map((word: string) => {
        return word[0].toUpperCase() + word.substring(1);
      }).join(' ')
  
      return formattedStr;
    }
}

export default Helpers;
