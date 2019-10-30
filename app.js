



let homeContent = `<div class="content-wrapper">
<section class="home ">
    <div class="greetings content-card">
        <div class="greetings-title">
            <h1 class="t1"> HI </h1>
            <h1 class="t2"> My Name is <span>Nikola</span> </h1>
            <h1 class="t3"> I am a Front End Developer </h1>
        </div>

    </div>

</section>`;


let aboutContent = `<section class="about-wrapper">
<div class="about-section about-content-card">
    <div class="about-content">
        <div class="about-title">
            <h1>About</h1>
        </div>
        <div class="about-text">
            <p> My name is Nikola Đorđević.<br>
                In 2018 I decided to change my career. <br>
                I wanted to learn about what I was really interested in and what I enjoyed doing in my free
                time<br>
                and so I began putting serious effort into creating web sites.<br>
                That same year, 2018, I quit my job and devoted myself completely to studying and creating. <br>
                <br>
                I had 2 possible roads ahead of me: <br>
                1 – which would lead me back to university<br>
                2 – which would mean for me to study on my own<br>
                I decided to study on my own.
                <br> I began with <i class="fab fa-html5"></i> and <i class="fab fa-css3-alt"></i> .

                I created a few landing pages.
                As I have already worked in PhotoShop, PrmierPro, AfterEffects
                I
                independently created mock-ups and turned them into code.
                <br>When I felt ready to move on, I turned to <i class="fab fa-js"></i> .<br>
                <br>Then I realized that I needed someone to help me find the right direction.
                <br>ComTrade had a Front End Development course, with a strong focus on JS.
                I enrolled in it.<br> In September 2019, I graduated with a grade 10.<br>
                As I was studying, I also worked on JS algorithms on the <i class="fab fa-free-code-camp"></i>
                and I
                created pages and small
                application which are not complete as they have been constructed with a specific idea and
                testing of
                new options. When I felt comfortable working with JS i went on to learn <i
                    class="fab fa-react"></i>
                and to create
                applications with it.<br><br>
                Where is the road leading me now?
                I want to be a professional web developer and to progress my knowledge.
            </p>
        </div>
    </div>
</div>
</section>`;

let workContent = `
<section class="work-wrapper">
        <div class="work-content work-content-card">
            <div class="work-gallery">

                <div class="work-project-card card-6">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>

                <div class="work-project-card card-5">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>
                <div class="work-project-card card-4">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>
                <div class="work-project-card card-3">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>
                <div class="work-project-card card-2">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>
                <div class="work-project-card card-1">
                    <h1 class="work-project-card-title " data-depth=".1">
                        Name Of The Project
                    </h1>
                    <a href=""><img src="./moviesearch.jpg"> </a>
                    <p class="button-project btn-github ">Go to GITHUB</p>
                </div>
            </div>
        </div>
    </section>
`;

let skillsContent = `<div class="skills-section">
<div class="skills-content content-card">
    <div class="skills-title">
        <h1>Skills</h1>
    </div>
    <div class="skills-text">
        <p>My main expertise is Front End Development</p>
        <p> using HTML, CSS and JavaScript.</p>
        <p>For animations I use GSAP and Anime.js </p>
        <p>I am interested in animations and interactive layouts.</p>

        <p> I am also familiar with Bootstrap and SASS.<p>



    </div>
</div>
</div>`;





const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const skills = document.querySelector('#skills');

let contentBox = document.querySelector('.content-wrapper');
let phoneContact = document.querySelector('.phone-contact');
let enter = document.querySelector('.preloader-wrapper');




