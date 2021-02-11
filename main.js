//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'The truth about the life of a man is not what he does, but the legend which he creates around himself.'
    },
    {'author': 'Bette Davis', 
     'quote': 'The only way you can become a legend is in your coffin.'
    },
    {'author': 'Lauren Bacall', 
     'quote': 'Legends are all to do with the past and nothing to do with the present.'
    },
    {'author': 'Joyce Johnson', 
     'quote': 'Legend adheres to artists whose deaths seem the corollaries of their works.'
    },
    {'author': 'Helen Hayes', 
     'quote': 'Legends die hard. They survive as truth rarely does.'
    },
    {'author': 'Coco Chanel', 
     'quote': "Success is most often achieved by those who don't know that failure is inevitable."
    },
    {'author': 'John Wooden', 
     'quote': 'Things work out best for those who make the best of how things work out.'
    },
    {'author': 'Ernest Hemingway', 
     'quote': 'Courage is grace under pressure.'
    },
    {'author': 'Jim Rohn', 
     'quote': 'If you are not willing to risk the usual, you will have to settle for the ordinary.'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.'
    },
    {'author': 'Swami Vivekananda', 
     'quote': 'Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.'
    },
    {'author': 'Ellen DeGeneres', 
     'quote': "Sometimes you can't see yourself clearly until you see yourself through the eyes of others."
    },
    {'author': 'Walt Disney', 
     'quote': "All our dreams can come true if we have the courage to pursue them."
    },
    {'author': 'Confucius', 
     'quote': "It does not matter how slowly you go, so long as you do not stop."
    },
    {'author': 'Winston Churchill', 
     'quote': "Success is walking from failure to failure with no loss of enthusiasm."
    },
    {'author': 'Warren Buffett', 
     'quote': "Someone is sitting in the shade today because someone planted a tree a long time ago."
    },
    {'author': 'Vaibhav Shah', 
     'quote': "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them."
    },
    {'author': 'Dr. Seuss', 
     'quote': "Don't cry because it's over, smile because it happened."
    },
    {'author': 'Denzel Washington', 
     'quote': "Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me."
    },
    {'author': 'Mae West', 
     'quote': "You only live once, but if you do it right, once is enough."
    },
    {'author': 'Chris Grosser', 
     'quote': "Opportunities don't happen. You create them."
    },
    {'author': 'Christopher Reeve', 
     'quote': "Once you choose hope, anything's possible."
    },
    {'author': 'Albert Einstein', 
     'quote': "Try not to become a person of success, but rather try to become a person of value."
    },
    {'author': 'Nelson Mandela', 
     'quote': "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires."
    },
    {'author': 'Charles Darwin', 
     'quote': "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."
    },
    {'author': 'Helen Keller', 
     'quote': "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart."
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': "Great minds discuss ideas; average minds discuss events; small minds discuss people."
    },
    {'author': 'Mahatma Gandhi', 
     'quote': "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {'author': 'Frank Sinatra', 
     'quote': "The best revenge is massive success."
    },
    {'author': 'Walt Disney', 
     'quote': "The difference between winning and losing is most often not quitting."
    },
    {'author': 'Thomas Edison', 
     'quote': "I have not failed. I've just found 10,000 ways that won't work."
    },
    {'author': 'Malcolm Forbes', 
     'quote': "When you cease to dream you cease to live."
    },
    {'author': 'David Brinkley', 
     'quote': "A successful man is one who can lay a firm foundation with the bricks others have thrown at him."
    },
    {'author': 'Jonathan Swift', 
     'quote': "May you live every day of your life."
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': "No one can make you feel inferior without your consent."
    },
    {'author': 'Oprah Winfrey', 
     'quote': "Failure is another steppingstone to greatness."
    },
    {'author': 'Henry Ford', 
     'quote': "The whole secret of a successful life is to find out what is one's destiny to do, and then do it."
    },
    {'author': 'Jeff Bezos', 
     'quote': "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve."
    },
    {'author': 'Winston Churchill',
     'quote': "If you're going through hell, keep going."
    },
    {'author': 'Coco Chanel', 
     'quote': "In order to be irreplaceable one must always be different."
    },
    {'author': 'Oscar Wilde', 
     'quote': "What seems to us as bitter trials are often blessings in disguise."
    },
    {'author': 'Wayne Gretzky', 
     'quote': "You miss 100 percent of the shots you don't take."
    },
    {'author': 'Bruce Feirstein', 
     'quote': "The distance between insanity and genius is measured only by success."
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
