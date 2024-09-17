$(document).ready(async function () {
  const teamMembers = [
    {
      name: "Agnes Lew",
      image: "assets/img/TeamMembers/Diana_Low.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["5x MDRT Qualifier"],
      description: `
        Before joining Honeybees, I worked as a sales associate at a logistics company, where the daily grind felt uninspiring.
        <br><br>
        I joined Honeybees for a change in environment, and the experience has been transformative. I had expected it to just be another workplace, but I quickly realised that it’s actually a nurturing environment that encourages personal and professional growth. It’s a community that upholds values like gratitude, humility, teamwork, discipline, commitment to growth and open communication, and the support and camaraderie here have been incredible, pushing me to constantly strive for excellence in my own work.
        <br><br>
        Being a part of Honeybees also taught me the importance of empathy and human connection in our work. A memorable moment in my career was when I helped a client in her 60s understand the importance of hospitalisation coverage, and it proved crucial because she was diagnosed with cancer shortly after. I was able to alleviate some of her worries when it comes to financial costs, and the incident really underscored the impact that our work has on our clients' lives.
        <br><br>
        Honeybees has shown remarkable resilience and dedication over the years. We’ve taken challenges in our stride, overcome obstacles in our way and grown from strength to strength. I'm proud of our journey, and as a member of this organisation, I’m excited about our future as we continue to expand and thrive.
      `,
    },
    {
      name: "Ian Lin",
      image: "assets/img/TeamMembers/Ian_Lin.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x COT Qualifier", "4x MDRT Qualifier"],
      description: `
        Despite graduating from NUS with a Chemical Engineering degree, I decided to enter the insurance industry, and prior to joining Honeybees, I had briefly worked with another insurer and even considered a career as a civil servant.
        <br><br>
        My time at Honeybees has redefined my professional outlook and emphasised the importance of reaching my full potential, excelling in my field and making a positive impact on lives. While I initially assumed Honeybees to be just another young insurance agency, Honeybees stands out as a unique family-like community that thrives on mutual support, continuous improvement and excellence, and after eight years with the organisation, I now see that we are an all-star team driven by motivation, courage and authenticity.
        <br><br>
        Professionally, I've had the privilege of assisting clients who were previously turned away due to complex medical histories. Successfully securing insurance coverage for them and discussing future financial planning with them have been profoundly rewarding. Just as it gives them the confidence they need to navigate their lives moving forward, it’s heartening for me to know that I was able to help get them there, and it really drives home the idea of inclusivity because no one is left behind. Personally, my journey with Honeybees has taught me resilience and adaptability, which shaped me into the stronger and more capable individual that I am now.
        <br><br>
        Honeybees stays focused and united even during challenging times, and it’s the spirit of solidarity and adaptability that has been crucial as we navigate through adversities and uncertainties while becoming better versions of ourselves.
      `,
    },
    {
      name: "Wang Yaxiang",
      image: "assets/img/TeamMembers/Wang_Yaxiang.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["1x COT Qualifier", "4x MDRT Qualifier"],
      description: `
        Work life before Honeybees primarily involved desk-bound tasks in the finance department at a listed company. 
        <br><br>
        Embarking on my journey with Honeybees has been life-changing. I was deeply impressed by Yuan Shyuan, who introduced the organisation to me. His insights and perspectives reassured me that I’d made the right decision - a belief that’s only been reinforced as I witness our team consistently achieve and surpass goals. To me, that’s what Honeybees symbolises - responsibility, commitment and growth.
        <br><br>
        One unforgettable moment was when I received the Top Financial Consultant award. Besides being a highlight of my professional career, my team members’ enthusiastic cheers and words of encouragement during the award ceremony was also a reminder that I’ll always have their support.
        <br><br>
        I've had the privilege of supporting my clients through challenging times, like handling emergency calls from family members when their loved one is hospitalised and developing a stable income plan for retirement. Knowing that our plans provide them with security and peace during tough times is profoundly fulfilling. One incident that was particularly impactful was when I handled my first death claim. It was a poignant reminder of the value and significance of our work and really underscored the gravity of our responsibilities and the profound impact we can have on our clients’ lives.
        <br><br>
        At Honeybees, under the guidance of leaders and mentors, we are equipped with innovative ideas and methods that allow us to serve our clients confidently. It’s an environment that not only fosters our professional growth but also empowers us to make a significant difference in our clients' lives.
      `,
    },
    {
      name: "Kylie Ng",
      image: "assets/img/TeamMembers/Kylie_Ng.png",
      role: ["Financial Services Consultant"],
      qualification: ["2x MDRT Qualifier"],
      description: `
        I was a second-year SMU undergraduate balancing studies with part-time roles in the F&B industry and tutoring when I joined Honeybees.
        <br><br>
        Starting with no preconceptions about the insurance and financial service industry allowed me to approach my role in Honeybees with an open mind and focus on adding value to my clients. Over the years, Honeybees has become more than just a workplace for me; it’s a place where personal growth and professional growth are deeply intertwined with teamwork and client relationships. My personal growth has also been marked by increasing maturity and insight, which has been recognised by peers and clients alike, and I have learnt to embody core values such as teamwork, open communication and humility. 
        <br><br>
        A cherished memory from my time here was when I graduated in 2019. Although I was still just a part-timer then, my teammates surprised me by attending my graduation, and it meant the world to me to have their support and have them celebrate with me such an important milestone in my life.
        <br><br>
        Another memory that remains vivid in my mind was when a client invited me to their housewarming event, which exemplified the genuine relationships we build with our clients beyond professional obligations. It’s a reminder that our line of work isn’t just about insurance; fostering long-lasting and meaningful relationships with the people we serve and building trust and rapport are just as key.
        <br><br>
        The essence of Honeybees has always been fearlessness. Even in the face of daunting challenges, like transitioning to a new company during a period of uncertainty, we dare to embrace change, and it has led to continued success and even opened the doors to new opportunities. Defining moments like this in our journey reinforce our resilience and adaptability.
      `,
    },
    {
      name: "Kenneth Chng",
      image: "assets/img/TeamMembers/Kenneth_Chng.png",
      role: ["Personal Wealth Manager"],
      qualification: ["3x MDRT Qualifier"],
      description: `
        I was a fresh graduate interning at a bank before joining Honeybees.
        <br><br>
        To me, being part of Honeybees means striving to become a better version of myself and inspiring others to excel despite the challenges they may face. I’ve always believed Honeybees to be a place that nurtures potential and encourages learning and growth - a belief that has only strengthened over time as I continue my journey with the organisation. Every award night that we attend is memorable, not only because I’m proud to see my peers being recognised for their achievements but also because it’s a reminder of how far we’ve come together and the new heights we continue to reach.
        <br><br>
        A pivotal moment in my personal growth occurred when I decided to challenge a respected client's assumptions. Despite the risk of disagreement, I trusted in myself and my knowledge as his consultant, and I genuinely believed that my proposal would benefit him more. This experience taught me the importance of standing by my convictions. We are here to serve our clients, and the ultimate goal is to help them live their lives better and without worries.
        <br><br>
        Honeybees itself embodies courage, a trait demonstrated when we transitioned to AIA. It was a move that involved many of us starting anew, but it ultimately led to clearer and stronger paths in our careers. This bold step has been instrumental in our continuous growth and success, and the vision of fearlessness is what guides us forward steadily.
      `,
    },
    {
      name: "Pamela Ng",
      image: "assets/img/TeamMembers/Pamela_Ng.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `
        Financial advisory wasn’t a career path I’d imagined for myself, but I gave it a chance after discovering I have a knack for connecting with strangers while working as a telemarketer. It’s been over 15 years since I started on this journey with a different insurer, and now I’m happily part of Honeybees.
        <br><br>
        Joining Honeybees really changed my perspective. I was told that the path to success is lonely, but I’ve never once felt alone here. The leaders check in with us regularly, and everyone here is supportive and generous with advice. No matter the level of experience, we can always get the support we need for us to continue growing. It’s this idea of teamwork that really resonates with me, and I feel so blessed to be in an organisation that nurtures us because it is genuinely interested in our development.
        <br><br>
        The true impact of this career on my clients’ lives wasn’t obvious to me until I had to make claims. Seeing the relief on their faces was the motivation I needed to work harder for them. I remember when a client migrated to Australia and was able to use the money from one of the matured savings plans we’d set up years ago to finance the purchase of a car without having to take out loans. It strengthened my belief that financial discipline is key to achieving our goals, and it’s a point I now instil into my clients during reviews. There was also a client who threw me a traditional Indian baby shower when I was expecting my first child - a memory that made me feel so touched and loved - and it was proof that client relationships can blossom into friendships when I do my work right.
        <br><br>
        Honeybees puts a strong emphasis on growth, and there are always new opportunities for us to challenge ourselves for a chance to unlock our potential. Together with our vision of a truly fearless life, we are encouraged to courageously tackle the obstacles we face so that we can come out stronger, and only then can we serve our clients better.
        `,
    },
    {
      name: "Jacqueline Tan",
      image: "assets/img/TeamMembers/Jacqueline_Tan.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `
        I had spent eight years in the hospitality and healthcare sectors before deciding to do a mid-career switch to financial advisory. The transition was inspired by a reunion with a college friend, Ryan, who is now my mentor and manager at Honeybees. Witnessing his growth as an individual helped me see my untapped potential, which was what made me take the leap of faith. Today, I am proud to be an Associate Director, contributing to our mission of protecting lives, preserving wealth and piloting dreams.
        <br><br>
        Being part of Honeybees is like having a second family, one where everyone plays a crucial role, works together towards common goals and fosters a culture of harmony, teamwork and dedication. I wasn’t initially aware of the significance behind our name, but I’ve come to realise that it symbolises hard work, humility and a collective commitment to success. Our incentive trip to Iceland really highlighted our family-like bond, and it was heartwarming how we took care of and supported each other.
        <br><br>
        What is rewarding about the profession is the fact that I have been able to make a change in my clients’ lives, empowering them to safeguard their future financially and giving them more confidence to do so. An impactful incident that reminded me of the importance of my role in their lives was when I helped a client correct a critical oversight in their insurance coverage. Another cherished professional achievement involved assisting a client under financial stress to regain control of her finances. This experience not only transformed her life but also deeply influenced my approach to financial consulting, emphasising the power of personalised and empathetic guidance.
        <br><br>
        At Honeybees, our compassion and strong desire to add value to the lives of the people we serve have strengthened our client relationships and enhanced our reputation as trusted consultants. We also daringly embrace calculated risks to help our clients live their fearless lives, underscoring our commitment to their success and well-being.
      `,
    },
    {
      name: "Goh Li Ying",
      image: "assets/img/TeamMembers/Goh_Li_Ying.png",
      role: ["Financial Services Consultant"],
      qualification: ["2x MDRT Qualifier"],
      description: `
        I was a fresh graduate from the University of New South Wales with a bachelor’s degree in Commerce specialising in Finance and Management, and I was looking for a job in the finance sector when I had an opportunity to speak to my current mentor through a friend’s referral.
        <br><br>
        I wasn’t familiar with Honeybees when I first joined, but I can now confidently say that it’s an organisation where everything is set up for us to excel, and I am fortunate to be a part of it. The guidance I’ve received from my mentors has helped me mature in my journey, and I’ve learnt to consider different perspectives before making decisions. I’ve also come to see Honeybees as a family that has my back and where we can all grow and succeed together. One of my most touching memories at Honeybees was witnessing the incredible team spirit we have during our events, and the way we care for each other truly makes this place feel like home.
        <br><br>
        The job is rewarding because of the positive impact it has on the lives of our clients, even when it’s something as simple as helping a client build financial discipline. A defining moment in my career was when I assisted my aunt with her retirement and critical illness planning. Despite her initial scepticism about insurance, she trusted me and my financial advice, and the coverage we’d arranged came to her aid when she was diagnosed with cancer months later. It allowed her to focus on recovery without financial worry, which was also a relief for me as her family. This experience not only transformed her view on insurance but also reinforced my belief in the importance of our work.
        <br><br>
        The fearlessness that Honeybees advocates is an ethos that not only drives us forward but also ensures beneficial outcomes for our clients and our team. It’s a constant reminder for me to courageously seek growth opportunities while serving a greater purpose, which is to help our clients live a fearless life.
      `,
    },
    {
      name: "Lim Yu Heng",
      image: "assets/img/TeamMembers/Lim_Yu_Heng.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `
        I was a sales engineer with a degree in Mechanical Engineering enjoying a comfortable life before joining Honeybees.
        <br><br>
        Admittedly, I was sceptical about the insurance industry at first, but wanting to understand more about it, I took a leap of faith with Honeybees, and the journey has been transformative. I witnessed firsthand how insurance genuinely helps people, and it completely changed my perspective. With a culture of empowerment and growth, every individual here is inspired to evolve into the best version of who they are, not only for themselves but also for the people they serve. It’s truly a place where like-minded and driven individuals strive towards their goals together. A fond memory of my time with Honeybees was our trip to Amsterdam and Slovenia, which brought us closer and created lasting bonds that made us feel like a family.
        <br><br>
        The things I’ve learnt along the way have shaped me to become the person I am today, in both personal and professional capacities. A turning point for me was a meeting with Boss Yuan Shyuan, which shifted my focus from just sales to personal development and growth. This mindset change has positively influenced others around me as well, including a close friend who has adopted a similar approach to self-improvement. The work is also fulfilling because of the impact that I can have on people’s lives, like when I helped a client get through a tough financial period by advising him on ways to boost his income, which he successfully did by becoming self-employed.
        <br><br>
        Honeybees has truly been a pivotal part of my growth and success. Our holistic approach to both personal and professional development has led to significant outreaches and successes, exemplifying how bold but well-informed strategies can lead to beneficial outcomes, for both myself as an individual and Honeybees as a whole.
      `,
    },
  ];

  function createTeamMemberDiv(member) {
    const div = document.createElement("div");
    div.classList.add("honeyBeeTeamReview");
    let quali_str = "",
      role_str = "";
    member.qualification.forEach((qual) => {
      quali_str += `<li>${qual}</li>`;
    });
    member.role.forEach((r) => {
      role_str += `<h4>${r}</h4>`;
    });

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
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    const divItem = document.createElement("div");
    divItem.classList.add("swiper-slide-item");
    div.appendChild(divItem);

    let quali_str = "",
      role_str = "";
    member.qualification.forEach((qual) => {
      quali_str += `<li>${qual}</li>`;
    });
    member.role.forEach((r) => {
      role_str += `<h4>${r}</h4>`;
    });

    const divProfile = document.createElement("div");
    divProfile.classList.add("honeyBeeTeamReview");

    const divImage = document.createElement("div");
    divImage.classList.add("swiper-slide-img");
    const htmlImg = `
            <img src="${member.image}">
            <h2>${member.name}</h2>
            ${role_str}
            <div class="teg-btn">
                <ul>
                    ${quali_str}
                </ul>
            </div>
        `;
    divImage.innerHTML = htmlImg;
    divProfile.appendChild(divImage);

    divItem.appendChild(divProfile);


    const divDesc = document.createElement("div");
    divDesc.classList.add("honeyBeeTeamReview");
    const htmlDesc = `
            <p>${member.description}</p>
    `;
    divDesc.innerHTML = htmlDesc;
    divItem.appendChild(divDesc);

    return div;
  }

  async function appendTeamMembers() {
    // const teamContainer = document.getElementById("honeyBeeTeam");
    const swiperContainer = document.getElementById("swiper-wrapper");
    teamMembers.forEach((member) => {
      // const memberDiv = createTeamMemberDiv(member);
      // teamContainer.appendChild(memberDiv);
      swiperContainer.appendChild(createSwiperDiv(member));
    });
  }

  async function InitializeTeamMembers() {
    await appendTeamMembers();
  }

  await InitializeTeamMembers();

  function calculateSlidesPerView() {
    var windowWidth = window.innerWidth;
    // if (windowWidth >= 900) {
    //   return 3;
    // } else {
    //   return 2;
    // }
    return 1;
  }

  var swiper = new Swiper(".mySwiper", {
    // centeredSlides: true,
    // loop: true,
    // slidesPerView: 3,
    // spaceBetween: -50,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: calculateSlidesPerView(),
    breakpoints: {
      768: { slidesPerView: calculateSlidesPerView() },
      1024: { slidesPerView: calculateSlidesPerView() },
    },
    coverflowEffect: {
      rotate: 10,
      stretch: 10,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    autoHeight: window.innerWidth < 992 ? true : false,
    autoplay: { delay: 60000, disableOnInteraction: false }, // 60000 milisecond
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // ,
      // renderBullet: function(index, className) {
      //   return (
      //     '<div class="pagination-image" style="background-image: url(' +
      //     teamMembers[index].image +
      //     ')"></div>'
      //   );
      // }
      renderBullet: function (index, className) {
        // Use team member images as pagination bullets
        return (
          '<span class="pagination-image ' +
          className +
          '" role="button" aria-label="Go to slide ' +
          (index + 1) +
          '">' +
          '<img src="' +
          teamMembers[index].image +
          '" alt="' +
          teamMembers[index].name +
          '">' +
          "</span>"
        );
      },
    },
    on: {
      init: function () {
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
});