document.addEventListener('DOMContentLoaded', () => {
    let enterSequence = new TimelineMax({})
    let openSkills = new TimelineMax({})
    let openHome = new TimelineMax({})
    let openAbout = new TimelineMax({})
    let openWork = new TimelineMax({})
    let openContact = new TimelineMax({ paused: true, reversed: true })

    contentBox.innerHTML = '';
    contentBox.innerHTML = homeContent;


    enterSequence
        .from('.phone-contact', 1, {
            x: -300
        })
        .from('#home', .1, {
            opacity: 0
        })
        .from('#home', .3, {
            y: 400,
            x: 300,
            fontSize: 250
        })
        .from('#about', .1, {
            opacity: 0
        })
        .from('#about', .3, {
            y: 400,
            x: 100,
            fontSize: 250
        })
        .from('#work', .1, {
            opacity: 0
        })
        .from('#work', .3, {
            y: 400,
            x: -100,
            fontSize: 250
        })
        .from('#skills', .1, {
            opacity: 0
        })
        .from('#skills', .3, {
            y: 400,
            x: -300,
            fontSize: 250
        })
        .from('.interface-settings li', 1, {
            x: 550
        })
        .from('.home', 1, {
            opacity: 0,
            x: -300
        })
        .from('.t1', .1, {
            opacity: 0,

        })
        .from('.t2', .1, {
            opacity: 0,

        })
        .from('.t3', .1, {
            opacity: 0,

        })






    home.addEventListener('click', () => {
        contentBox.innerHTML = '';
        contentBox.innerHTML = homeContent;

        openHome
            .from('.home', 1, {
                opacity: 0,
                x: -300
            })
            .from('.t1', .1, {
                opacity: 0,

            })
            .from('.t2', .1, {
                opacity: 0,

            })
            .from('.t3', .1, {
                opacity: 0,

            })
    })

    about.addEventListener('click', () => {
        contentBox.innerHTML = '';
        contentBox.innerHTML = aboutContent;

        openAbout
            .from('.about-section', 1, {
                opacity: 0,
                x: 300
            })
            .from('.about-title h1', .1, {
                opacity: 0

            }, 'ww')
            .from('.about-title h1', .1, {
                opacity: 1

            })
            .from('.about-title h1', .1, {
                opacity: 0

            })
            .from('.about-title h1', .1, {
                opacity: 1

            })
            .from('.about-title h1', .1, {
                opacity: 0

            })
            .from('.about-text p', .2, {
                opacity: 0
            })
    })
    work.addEventListener('click', () => {
        contentBox.innerHTML = '';
        contentBox.innerHTML = workContent;


        openWork
            .from('.work-content-card', 1, {
                opacity: 0,
                x: -300,

            })
            .from('.card-5', .2, {
                opacity: 0
            })
            .from('.card-2', .2, {
                opacity: 0
            })
            .from('.card-3', .2, {
                opacity: 0
            })
            .from('.card-6', .2, {
                opacity: 0
            })
            .from('.card-1', .2, {
                opacity: 0
            })
            .from('.card-4', .2, {
                opacity: 0
            })




    })
    skills.addEventListener('click', () => {
        contentBox.innerHTML = '';
        contentBox.innerHTML = skillsContent;

        openSkills
            .from('.skills-content', .6, {
                opacity: 0,
                x: 300,

            })
            .from('.skills-title h1', .1, {
                opacity: 0

            }, 'ww')
            .from('.skills-title h1', .1, {
                opacity: 1

            })
            .from('.skills-title h1', .1, {
                opacity: 0

            })
            .from('.skills-title h1', .1, {
                opacity: 1

            })
            .from('.skills-title h1', .1, {
                opacity: 0

            })
            .from('.skills-text', .2, {
                opacity: 0
            }, 'ww', 1)
    })

    phoneContact.addEventListener('click', () => {
        phoneContact.classList.toggle('opened');
        openContact.reversed() ? openContact.play() : openContact.reverse();

        openContact
            .to('.interface-settings li', .3, {
                x: 550,
                ease: Power4.easeOut
            })

    })

    // MUSIC 
    let musicBtn = document.querySelector('.sound-settings');
    let music = document.querySelector('.player');
    music.play()

    musicBtn.addEventListener('click', () => {
        let soundIcon = document.querySelector('.fa-volume-up');
        music = document.querySelector('.player');
        if (musicBtn.classList.contains('muted')) {
            music.play();
            musicBtn.classList.remove('muted');
            soundIcon.style.color = "var(--y-non-selected-text)";
        } else {
            music.pause();
            musicBtn.classList.add('muted');
            soundIcon.style.color = "red";

        }

    })


})


