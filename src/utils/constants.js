import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const API_KEY = "a073e0a2000c91fe2ac37b04fd193338"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDczZTBhMjAwMGM5MWZlMmFjMzdiMDRmZDE5MzMzOCIsIm5iZiI6MTcyNzk0MTk1Mi4xMzIsInN1YiI6IjY2ZmU0ZDQwMTU5MmVmMWJhOTg0ZDBkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klXEz8x7_JwkEOBSQW-1lzd9VYcdqv3_RktaI0Oy4mM"

const titles = [
    {
        id: 1,
        title: 'Continue Watching for Drashti'
    },
    {
        id: 2,
        title: 'Suspenseful TV Shows'
    },
    {
        id: 3,
        title: ' New Releases'
    },
    {
        id: 4,
        title: 'My List'
    },
    {
        id: 5,
        title: 'Selected for You Today'
    },
]

export { width, height, API_KEY, token, titles }
