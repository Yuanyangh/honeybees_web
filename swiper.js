$(document).ready(async function () { 
    
    const teamMembers = [
        {
            name: 'Diana Low',
            image: 'asssets/images/TeamMembers/Diana_Low.png',
            role:  ['Senior Personal Wealth Manager'],
            qualification: ['5x MDRT Qualifier'],
            description: `Being a financial services consultant, I see myself being tasked with a big responsibility to educate and guide my clients through big financial decisions to achieve their goals in life. Through my work, the most rewarding and fulfilling experiences is being able to develop relationships with people from different walks of life and making significant impacts on their lives.\n\nSince I began working with Honeybees, I have learned that success comes from a combination of hard work and team work. As the saying goes, If you want to go fast, go alone. If you want to go far, go together.\n\nUnder Yuan Shyuan’s guidance, not only have I gained valuable skillset, I have also developed the right mindset to strive In this business. He has gone above and beyond to help me with my personal growth and development. I believe the right mindset drives the right habit which drives the right outcome.`
        },
        {
            name: 'Ian Lin',
            image: 'asssets/images/TeamMembers/Ian_Lin.png',
            role:  ['Personal Wealth Manager'],
            qualification: ['2x COT Qualifier', '4x MDRT Qualifier'],
            description: `As a financial services consultant, I am given the responsibility of taking care of my client's financial well-being. With my clients, I take on the role of an educator, a friend and an expert, and I walk with them throughout the entire life journey. I help them identify gaps in protection and accumulation goals, craft for them customised strategies, explain to them how the solutions work and be there for them through thick and thin.\n\nI am glad to be part of my team, Honeybees. It is an amazing and fun team with a shared learning system and peer support system to aid in our personal development. My boss, Yuan Shyuan, has been a great leader and mentor. I have never met anyone who is more serious about my career and personal development than he is. I am always tremendously inspired by his vision, drive, intelligence, diligence and mindset, and am always enlightened by his unique and profound perspectives that upon deep internalisation, allow me to propel my personal growth further. Honeybees is where I want to be for the entirety of my career.`
        },
        {
            name: 'Wang Yaxiang',
            image: 'asssets/images/TeamMembers/Wang_Yaxiang.png',
            role:  ['Senior Premier Consultant', 'Senior Personal Wealth Manager'],
            qualification: ['1x COT Qualifier', '4x MDRT Qualifier'],
            description: `In my career, I have met many people and I'm truly honoured to be in service to many of them. I'm grateful that they have entrusted their financial goals with me and I'm deeply obligated to walk the journey with them together until the goals fulfilled.\n\nI believe that every small steps that we take today makes a huge difference in the future, and the only difference between past and future is now.\n\nIn Honeybees, we uphold the industry service standard and level of commitment to serve and help anyone and everyone who deserves a memorable financial planning journey.`
        },
        {
            name: 'Kylie Ng',
            image: 'asssets/images/TeamMembers/Kylie_Ng.png',
            role:  ['Financial Services Consultant'],
            qualification: ['2x MDRT Qualifier'],
            description: `I have never thought that I would be working in the financial industry but I am really blessed to be in this career which have really changed my life.\n\nThis job gave me the unique opportunities to speak to people of different age group and industries which I would never have the chance to. At the start, it felt scary speaking to people older than me, but over the past few years, my perspectives and knowledge has expanded so much that talking to these people feels like I’m talking to my friends.\n\nWith a flexible working schedule, it is great for me to schedule meetings with clients that work best for me, and to manage my personal matters easier.`
        },
        {
            name: 'Kenneth Chng',
            image: 'asssets/images/TeamMembers/Kenneth_Chng.png',
            role:  ['Personal Wealth Manager'],
            qualification: ['3x MDRT Qualifier'],
            description: `When it comes to the insurance industry, most people have very negative things to talk about it. Because of the stigma for this industry, it makes people feel insecure to find out and understand about financial planning. \n\nHoneybees is a place where we take huge pride in what we do because we believe in our purpose. To empower those around us to make the right financial decision but at the same time not forgetting how to “做人”.\n\nOur six core values of Honeybees being “Gratitude”, “Humility”, “Teamwork”, “Open Communication”, “Discipline” and “Commitment to Growth” encompasses important aspects of being a better version of ourselves everyday which is core to ANY career.  This is what makes me feel extremely confident and assure of my future. Being part of a team determined to set a new standard, making everyone around us have a positive view of our profession.`
        },
        {
            name: 'Pamela Ng',
            image: 'asssets/images/TeamMembers/Pamela_Ng.png',
            role:  ['Senior Personal Wealth Manager'],
            qualification: ['2x MDRT Qualifier'],
            description: `At Honeybees, you can get the support that grows you and unlocks the potential within.\n\nI had always been told that the journey to success is always lonely but I never once felt alone here in honeybees.\n\nAs a team, we can go much further. The leaders are very helpful and they will check in with you regularly. We get valuable lessons and because they are genuinely interested in seeing us grow. \n\nLikewise, we are also encouraged to reflect regularly on our learning which helps to internalise everything.\n\nFundamentals and values are highly emphasised which gives you a strong foundation to move forth and uphold any challenges.`
        },
        {
            name: 'Jacqueline Tan',
            image: 'asssets/images/TeamMembers/Jacqueline_Tan.png',
            role:  ['Personal Wealth Manager'],
            qualification: ['2x MDRT Qualifier'],
            description: `I used to be a Human Resources (HR) practitioner for 6 years before I decided on a mid-career switch to join AIA Honeybees in late 2021. I started off without any prior finance or sales background and was once skeptical about this industry like many others. Thankfully I decided to keep an open mind on the opportunity as it was a life-changing profession for me after I met my mentor, Ryan Yeo, who was my poly classmate. I was very inspired by how he grew tremendously in both his personal and career development. I knew that in financial advisory, the people I can value add to is everyone rather than just constraining within a company as a HR. \n\n
            The culture and environment makes a lot of difference for an individual to grow and learn, a place where their people are being valued as asset of the company. With the strong support, guidance and coaching from the team, I was able to achieve my 1st MDRT accolade within 4 months after joining the industry. \n\nI have benefited so much from this profession and I believe you will too. Remember this, “You’re always one decision away from a total different life”.`
        },
        {
            name: 'Goh Li Ying',
            image: 'asssets/images/TeamMembers/Goh_Li_Ying.png',
            role:  ['Financial Services Consultant'],
            qualification: ['2x MDRT Qualifier'],
            description: `“Listen with an open mind, and respond with a sincere heart.” This is how I serve my clients — all on relationship building, not sales. It is because of the fundamentals that I’ve learnt in Honeybees, that enable me to financially educate my clients wholeheartedly and journey together with them through every milestones in life. \n\nHere in Honeybees, I was guided to achieve exponential growth and broaden my perspectives so I can share more with the world.\n\nI am extremely grateful to my mentors here for showing me the ropes since day 1 and guiding me on how I can grow a long-term and sustainable business so i can be here for my clients in the long long run. \n\nIn Honeybees, we work hard outside but we always remember to come home. that I know no matter what I face outside, I can always come home. I’m so proud to be a part of the Honeybees .`
        },
        {
            name: 'Lim Yu Heng',
            image: 'asssets/images/TeamMembers/Lim_Yu_Heng.png',
            role:  ['Personal Wealth Manager'],
            qualification: ['2x MDRT Qualifier'],
            description: `Being an engineer by trade previously, switching industries was not a simple decision to make, joining an unfamiliar field with no technical background. However, ever since joining honeybees, with constant guidance from the mentors and structured training, transition was smooth and simple. \n\nAt honeybees, everyone is eager to grow as a person while striving for our individual goals and purposes. Being in a conducive environment which adopts the “open communication” core value, everyone is willing to share ideas and experiences, it enhances our personal development. \n\nHoneybees is more than just another agency, we are a family. Relationships built here goes beyond work. Growing together into better versions of ourselves. `
        },
    ];
    

    function createTeamMemberDiv(member) {
        const div = document.createElement('div');
        div.classList.add('honeyBeeTeamReview');
        let quali_str = '', role_str = '';
        member.qualification.forEach(qual => {
            quali_str += `<li>${qual}</li>`
        });
        member.role.forEach(r => {
            role_str += `<h4>${r}</h4>`
        })

        const html = `
            <h2>${member.name}</h2>
            ${role_str}
            <p>${member.description}</p>
            <div class="teg-btn">
                <ul>
                    ${quali_str}
                </ul>
            </div>
        `;

        div.innerHTML = html;
        return div;
    }

    function createSwiperDiv(member) {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');

        const html = `
            <img src="${member.image}">
        `;

        div.innerHTML = html;
        return div;
    }

    async function appendTeamMembers() {
        console.log("appendTeamMembers()");
        const teamContainer = document.getElementById('honeyBeeTeam');
        const swiperContainer = document.getElementById('swiper-wrapper');
        teamMembers.forEach(member => {
            const memberDiv = createTeamMemberDiv(member);
            teamContainer.appendChild(memberDiv);
            swiperContainer.appendChild(createSwiperDiv(member));
        });
    }

    async function InitializeTeamMembers() {
        await appendTeamMembers();
    }

    await InitializeTeamMembers();

    var swiper = new Swiper(".mySwiper", {
        // centeredSlides: true,
        // loop: true,
        // slidesPerView: 3,
        // spaceBetween: -50,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        coverflowEffect: {
        rotate: 10,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        },
        autoplay: {
        delay: 7500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        on: {
            init: function() {
                var currentIndex = this.realIndex;
                
                var children = document.getElementById("honeyBeeTeam").children;
                for (var i = 0; i < children.length; i++) {
                    if (i === currentIndex) {
                        children[i].style.display = "block"; // Make the active child visible
                        // Or using classList to remove 'hidden' class if you prefer the class-based approach
                        // children[i].classList.remove('hidden');
                    } else {
                        children[i].style.display = "none"; // Hide other children
                        // Or adding 'hidden' class to others
                        // children[i].classList.add('hidden');
                    }
                }
            },
            slideChange: function () {
                var currentIndex = this.realIndex;
                                
                var children = document.getElementById("honeyBeeTeam").children;
                for (var i = 0; i < children.length; i++) {
                    if (i === currentIndex) {
                        children[i].style.display = "block"; // Make the active child visible
                        // Or using classList to remove 'hidden' class if you prefer the class-based approach
                        // children[i].classList.remove('hidden');
                    } else {
                        children[i].style.display = "none"; // Hide other children
                        // Or adding 'hidden' class to others
                        // children[i].classList.add('hidden');
                    }
                }
            },
        },
    });
})
