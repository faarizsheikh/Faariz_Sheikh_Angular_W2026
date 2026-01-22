import { Component } from '@angular/core';
import { MyData } from './models/my-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {

  films: MyData[] = [
    // I'll add imageURL to each later on, as I know from Angular last semester we'll need it later on.
    {
      id: 1, title: "IT",
      description:
        "Seven outcasts in Derry unite to face an ancient, shape-shifting evil that resurfaces every 27 years, " +
        "confronting their fears to defeat the killer clown Pennywise.",
      type: "Movie",
      genre:
        "Action, Adventure, Coming-of-age Story, Drama, Horror, " +
        "Mystery, Sci-Fi, Supernatural, Suspense, Thriller",
      yearReleased: 2017, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 4,
      streaming:
        "Amazon Prime Video, Apple TV, Fandango at Home, Max (formerly HBO Max), Plex",
      producer:
        "Andrés Muschietti, Barbara Muschietti, Dan Lin, " +
        "David Katzenberg, Roy Lee, Seth Grahame-Smith",
      director: "Andrés Muschietti",
      writer: "Andrés Muschietti, Cary Fukunga, Chase Palmer, Gary Dauberman",
      based_on: "Novel", creator: "Stephen King",
      starring:
        "Bill Skarsgård, Chosen Jacobs, Finn Wolfhard, Jack Dylan Grazer, " +
        "Jaeden Lieberher (Jaaden Martell), Jackson Robert Scott, Jeremy Ray Taylor, Sophia Lillis, Wyatt Oleff",
      is_started: true, is_finished: true,
      notes:
        "This was a tense and emotionally engaging horror film that blends genuine scares with " +
        "strong character development and nostalgic small-town atmosphere. " +
        "The young cast delivers memorable performances, and Pennywise is both terrifying and oddly captivating.",
      image_url: "assets/it-2017.jpeg"
    },

    {
      id: 2, title: "John Wick",
      description:
        "After retiring from his life as a legendary assassin, John Wick is pulled back into violence " +
        "when his wife dies and a ruthless gangster steals his car and kills the puppy she left him. " +
        "Driven by grief and rage, John hunts those responsible, while the gangster’s powerful father " +
        "places a massive bounty on his head to stop him.",
      type: "Movie",
      genre:
        "Action, Action Thriller, Adventure, Crime, Crime Film, " +
        "Detective Fiction, Mystery, Neo-noir, Noir, Police procedural, Thriller",
      yearReleased: 2014, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 4,
      streaming:
        "Amazon Prime Video, Apple TV, CraveTV, Google Play Movies & TV",
      producer:
        "Basil Iwanyk, Chad Stahelski, David Leitch, Eva Longoria, Michael Witherill",
      director: "Chad Stahelski",
      writer: "Derek Kolstad",
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
      description:
        "A drug-addled, manipulative misanthrope begins to experience increasingly " +
        "severe hallucinations as he tries to solve the murder of a Japanese student.",
      type: "Movie",
      genre:
        "Action, Crime Fiction, Crime Film, Comedy, Comedy Drama," +
        "Detective Fiction, Drama, Mystery, Police Procedural, Thriller, Tragic Comedy",
      yearReleased: 2013, movie_sequence: 1, mpaa_rating: "R", viewer_rating: 3.5,
      streaming:
        "Apple TV, Plex",
      producer:
        "Christian Angermayer, James McAvoy, Jens Meurer, Jon S. Baird " +
        "Ken Marshall, Mark Amin, Stephen Mao, Trudie Styler ",
      director: "Jon S. Baird",
      writer: "Jon S. Baird",
      based_on: "Novel", creator: "Irvine Welsh",
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
      description:
        "Following their father's murder, three siblings move into a house filled with reality-bending keys.",
      type: "TV Show",
      genre:
        "Adventure, Drama, Fantasy, Fantasy Television, " +
        "Horror, Horror Fiction, Mystery, Sci-Fi, Thriller",
      yearReleased: 2020, seasons: 3, total_episodes: 28, tv_rating: "TV-14", viewer_rating: 3.5,
      streaming:
        "Netflix",
      producer:
        "Andrés Muschietti, Aron Eli Coleite, Barbara Muschietti, Carlton Cuse, " +
        "David Ozer, Joe Hill, Meredith Averill, Ra'uf Glasgow, Ted Adams",
      director: "Carlton Cuse, Dawn Wilkinson, Mairzee Almas, Mark Tonderai, " +
        "Michael Morris, Millicent Shelton, Tim Southam, Vincenzo Natali",
      writer: "Joe Hill",
      based_on: "Comics", creator: "Gabriel Rodriguez",
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
      image_url: "assets/locke-and-key-2020.jpeg"
    },

    {
      id: 5, title: "Stranger Things",
      description:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government " +
        "exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
      type: "TV Show",
      genre:
        "Adventure, Coming-of-age Story, Drama, Historical Drama, Horror, Horror Fiction, " +
        "Mystery, Romance, Sci-Fi, Supernatural, Suspense, Teen, Thriller",
      yearReleased: 2016, seasons: 5, total_episodes: 42, tv_rating: "PG-13", viewer_rating: 4.5,
      streaming:
        "Netflix",
      producer:
        "Dan Cohen, Iain Paterson, Curtis Gwinn, Matt Duffer, Ross Duffer, Shawn Levy",
      director: "Andrew Stanton, Frank Darabont, Matt Duffer, " +
        "Nimród Antal, Rebecca Thomas, Ross Duffer, Shawn Levy",
      writer: "Caitlin Schneiderhan, Curtis Gwinn, Jessie Nickson-Lopez, " +
        "Justin Doble, Kate Trefry, Paul Dichter",
      starring:
        "Brett Gelman, Caleb McLaughlin, Cara Buono, Charlie Heaton, Dacre Montgomery, " +
        "David Harbour, Finn Wolfhard, Gaten Matarazzo, Jamie Campbell Bower, Joe Keery, " +
        "Matthew Modine, Maya Hawke, Millie Bobby Brown, Natalia Dyer, Noah Schnapp, " +
        "Priah Ferguson, Sadie Sink, Winona Ryder",
      is_started: true, is_finished: false,
      notes:
        "Stranger Things is thrilling, nostalgic, and emotionally engaging, blending childhood adventure " +
        "with supernatural suspense. The  cast delivers standout performances, making each character " +
        "memorable and relatable. Its mix of humour, horror, and heart creates a captivating series " +
        "that hooks viewers like myself from start to finish.",
      image_url: "assets/stranger-things-2016.jpeg"
    },

    {
      id: 6, title: "Young Sheldon",
      description:
        "Young Sheldon follows a gifted but socially awkward boy growing up in East Texas, " +
        "where his intelligence clashes with local traditions. As Sheldon navigates school and life, " +
        "his supportive yet struggling family learns to adapt with him. Narrated by Jim Parsons, " +
        "the series explores Sheldon's childhood journey toward becoming the iconic " +
        "character from The Big Bang Theory.",
      type: "TV Show",
      genre:
        "Children's film, Comedy, Coming-of-age story, Sitcom",
      yearReleased: 2017, seasons: 7, total_episodes: 141, tv_rating: "TV-PG", viewer_rating: 4,
      streaming:
        "Amazon Prime Video, Apple TV, CraveTV, Netflix, YouTube",
      producer:
        "Bill Prady, Chuck Lorre, Jim Parsons, Steven Molaro",
      director: "Alex Reid, Chris Koch, Jaffar Mahmood, Jeremy Howe, Michael Judd, Nikki Lorre",
      writer: "Alex Reid, Chris Koch, Chuck Lorre, Connor Kilpatrick, Eric Kaplan, " +
        "Jaffar Mahmood, Jeremy Howe, Michael Judd, Nikki Lorre, Steve Holland, Steven Molaro",
      based_on: "TV Show", creator: "Jim Parsons",
      starring:
        "Annie Potts, Iain Armitage, Jim Parsons, Lance Barber, Montana Jordan, Raegan Revord, Zoe Perry",
      is_started: true, is_finished: true,
      notes:
        "The show is quite heartwarming and clever sitcom that highlights the quirks of a young genius. " +
        "I love how it balances humor with touching family dynamics, making the characters feel " +
        "authentic and relatable. It delivers lighthearted fun while offering insight into " +
        "Sheldon's unique perspective on the world.",
      image_url: "assets/young-sheldon-2017.jpeg"
    },
  ];


  Status(film: MyData): 'not-started' | 'watching' | 'finished' {
    if (!film.is_started && !film.is_finished) return 'not-started';
    if (film.is_started && !film.is_finished) return 'watching';
    return 'finished';
  }

  toggleStatus(film: MyData): void {
    const status = this.Status(film);

    if (status === 'not-started') {
      film.is_started = true;
      film.is_finished = false;
    } else if (status === 'watching') {
      film.is_started = true;
      film.is_finished = true;
    } else {
      film.is_started = false;
      film.is_finished = false;
    }
  }
}
