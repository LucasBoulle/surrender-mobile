export const randomNumber = (min: number, max: number) => {
  const r = Math.random()*(max-min) + min
  return Math.floor(r)
}