export const maxIterations = 10000000

// API connection settings
export const timeout = 120 * 1000
export const retries = 5

// set this value to false if you do not want to limit the number of iterations
// processed - WARNING this will take a really really long time to complete
// as in it will probably never complete in any resonable amount of time, due
// to the sheer number of combinations an permutations possible.
export const limitIterations = true
