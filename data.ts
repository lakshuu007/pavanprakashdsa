
import { AppData } from './types';

export const DATA: AppData = {
  instructor: {
    name: "pavanprakashdsa",
    tagline: "Master DSA in Java & Python",
    about: "",
    email: "pavanprakash@example.com",
    youtubeChannel: "#",
  },
  classes: [
    {
      id: "1",
      date: "5/2/2026",
      topic: "Pattern Programming-1",
      youtubeLink: "#",
      notesLink: "#",
      homework: "#"
    },
    {
      id: "2",
      date: "6/2/2026",
      topic: "Pattern Programming-2",
      youtubeLink: "#",
      notesLink: "#",
      homework: "#",
      practice: [{ label: "Solve Questions", url: "#" }]
    },
    {
      id: "3",
      date: "7/2/2026",
      topic: "Pattern Programming-3",
      youtubeLink: "#",
      notesLink: "#",
      homework: "#",
      practice: [
        { label: "1. Hackerrank Question", url: "#" },
        { label: "2. GeekForGeeks Question", url: "#" }
      ]
    },
    {
      id: "4",
      date: "8/2/2026",
      topic: "Pattern Programming-4 Finale",
      youtubeLink: "#",
      notesLink: "#",
      practice: [
        { label: "PrepInsta", url: "#" },
        { label: "PYNative", url: "#" },
        { label: "Beginner DSA - HackerRank", url: "#" }
      ]
    },
    {
      id: "5",
      date: "9/2/2026",
      topic: "Introduction to ArrayList(Java) & List(Python) : Part 1",
      youtubeLink: "#",
      notesLink: "#"
    },
    {
      id: "6",
      date: "9/2/2026",
      topic: "Introduction to ArrayList(Java) & List(Python) : Part 2",
      youtubeLink: "#",
      notesLink: "#"
    },
    {
      id: "7",
      date: "10/2/2026",
      topic: "DSA : Prefix Sum Array + Practice",
      youtubeLink: "#",
      notesLink: "#",
      practice: [
        { label: "Simple-Array-Sum [HackerRank]", url: "#" },
        { label: "A Very Big Sum [HackerRank]", url: "#" },
        { label: "Running sum of 1D Array [LeetCode]", url: "#" }
      ]
    },
    {
      id: "8",
      date: "11/2/2026",
      topic: "DSA : Nested List + Hackerrank",
      youtubeLink: "#",
      notesLink: "#",
      practice: [
        { label: "Mini-Max Sum [HackerRank]", url: "#" },
        { label: "StairCase [HackerRank]", url: "#" },
        { label: "Diagonal Difference [HackerRank]", url: "#" }
      ]
    },
    {
      id: "9",
      date: "12/2/2026",
      topic: "Brute Force Method",
      youtubeLink: "#",
      notesLink: "#",
      practice: [{ label: "Two Sum [LeetCode]", url: "#" }]
    },
    {
      id: "10",
      date: "13/2/2026",
      topic: "Sub-Arrays: Brute Force Method",
      youtubeLink: "#",
      notesLink: "#",
      homework: "Revise all topics covered!"
    }
  ],
  resources: {
    java: [
      { title: "Java Collections Resources", url: "#", type: "guide" },
      { title: "HackerRank Java Track", url: "#", type: "practice" }
    ],
    python: [
      { title: "Python List Mastery", url: "#", type: "guide" },
      { title: "Pythonic Logic Patterns", url: "#", type: "article" }
    ]
  }
};
