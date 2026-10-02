import type { BookData } from "@/types/book";

export const book: BookData = {
  title: "Between the Lines",
  subtitle: "A collection of thoughts and poems",
  publishedDate: "2026",

  cover: {
    title: "Between the Lines",
    subtitle: "A collection of thoughts and poems",
    image: null,
  },

  publication: {
    date: "2026",
    publisher: "Self Published",
    edition: "Digital First Edition",
    copyright: "© 2026 Praveenkanth. All rights reserved.",
    isbn: "",
  },

  author: {
    name: "Praveenkanth",
    image: null,
    introduction: `I write because some feelings refuse to stay quiet.

For most of my life I kept them folded neatly into the corners of notebooks — unfinished sentences, half-remembered evenings, names I never said out loud. This book is what happened when I finally let them out.

These pages are not a story with a beginning and an end. They are fragments. A train window. A kitchen light at 2 a.m. A hand I should have held longer.

If you find a piece of yourself in any of these lines, then it was never only mine to begin with.

— Praveenkanth`,
  },

  poems: [
    {
      id: "poem-001",
      title: "The Quiet Hours",
      // Example: put a matching image here.
      // image: "/images/quiet-hours.jpg",
      image: null,
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
  ],

  backCover: {
    image: null,
    text: `"Some feelings refuse to stay quiet."\n\nA debut collection of poems about memory, distance, and the small ordinary gods we build out of the people we love.`,
  },
};