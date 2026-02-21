// mock.content.ts:

import { MyData } from './Models/my-data';

export const MOCK_CONTENT: MyData[] = [
  {
    id: 1, title: "IT",
    type: "Movie",
    genre:
      "Action, Adventure, Coming-of-age Story, Drama, Horror, " +
      "Mystery, Sci-Fi, Supernatural, Suspense, Thriller",
    yearReleased: 2017, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 4,
    streaming:
      "Amazon Prime Video",
    producer:
      "Andrés Muschietti, Barbara Muschietti, Dan Lin, " +
      "David Katzenberg, Roy Lee, Seth Grahame-Smith",
    director: "Andrés Muschietti",
    writer: "Andrés Muschietti, Cary Fukunga, Chase Palmer, Gary Dauberman",
    based_on: "Novel(s)", creator: "Stephen King",
    starring:
      "Bill Skarsgård, Chosen Jacobs, Finn Wolfhard, Jack Dylan Grazer, " +
      "Jaeden Lieberher (Jaeden Martell), Jackson Robert Scott, Jeremy Ray Taylor, Sophia Lillis, Wyatt Oleff",
    is_started: true, is_finished: true,
    notes:
      "This was a tense and emotionally engaging horror film that blends genuine scares with " +
      "strong character development and nostalgic small-town atmosphere. " +
      "The young cast delivers memorable performances, and Pennywise is both terrifying and oddly captivating.",
    image_url: "assets/it-2017.jpeg"
  },

  {
    id: 2, title: "John Wick",
    type: "Movie",
    genre:
      "Action, Adventure, Crime, " +
      "Mystery, Noir, Police-procedural, Thriller",
    yearReleased: 2014, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 4,
    streaming:
      "Apple TV",
    producer:
      "Basil Iwanyk, Chad Stahelski, David Leitch, Eva Longoria, Michael Witherill",
    director: "Chad Stahelski",
    writer: "Derek Kolstad",
    based_on: "None",
    starring:
      "Bridget Moynahan, Ian McShane, Keanu Reeves, Lance Reddick, Michael Nyqvist",
    is_started: true, is_finished: true,
    notes:
      "This was a relentless and stylish action thriller that keeps you on the edge of your seat. " +
      "Keanu Reeves's controlled fury and the artistic violence scenes make the " +
      "revenge story compelling. The underworld setting and high stakes add tension while delivering " +
      "satisfying cinematic action.",
    image_url: "assets/john-wick-2014.jpeg"
  },

  {
    id: 3, title: "Filth",
    type: "Movie",
    genre:
      "Action, Crime, Comedy," +
      "Drama, Mystery, Police Procedural, Thriller",
    yearReleased: 2013, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 3.5,
    streaming:
      "Apple TV",
    producer:
      "Christian Angermayer, James McAvoy, Jens Meurer, Jon S. Baird " +
      "Ken Marshall, Mark Amin, Stephen Mao, Trudie Styler ",
    director: "Jon S. Baird",
    writer: "Jon S. Baird",
    based_on: "Novel(s)", creator: "Irvine Welsh",
    starring:
      "Eddie Marsan, Emun Elliott, Gary Lewis, Iain De Caestecker, Imogen Poots, " +
      "James McAvoy, Jamie Bell, Jim Broadbent, Joanne Froggatt, John Sessions, " +
      "Kate Dickie, Martin Compston, Pollyanna McIntosh, Shirley Henderson, Shuana Macdonald",
    is_started: false, is_finished: false,
    notes:
      "This film felt quite dark, chaotic, and sharply intense, plunging you into a morally corrupt mind. " +
      "James McAvoy's performance is both unsettling and captivating, balancing black comedy with " +
      "emotional depth, like when a child flips him the middle finger, he takes the balloon and lets it go, " +
      "briefly looks at him with raised eyebrows and a tilted head, then returns his gaze with a challenging " +
      "expression while giving both middle fingers back.",
    image_url: "assets/filth-2013.jpeg"
  },

  {
    id: 4, title: "Locke & Key",
    type: "TV Show",
    genre:
      "Adventure, Drama, Fantasy, " +
      "Horror, Mystery, Sci-Fi, Thriller",
    yearReleased: 2020, seasons: 3, total_episodes: 28, tv_rating: "14+", viewer_rating: 3.5,
    streaming:
      "Netflix",
    producer:
      "Andrés Muschietti, Aron Eli Coleite, Barbara Muschietti, Carlton Cuse, " +
      "David Ozer, Joe Hill, Meredith Averill, Ra'uf Glasgow, Ted Adams",
    director: "Carlton Cuse, Dawn Wilkinson, Mairzee Almas, Mark Tonderai, " +
      "Michael Morris, Millicent Shelton, Tim Southam, Vincenzo Natali",
    writer: "Joe Hill",
    based_on: "Comic(s)", creator: "Gabriel Rodriguez",
    starring:
      "Aaron Ashmore, Brendan Hines, Coby Bird, Connor Jessup, Darby Stanchfield, " +
      "Emilia Jones, Griffin Gluck, Hallea Jones, Jackson Robert Scott, Kevin Durand, " +
      "Laysla De Oliveira, Petrice Jones, Sherri Saum",
    is_started: true, is_finished: false,
    notes:
      "Locke & Key is a suspenseful and magical series that blends mystery with heartfelt family moments. " +
      "The young cast brings energy and charm, making the supernatural elements exciting. " +
      "The show balances tension and wonder, leaving viewers like myself with eager " +
      "for each new episode's twists.",
    image_url: "assets/locke-and-key.jpeg"
  },

  {
    id: 5, title: "Stranger Things",
    type: "TV Show",
    genre:
      "Adventure, Coming-of-age Story, Drama, Horror, " +
      "Mystery, Romance, Sci-Fi, Supernatural, Suspense, Teen, Thriller",
    yearReleased: 2016, seasons: 5, total_episodes: 42, tv_rating: "PG", viewer_rating: 4.5,
    streaming:
      "Netflix",
    producer:
      "Dan Cohen, Iain Paterson, Curtis Gwinn, Matt Duffer, Ross Duffer, Shawn Levy",
    director: "Andrew Stanton, Frank Darabont, Matt Duffer, " +
      "Nimród Antal, Rebecca Thomas, Ross Duffer, Shawn Levy",
    writer: "Caitlin Schneiderhan, Curtis Gwinn, Jessie Nickson-Lopez, " +
      "Justin Doble, Kate Trefry, Paul Dichter",
    based_on: "None",
    starring:
      "Brett Gelman, Caleb McLaughlin, Cara Buono, Charlie Heaton, Dacre Montgomery, " +
      "David Harbour, Finn Wolfhard, Gaten Matarazzo, Jamie Campbell Bower, Joe Keery, " +
      "Matthew Modine, Maya Hawke, Millie Bobby Brown, Natalia Dyer, Noah Schnapp, " +
      "Priah Ferguson, Sadie Sink, Winona Ryder",
    is_started: true, is_finished: false,
    notes:
      "Stranger Things is thrilling, nostalgic, and emotionally engaging, blending childhood adventure " +
      "with supernatural suspense. The cast delivers standout performances, making each character " +
      "memorable and relatable. Its mix of humour, horror, and heart creates a captivating series " +
      "that hooks viewers like myself from start to finish.",
    image_url: "assets/stranger-things.jpeg"
  },

  {
    id: 6, title: "Young Sheldon",
    type: "TV Show",
    genre:
      "Children, Comedy, Coming-of-age Story, Sitcom",
    yearReleased: 2017, seasons: 7, total_episodes: 141, tv_rating: "PG", viewer_rating: 4,
    streaming:
      "Netflix",
    producer:
      "Bill Prady, Chuck Lorre, Jim Parsons, Steven Molaro",
    director: "Alex Reid, Chris Koch, Jaffar Mahmood, Jeremy Howe, Michael Judd, Nikki Lorre",
    writer: "Alex Reid, Chris Koch, Chuck Lorre, Connor Kilpatrick, Eric Kaplan, " +
      "Jaffar Mahmood, Jeremy Howe, Michael Judd, Nikki Lorre, Steve Holland, Steven Molaro",
    based_on: "Another TV Show/Movie", creator: "Jim Parsons",
    starring:
      "Annie Potts, Iain Armitage, Jim Parsons, Lance Barber, Montana Jordan, Raegan Revord, Zoe Perry",
    is_started: true, is_finished: true,
    notes:
      "The show is quite heartwarming and clever sitcom that highlights the quirks of a young genius. " +
      "I love how it balances humor with touching family dynamics, making the characters feel " +
      "authentic and relatable. It delivers lighthearted fun while offering insight into " +
      "Sheldon's unique perspective on the world.",
    image_url: "assets/young-sheldon.jpeg"
  },
];
