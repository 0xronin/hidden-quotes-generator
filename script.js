const quotes = {
    "1": '"Live like a Dead man."',
    "2": '"Any fool can talk wisely, The wiser simply does."',
    "3": '"We solve the right problems in all the wrong ways."',
    "4": '"Every second you spend scrolling social media apps;playing video games;watching netflix/yt is making money for somebody else"',
    "5": '"Try again tomorrow."',
    "6": '"You\'ll be better off getting rejected than to have never attempted."',
    "7": '"Don\'t dictate, Demonstrate."',
    "8": '"Reject Thought Leaders, \nThey have no skin in the game."',
    "9": '"The fight has always been about either, I am right, or, You are wrong."',
    "10": '"Everyone is trying to emboss their ideologies on everybody around them."',
    "11": '"Never make people see the world through your eyes, Just tell them they can see, and let them discover the world the way they want to."',
    "12": '"Stop preaching, Start practicing."',
    "13": '"We made the world a circus by acting like clowns all the time."',
    "14": '"Pay the teacher not the school."',
    "15": '"We are the slaves of our own future, cease anticipation, live free."',
    "16": '"Ultimately, Everything Restores."',
    "17": '"Don\'t beg, Build."',
    "18": '"Getting rejected over and over again is the pointer to future success."',
    "19": '"It is not the lack of information/resources/aptitude, It is the lack of determination."',
    "20": '"All identities are fabrications of the mind, Including the mind itself."',
    "21": '"The one, unconcerned of approval, remain unknown to the world."',
    "22": '"A Leader need not count followers."',
    "23": '"Plainness living is a luxury."',
    "24": '"Goodness lights the World."',
    "25": '"Humans need less, But want more."',
    "26": '"With out self "',
    "27": '"Commitment and detachment are curiously similar."',
    "28": '"Overstimulation dismantled Precognition."',
    "29": '"Minimize unnecessary fluctuations."',
    "30": '"Preferences are distractions in disguise."',
    "31": '"Energy flows in the direction of faith."',
    "32": '"Get out of the habit of complaining, Get busy creating."',
    "33": '"If you don\'t believe in something, don\'t talk about it."',

}


document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()* 32)+1];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

});