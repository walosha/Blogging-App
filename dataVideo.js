import moment from "moment";

const videos = [
  {
    id: "1",
    thumbnail: require("./assets/video/thumbnails/01.jpg"),
    video: require("./assets/video/01.mp4"),
    title: "Burna Boy - Gum Body (Feat. Jorja Smith) ",
    channel: "Burna Boy",
    channelImage: require("./assets/video/channel/burna.jpeg"),
    views: 63,
    published: moment().subtract(10, "days")
  },
  {
    id: "2",
    thumbnail: require("./assets/video/thumbnails/02.jpg"),
    video: require("./assets/video/02.mp4"),
    title: "Lyta - Worry",
    channel: "Lyta",
    channelImage: require("./assets/video/channel/lyta.jpg"),
    views: 216,
    published: moment().subtract(17, "days")
  },
  {
    id: "3",
    thumbnail: require("./assets/video/thumbnails/05.jpg"),
    video: require("./assets/video/03.mp4"),
    title: "Kizz daniel - JAHO",
    channel: "Flyboy Inc",
    channelImage: require("./assets/video/channel/burna.jpeg"),
    views: 189,
    published: moment().subtract(5, "days")
  },
  {
    id: "4",
    thumbnail: require("./assets/video/thumbnails/03.jpg"),
    video: require("./assets/video/01.mp4"),
    title: "Naira Marley - Mafo",
    channel: "Naira Marley",
    channelImage: require("./assets/video/channel/lyta.jpg"),
    views: 273,
    published: moment().subtract(31, "days")
  }
];

export default videos;
