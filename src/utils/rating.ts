export function displayRating(rating: number) : string {
    return Array(rating).fill("&#9733;").join(" ")
  }