
import { AppData } from './types';

export const DATA: AppData = {
  instructor: {
    name: "pavanprakashdsa",
    tagline: "Master DSA in Java & Python",
    about: "",
    email: "pavanprakash@example.com",
    youtubeChannel: "https://www.youtube.com/results?search_query=jai+ballaya+academy",
  },
  classes: [
    {
      id: "1",
      date: "5/2/2026",
      topic: "Pattern Programming-1",
      youtubeLink: "https://www.youtube.com/watch?v=f1IVU3mKvv8",
      notesLink: "https://docs.google.com/document/d/1niaekpgZB60z-PXDVEVlcrdS7_Z2sYMblH0F-gnf3d4/edit?tab=t.0",
      homework: "#"
    },
    {
      id: "2",
      date: "6/2/2026",
      topic: "Pattern Programming-2",
      youtubeLink: "youtube.com/watch?v=ppmBHL1a7YM&feature=youtu.be",
      notesLink: "https://docs.google.com/document/d/1RjJvfKmbQUDwlVWIAey5X75_rlItXTWYqY7Zg87odKk/edit?tab=t.0",
      homework: "#",
      practice: [{ label: "Solve Questions", url: "#" }]
    },
    {
      id: "3",
      date: "7/2/2026",
      topic: "Pattern Programming-3",
      youtubeLink: "https://www.youtube.com/watch?v=Dk4Iua3V5K8",
      notesLink: "https://docs.google.com/document/d/1TaTZ9AnzBv2oI_TB0uE-SIlVh8aCjo3-axfeQN6MJVo/edit?tab=t.0",
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
      youtubeLink: "https://www.youtube.com/watch?v=c-effdypJhI",
      notesLink: "https://docs.google.com/document/d/1Qh65dI8p0SmOVZQi7yHrDasJMVGITfcBmKzQGnW94Uc/edit?tab=t.0",
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
      youtubeLink: "youtube.com/watch?v=KaDtZsyDsXc&feature=youtu.be",
      notesLink: "https://docs.google.com/document/d/16Jz3nenvEhpKn-cgu6C07zKuN5C-j1UN4ulfjXIpZ90/edit?tab=t.0"
    },
    {
      id: "6",
      date: "9/2/2026",
      topic: "Introduction to ArrayList(Java) & List(Python) : Part 2",
      youtubeLink: "https://www.youtube.com/watch?v=Hgr_Py6nXnA",
      notesLink: "https://docs.google.com/document/d/16Jz3nenvEhpKn-cgu6C07zKuN5C-j1UN4ulfjXIpZ90/edit?tab=t.0"
    },
    {
      id: "7",
      date: "10/2/2026",
      topic: "DSA : Prefix Sum Array + Practice",
      youtubeLink: "youtube.com/watch?v=PnIOEPDATjw&feature=youtu.be",
      notesLink: "https://docs.google.com/document/d/1X2xRCUPv3CNzHgBr7kpBVwsLhVMhVtu3WmCTLNuvsGk/edit?tab=t.0",
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
      youtubeLink: "youtube.com/watch?v=Wg834zAVliw&feature=youtu.be",
      notesLink: "https://docs.google.com/document/d/1rm2SbVoUAVapYgnWmDw6myH7cnSBirBCtIZ_HXpE4_E/edit?tab=t.0",
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
      youtubeLink: "https://www.youtube.com/watch?v=-WK9WPhuKB4",
      notesLink: "https://docs.google.com/document/d/1EP1zgKUo0CyUa2c1RJbpbEYZbWjjuYO2h2oN8N44x1g/edit?tab=t.0",
      practice: [{ label: "Two Sum [LeetCode]", url: "#" }]
    },
    {
      id: "10",
      date: "13/2/2026",
      topic: "Sub-Arrays: Brute Force Method",
      youtubeLink: "https://www.youtube.com/watch?v=XzK5_8cMA6g",
      notesLink: "https://docs.google.com/document/d/1I7hzNo9UurX4whU_7MnjrYGuIcZ4uEQS4XDjauvkVIE/edit?tab=t.0",
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
