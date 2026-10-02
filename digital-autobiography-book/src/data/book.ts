import type { BookData } from "@/types/book";

export const book: BookData = {
  title: "கவிஞனின் கிறுக்கல்கள்",
  subtitle: "உணரப்படாத உணர்வுகளின் சில வரிகள்",
  publishedDate: "2026",

  cover: {
    title: "கவிஞனின் கிறுக்கல்கள்",
    subtitle: "உணரப்படாத உணர்வுகளின் சில வரிகள்",
    image: "/images/cover.png",
  },

  publication: {
    date: "2026",
    publisher: "Self Published",
    edition: "Digital First Edition",
    copyright: "© 2026 Praveenkanth G. All rights reserved.",
    isbn: "",
  },

  author: {
    name: "Praveenkanth G",
    image: null,
    introduction: `I write because some feelings refuse to stay quiet.

For most of my life I kept them folded neatly into the corners of notebooks — unfinished sentences, half-remembered evenings, names I never said out loud. This book is what happened when I finally let them out.

These pages are not a story with a beginning and an end. They are fragments. A train window. A kitchen light at 2 a.m. A hand I should have held longer.

If you find a piece of yourself in any of these lines, then it was never only mine to begin with.

— Praveenkanth G`,
  },

  poems: [
    // ---------------------------------------------------------------
    // imagePos    : "top" (default) | "bottom" | "left" | "right" | "background"
    // imageSize   : "sm" | "md" (default) | "lg" | number (px) | "180px" | "50%"
    // imageOffset : number (px). + = keezha/right, − = mela/left
    // ---------------------------------------------------------------

    {
      id: "poem-001",
      title: "The Quiet Hours",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `There is a country
that only exists
between two and four in the morning,

where the streets forget their names
and the ceiling becomes
the most honest thing
you have ever spoken to.

I have lived there
for years.

I have furnished it
with everything
I never said.`,
    },
    {
      id: "poem-002",
      title: "Inheritance",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `My mother's hands
knew the weight of water
before they knew the weight of mine.

She carried the whole house
in a single arm
and never once
called it heavy.

I learned to hold things
by watching her
put them down.`,
    },
    {
      id: "poem-003",
      title: "Small Gods",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `We made gods
out of bus timetables
and the sound of a key
in a familiar lock.

We prayed
with missed calls
and unread messages,
with the light left on
for someone
who never came home.

And still,
we called it love.
And still,
it was.`,
    },
    {
      id: "poem-004",
      title: "What the River Kept",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `I told the river
everything.

It took my name
and gave me back
the sound of it
echoing off a stone.

I told the river
everything.

It kept it.
It kept it
the way you keep
a promise
you never made out loud.`,
    },
    {
      id: "poem-005",
      title: "Distance",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `You are not far.

You are exactly
as far as
the second cup of tea
I still make
out of habit.

You are not gone.

You are simply
one chair away
from every dinner
for the rest of my life.`,
    },
    {
      id: "poem-006",
      title: "Growing Up",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `I stopped asking
why the sky was blue
and started asking
why people leave.

Nobody ever gave me
a satisfying answer
to either.

But I stopped
looking up
a little less often
than I stopped
looking back.`,
    },
    {
      id: "poem-007",
      title: "Home",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `Home is not a place
you return to.

It is a place
that returns to you.

In the smell of rain
on a hot pavement.
In a song you forgot
you knew every word to.
In the way your body
relaxes
before your mind
has figured out why.`,
    },
    {
      id: "poem-008",
      title: "The Last Page",
      image: null,
      imagePos: "top",
      imageSize: "md",
      content: `If you have made it
this far,
thank you.

Not for reading,
but for staying.

I know
how easy it is
to close a book.

I have closed
so many.

And I have stayed
for so few.`,
    },
    {
      id: "poem-009",
      title: "அவ்வளவும் அவள் தான்",
      image: "/images/aval-ulagam.png",
      imagePos: "top",
      imageOffset: -30,
      imageSize: "md",
      content: `அவள் வந்தப்பிறகு
ஏதும் மாறவில்லை
என் உலகம்
மட்டும்
அவளாகவே
மாறிவிட்டது
அவ்வளவு தான்`,
    },
  ],

  backCover: {
    image: "/images/back-cover.png",
    imageMode: "background",
    text: `"Some feelings refuse to stay quiet."\n\nA debut collection of poems about memory, distance, and the small ordinary gods we build out of the people we love.`,
  },
};