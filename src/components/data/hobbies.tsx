interface Hobby {
  name: String, 
  image: String,
  video: String
}

const hobbies: Hobby[] = [
  {
    name: "Fly Fishing",
    image: "fly",
    video: "https://fishing-video.s3.amazonaws.com/beachFlyFish.mp4"
  },
  {
    name: "Hiking",
    image: "hike",
    video: "https://hiking-video.s3.amazonaws.com/hiking.mp4"
  },
  {
    name: "Skiing",
    image: "ski",
    video: "https://skiing-video.s3.amazonaws.com/1+(1).mp4"
  },
  {
    name: "Diving",
    image: "dive",
    video: "https://diving-video.s3.amazonaws.com/diving.mp4"
  },
  {
    name: "Biking",
    image: "bike",
    video: "https://biking-video.s3.amazonaws.com/biking.mp4"
  },
]


export default hobbies