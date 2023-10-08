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
      answer: "Seeing an eclipse on Earth is a bit like catching a shooting star—it's pretty rare! This is because the Moon's shadow on Earth isn't very wide, so only a small part of our planet gets to see the eclipse. To be in the right spot, you have to be on the side of Earth where the Sun is shining and where the Moon's shadow is passing by. It's like finding a hidden treasure in the sky, and not everyone gets to see it every time!"
  },
  {
      question: 'What causes the Sun, Moon, and Earth to align?',
      answer: "These special alignments happen because of the way the Earth and the Moon move around the Sun. The Moon circles around Earth, while Earth travels in its path around the Sun. Their positions relative to each other and the Sun keep changing, creating various phases and alignments."
  },
  {
      question: 'How often do eclipses occur?',
      answer: "There are about 4-7 eclipses per year."
  },
  {
      question: 'How do scientists know when and where eclipses will occur?',
      answer: "Astronomers face a puzzle when it comes to understanding how Earth, the Moon, and the Sun move in space. Think of it like trying to navigate a complex traffic system with Earth, the Moon, and the Sun as three special vehicles. These vehicles are special as they are fueled by gravity, creating a traffic challenge! To unravel this cosmic traffic puzzle, scientists rely on mathematics, especially the equations developed by Sir Isaac Newton's laws of motion. If you would like to learn more about Sir Isaac Newton visit our other page. They put all the details of the vehicles, such as the sizes and shapes of these cosmic vehicles, into advanced math equations. Then, they employ super-smart computers to simulate the journey forward or backward in time. This helps them predict where the Moon and Sun will be as observed from Earth. Now, here's the exciting part: eclipses are like unique intersections in this traffic system. The computer can identify these specific moments when the Moon, Earth, and the Sun align in a particular way. These eclipse predictions are so precise they can tell us exactly when an eclipse will occur, right down to less than a minute, even hundreds of years into the future! It's similar to having a GPS that predicts these amazing events in the sky."
  },
  {
      question: 'What is the difference between a lunar and solar eclipse?',
      answer: "The main difference between lunar and solar eclipse is that lunar eclipses occur at the full moon phase whereas solar eclipses occur at the new moon phase. Lunar eclipses are like a special nighttime show during the full moon phase. It's when Earth gets right in the middle between the Moon and the Sun. This makes Earth's shadow cover the Moon slowly, and sometimes, the Moon can turn a cool red color during this event. It takes a few hours for all of this to happen, and the best part is that people from half of Earth can see it! Solar eclipses, on the other hand, are like secret daytime games and only happen during the new moon phase. This time, it's the Moon that stands between Earth and the Sun. During a solar eclipse, the Moon's shadow falls on Earth, making the Sun look like it's playing peek-a-boo. But here's the tricky part - even though solar eclipses happen as often as lunar eclipses, they are a lot rarer to see because they can only be seen from a tiny part of Earth each time. It's like finding a hidden treasure!"
  },
  {
      question: "What is an eclipse season and why do they occur approximately every six months (or twice a year)?",
      answer: "An eclipse season is like a special time in the sky when the Sun, Moon, and Earth line up just right for eclipses to happen. These moments occur roughly every six months. During these times, the Moon and Earth are perfectly lined up on the same track in space, making it possible for Earth's shadows to fall onto the Moon creating the lunar eclipse."
  }

];
