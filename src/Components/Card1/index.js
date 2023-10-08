import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/base';
import { toBeRequired } from '@testing-library/jest-dom/matchers';

export const itemData = [
  {
      question: 'How do eclipses occur?',
      answer: "Eclipses occur due to the alignment and interaction of the Sun, Earth, and Moon, which is influenced by their positions and the geometry of their orbits. The key concepts involved in understanding eclipses are the tilt of the Earth's axis and the geometry of the Moon, Earth and Sun. There are two types: solar and lunar eclipses. We will talk about them more later on."
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
       question: 'What is a Total Solar Eclipse?',
       answer: "A total solar eclipse happens when the Moon slides right between the Sun and Earth, covering up the Sun completely. If you're in the middle of where this shadow touches Earth, you'll see something incredible! The sky will get dark, and if the weather is good, you can peek at the Sun's outer glow called the corona without special glasses, but only for a little while. The next total solar eclipse in the U.S. is coming on April 8, 2024!"
    },
{
        question: 'What is a Annular Solar Eclipse?',
        answer: "An annular solar eclipse is like a space ring! It happens when the Moon slides between the Sun and Earth but is far away from us. Since it's farther away, it seems smaller and can't cover the Sun entirely. So, when this happens, the Sun looks out from around the Moon, making it look like a ring in the sky making it a really cool phenomenon. The next time you can see this in the U.S. will be on Oct. 14, 2023!"
    },
{
        question: 'What is a Partial Solar Eclipse?',
        answer: "A partial solar eclipse is when the Moon scoots between the Sun and Earth, but they're not in a straight line, only a part of the Sun gets covered, making it look like a crescent in the sky. It’s like eating a part of a cookie.Even when there's a total or annular eclipse happening somewhere, people outside that special spot can still see this cool crescent shape in the sky!"
    },
    {
        question: 'What is a Hybrid Solar Eclipse',
        answer: "Sometimes, during a solar eclipse, it's like a surprise! As the Moon's shadow travels across the round Earth, the eclipse can change from being an annular one (like a space ring) to a total one. We call this a hybrid solar eclipse. It's like the eclipse can't decide whether to be a ring or a total one, so it's both at different places on Earth!"
        },
  {
      question: "What is an eclipse season and why do they occur approximately every six months (or twice a year)?",
      answer: "An eclipse season is like a special time in the sky when the Sun, Moon, and Earth line up just right for eclipses to happen. These moments occur roughly every six months. During these times, the Moon and Earth are perfectly lined up on the same track in space, making it possible for Earth's shadows to fall onto the Moon creating the lunar eclipse."
  },
  {
    question: 'Fun Fact',
    answer: "Solar eclipse allows NASA extend research on the Sun’s corona as it's more visible during that time. It allows us to answer some questions such as how heat and energy are transferred and how the Sun affects the Earth’s atmosphere."
    },

];
