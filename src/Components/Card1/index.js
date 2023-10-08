import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/base';
import { toBeRequired } from '@testing-library/jest-dom/matchers';

export const itemData = [
  {
      question: 'How do eclipses occur?',
      answer: "Eclipses happen when the Sun, Moon, and Earth line up just right. The Moon and Earth are the stars of this cosmic show, and there are two main types: lunar and solar eclipses.\nImagine a lunar eclipse like Earth giving the Moon a hug. It's when Earth gets in the way of sunlight reaching the Moon because it's positioned right between the Moon and the Sun.\nNow, picture a solar eclipse as the Moon giving the Earth a hug. This time, it's the Moon that stands between Earth and the Sun, blocking the sunlight from reaching us down here on Earth. These eclipse events are like nature's amazing light shows in the sky!"
  },
  {
      question: 'Why do only some people on Earth see an eclipse at a given time?',
      answer: "Seeing an eclipse on Earth is like finding a cosmic treasure—it's not something you see every day. The Moon's shadow is quite narrow, so only a small part of our planet gets to witness this incredible event. If you want to see it, you must be on the sunny side of Earth, where the Moon's shadow passes by. It's super important to wear special protective gear, like eclipse glasses or use a solar viewer when you watch a solar eclipse. The sun will hurt your eyes if you look at it without protective gear."

    },
  {
      question: 'What causes the Sun, Moon, and Earth to align?',
      answer: "These special alignments happen because of the way the Earth and the Moon move around the Sun. The Moon circles around Earth, while Earth travels in its path around the Sun. Their positions relative to each other and the Sun keep changing, creating various phases and alignments."
    },
  {
      question: 'How often do eclipses occur?',
      answer: "There are about 4-7 eclipses per year. There are two to four lunar eclipses each year. These are like when the Moon puts on a special shadowy show, and people from many places on Earth can watch it. So, lunar eclipses are more common. Solar eclipses are a bit rarer. There are about two to five of them each year. This is when the Moon covers up the Sun like a giant cosmic curtain. But you can only see a total solar eclipse from a small part of the Earth, and it doesn't happen often in any one place."
  },
  {
      question: 'How do scientists know when and where eclipses will occur?',
      answer: "Astronomers have a puzzle to understand how Earth, the Moon, and the Sun move in space. It's like navigating a traffic system, with these celestial bodies as special vehicles powered by gravity. To solve this, scientists use math, especially Newton's laws of motion. They put the details of these vehicles into equations, then use super-smart computers to predict where the Moon and Sun will be. Eclipses are like unique intersections in this traffic. Computers spot these moments when the three align precisely, predicting eclipses down to less than a minute for hundreds of years. It's like having a celestial GPS!"
    },
  {
      question: 'What is the difference between a lunar and solar eclipse?',
      answer: "The main difference between lunar and solar eclipse is that lunar eclipses occur at the full moon phase whereas solar eclipses occur at the new moon phase. "
    },
  {
      question: 'What is a lunar eclipse?',
      answer: "A lunar eclipse is like a game of hide-and-seek in space. It happens when the Earth stands between the Sun and the Moon, creating a shadow on the Moon. This shadow has two parts: a lighter one and a darker one. When the Moon enters the darker part, it becomes completely hidden, and we call it a total lunar eclipse. The tricky part is they don't align all the time due to the Moon and Earth being a bit tilted in their orbits. So, lunar eclipses are like a rare surprise in the sky, making them even more special!"
   },
  {
    question: 'What is a solar eclipse?',
    answer: "A solar eclipse is like a game of cosmic peek-a-boo. It happens when the Moon slides right in between the Sun and Earth, covering up the Sun's light, either partially or completely. Picture the Moon having two shadows: a light one and a dark one. When the Moon's darker shadow falls on Earth, that's when we get a total solar eclipse, and the Sun disappears for a little while. Solar eclipses are quite rare because the Moon's orbit is tilted compared to Earth's orbit. So, catching a solar eclipse is like finding a hidden treasure in the sky, and not everyone gets to see it every time!"
    },
  {
      question: "What is an eclipse season and why do they occur approximately every six months (or twice a year)?",
      answer: "An eclipse season is like a special time in the sky when the Sun, Moon, and Earth line up just right for eclipses to happen. These moments occur roughly every six months. During these times, the Moon and Earth are perfectly lined up on the same track in space, making it possible for Earth's shadows to fall onto the Moon creating the lunar eclipse."
  }
];
