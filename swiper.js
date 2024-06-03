$(document).ready(async function() {
  const teamMembers = [
    {
      name: "Diana Low",
      image: "assets/img/TeamMembers/Diana_Low.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["5x MDRT Qualifier"],
      description: `Before joining Honeybees, I worked as a sales associate at Ninja Van, where the routine felt uninspiring. Joining Honeybees transformed my perspective; it's not just a job but a community that upholds values like gratitude, humility, teamwork, discipline, commitment to growth, and open communication. These principles have helped me grow personally and professionally. <br> <br>

      Initially, I assumed Honeybees would be just another workplace, but I quickly realized it's a nurturing environment that encourages personal and professional growth. The support and camaraderie here have been incredible, pushing me to constantly strive for excellence. <br> <br>
      
      A particularly memorable moment was during my first year when I achieved the MDRT target. The support from my mentor and the cheers from my team during the awards night were unforgettable. Joining Honeybees has been the most life-changing decision for me, teaching me the importance of empathy and human connection in our work. <br> <br>
      
      Last year, I helped a client in her 60s understand the importance of hospitalization coverage, which proved crucial when she was diagnosed with cancer shortly after. This experience underscored the impact of our work on clients' lives. <br> <br>
      
      Honeybees has shown remarkable resilience and dedication over the years. We've grown from strength to strength, overcoming challenges to secure our own office space and develop a robust system. I'm proud of our journey and excited about our future as we continue to expand and thrive. <br> <br>`
    },
    {
      name: "Ian Lin",
      image: "assets/img/TeamMembers/Ian_Lin.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x COT Qualifier", "4x MDRT Qualifier"],
      description: `
      
      I'm Fangxiong Lin, a graduate from NUS in Chemical Engineering. Before joining Honeybees, I briefly worked with another insurer and considered a career as a civil servant. Joining Honeybees has redefined my professional outlook, emphasizing the importance of reaching my full potential, excelling in my field, and making a positive impact on lives. Honeybees stands out as a unique family-like organization that thrives on mutual support, continuous improvement, and excellence.  <br> <br>

      Initially, I viewed Honeybees as just another young insurance agency. Over the past eight years, my perception has evolved; I now see us as an all-star team driven by motivation, courage, and authenticity. A particularly touching memory is how our leader fearlessly guided us through the uncertainty of transitions and the COVID-19 pandemic, ensuring our safety and adapting to new norms.  <br> <br>
      
      Professionally, I've had the privilege to assist clients who were previously turned away due to complex medical histories. Successfully securing insurance coverage for them and discussing future financial planning has been profoundly rewarding. Personally, the COVID-19 crisis taught me resilience and adaptability, shaping me into a stronger, more capable professional.  <br> <br>
      
      At Honeybees, our collective fearlessness during challenging times has kept us focused and united, allowing us to continue delivering exceptional service to our clients. This spirit of solidarity and proactive adaptation has been crucial in navigating through adversity and emerging stronger.
      
      
      
      `
    },
    {
      name: "Wang Yaxiang",
      image: "assets/img/TeamMembers/Wang_Yaxiang.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["1x COT Qualifier", "4x MDRT Qualifier"],
      description: `
      Before joining Honeybees, I worked in the finance department of a listed company, where my daily routine primarily involved desk-bound tasks. Joining Honeybees has been a transformative experience for me, symbolizing responsibility, commitment, and growth. Initially, I was introduced to the organization by Yuan Shyuan, whose insights and perspectives deeply impressed me. This encounter reassured me that I was making the right choice, a belief that has only been reinforced as I've seen our team consistently achieve and surpass goals.
      <br><br>
      One of my most memorable moments at Honeybees was when I received the Top Financial Consultant award, supported enthusiastically by my team members. Their cheers and encouragement during the award ceremony are unforgettable. In my role, I've had the privilege of supporting clients through challenging times, such as handling emergency calls from family members when a loved one is hospitalized. Knowing that our plans provide them with security and peace during crises is profoundly fulfilling.
      <br><br>
      A particularly impactful experience in my career was handling my first death claim. This experience underscored the gravity of our responsibilities and the profound impact we can have on our clients' lives. It was a poignant reminder of the value and significance of our work.
      <br><br>
      Another defining moment was assisting a client who was concerned about his retirement plans. After a thorough financial review and several discussions, we developed a plan that assured him a stable income for retirement, which brought him immense relief and gratitude.
      <br><br>
      At Honeybees, under the guidance of mentors like Yuan Shyuan, we are equipped with innovative ideas and methods that allow us to serve our clients confidently and fearlessly. This environment not only fosters our professional growth but also empowers us to make a significant difference in our clients' lives.      
      
      
      `
    },
    {
      name: "Kylie Ng",
      image: "assets/img/TeamMembers/Kylie_Ng.png",
      role: ["Financial Services Consultant"],
      qualification: ["2x MDRT Qualifier"],
      description: `
      Before joining Honeybees, I was a second-year undergraduate at SMU, balancing my studies with part-time roles in the F&B industry and tutoring. Joining Honeybees has been transformative for me, embodying core values such as teamwork, open communication, and humility. I started with no preconceptions about the insurance and financial services industry, which allowed me to approach my role with an open mind and focus on adding value to my clients.
      <br><br>
      A cherished memory from my time here was during my graduation in 2019. Despite my part-time status and being away for an exchange program, my teammates surprised me by attending my graduation, showing immense support and camaraderie. Another memorable experience was helping a client during a housewarming event, which underscored the genuine relationships we build with our clients beyond professional obligations.
      <br><br>
      My personal growth over the past seven years at Honeybees has been marked by increasing maturity and insight, recognized by peers and clients alike. A significant moment in my career was assisting a close friend with financial planning, which had a profound impact on his life, highlighting the value of thoughtful financial strategies.
      <br><br>
      Lastly, our team's decision to transition to a new company during the COVID-19 pandemic in 2020 was a fearless move that led to new opportunities and continued success, reinforcing our resilience and adaptability. Honeybees is more than just a workplace for me; it's a place where personal and professional growth are deeply intertwined with teamwork and client relationships.      
      
      `
    },
    {
      name: "Kenneth Chng",
      image: "assets/img/TeamMembers/Kenneth_Chng.png",
      role: ["Personal Wealth Manager"],
      qualification: ["3x MDRT Qualifier"],
      description: `

      Before joining Honeybees, I was a fresh graduate interning at a bank. Being part of Honeybees means striving to be a better version of myself and inspiring others to excel despite challenges. Initially, I believed Honeybees was a place that nurtured potential and encouraged learning—a belief that has only strengthened over time. A memorable experience for me has been attending the awards nights, where I felt proud seeing my peers recognized for their achievements. 
      <br><br>
      A pivotal moment in my personal growth occurred when I decided to challenge a respected client's assumptions, despite the risk of disagreement. This experience taught me the importance of standing by my convictions. 
      <br><br>
      Honeybees itself embodies fearlessness, demonstrated when we transitioned to AIA, a move that involved many of us starting anew but ultimately led to clearer and stronger paths in our careers. This bold step has been instrumental in our continuous growth and success.      
      
      
      `
    },
    {
      name: "Pamela Ng",
      image: "assets/img/TeamMembers/Pamela_Ng.png",
      role: ["Senior Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `At Honeybees, you can get the support that grows you and unlocks the potential within.\n\nI had always been told that the journey to success is always lonely but I never once felt alone here in honeybees.\n\nAs a team, we can go much further. The leaders are very helpful and they will check in with you regularly. We get valuable lessons and because they are genuinely interested in seeing us grow. \n\nLikewise, we are also encouraged to reflect regularly on our learning which helps to internalise everything.\n\nFundamentals and values are highly emphasised which gives you a strong foundation to move forth and uphold any challenges.`
    },
    {
      name: "Jacqueline Tan",
      image: "assets/img/TeamMembers/Jacqueline_Tan.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `
      My name is Jacqueline Tan, and before joining Honeybees, I spent eight years in the hospitality and healthcare sectors, focusing on Human Resources. My transition to financial advisory was inspired by a reunion with a college friend, Ryan, who is now my mentor and manager at Honeybees. He helped me see my untapped potential, leading me to join this vibrant community in September 2021. Today, I am proud to be an Associate Director, contributing to our mission of protecting lives, preserving wealth, and piloting dreams.
      <br><br>
      Being part of Honeybees means being part of a second family where everyone plays a crucial role. We work together towards common goals, fostering a culture of harmony, teamwork, and dedication. Initially, I underestimated the significance of our name, but I've come to realize it embodies humility and a collective commitment to success.
      <br><br>
      One of my most touching experiences was during an incentive trip to Iceland, where the care and support we extended to each other truly highlighted our family-like bond. Professionally, a memorable moment was helping a client correct a critical oversight in their insurance policy, which reinforced the importance and impact of my role.
      <br><br>
      A particularly cherished professional achievement involved assisting a client under financial stress to regain control of her finances. This experience not only transformed her life but also deeply influenced my approach to financial consulting, emphasizing the power of personalized and empathetic guidance.
      <br><br>
      At Honeybees, our fearless approach to tackling complex financial challenges head-on has strengthened our client relationships and enhanced our reputation as trusted advisors. We embrace calculated risks to help our clients achieve a fearless life, underscoring our commitment to their success and well-being.      
      `
    },
    {
      name: "Goh Li Ying",
      image: "assets/img/TeamMembers/Goh_Li_Ying.png",
      role: ["Financial Services Consultant"],
      qualification: ["2x MDRT Qualifier"],
      description: `
      Hi, I'm Li Ying, a 26-year-old financial advisor with Honeybees, and I've been in the industry for four years. Before joining Honeybees, I graduated with a Bachelor’s Degree in Commerce from the University of New South Wales. Joining Honeybees felt like joining a family where everyone supports each other through thick and thin, helping each other grow and succeed.

      <br><br>
      Initially, I wasn't familiar with Honeybees, but now I see how fortunate I am to be part of an organization where everything is set up for us to excel. One of my most touching memories at Honeybees was witnessing the incredible team spirit during our events, truly making this place feel like home.
      <br><br>
      Professionally, a significant moment was when I helped a client build financial discipline, which has been a rewarding experience. Personally, the guidance from my mentors, Boss YS and Boss GJ, has helped me mature and consider different perspectives before making decisions.
      <br><br>
      A life-changing moment in my career was when I assisted my aunt with her retirement and critical illness planning. Despite her initial skepticism about insurance, the coverage we arranged came to her aid when she was diagnosed with cancer, allowing her to focus on recovery without financial worry. This experience not only transformed her view on insurance but also reinforced my belief in the positive impact of our work.
      <br><br>
      At Honeybees, our fearless approach each December showcases our potential and growth, leading our clients towards a fearless life. This ethos not only drives us forward but also ensures beneficial outcomes for our clients and our team.
      `
    },
    {
      name: "Lim Yu Heng",
      image: "assets/img/TeamMembers/Lim_Yu_Heng.png",
      role: ["Personal Wealth Manager"],
      qualification: ["2x MDRT Qualifier"],
      description: `

      Before joining Honeybees, I was a Sales Engineer with a degree in Mechanical Engineering from NTU, enjoying a comfortable lifestyle. Joining Honeybees has been transformative for me, embodying a culture of empowerment and growth, not just for myself but also for those around me. Initially skeptical about the insurance industry, my perspective changed as I learned more and saw firsthand how insurance genuinely helps people.
      <br><br>
      A memorable experience with the team was our trip to Amsterdam and Slovenia, which brought us closer and created lasting bonds. Professionally, a significant moment was when I helped a client during a tough financial period, advising him on ways to improve his income, which he successfully did by becoming self-employed. This not only helped him but also enhanced my understanding of the impact we can have on our clients' lives.
      <br><br>
      A personal turning point was a meeting with Boss Yuan Shyuan during the COVID period, which shifted my focus from just sales to personal development and growth. This mindset change has also positively influenced others around me, including a close friend who has adopted a similar approach to self-improvement.
      <br><br>
      Lastly, our fearless approach during the launch of APA 2.0 led to significant outreach and personal success, exemplifying how bold strategies can lead to beneficial outcomes. Honeybees has truly been a pivotal part of my growth and success.      
      
      `
    }
  ];

  function createTeamMemberDiv(member) {
    const div = document.createElement("div");
    div.classList.add("honeyBeeTeamReview");
    let quali_str = "",
      role_str = "";
    member.qualification.forEach(qual => {
      quali_str += `<li>${qual}</li>`;
    });
    member.role.forEach(r => {
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
    const divImage = document.createElement("div");
    divImage.classList.add("swiper-slide-img");
    const htmlImg = `
            <img src="${member.image}">
        `;
    divImage.innerHTML = htmlImg;
    divItem.appendChild(divImage);

    const divDesc = document.createElement("div");
    divDesc.classList.add("honeyBeeTeamReview");
    let quali_str = "",
      role_str = "";
    member.qualification.forEach(qual => {
      quali_str += `<li>${qual}</li>`;
    });
    member.role.forEach(r => {
      role_str += `<h4>${r}</h4>`;
    });
    const htmlDesc = `
            <h2>${member.name}</h2>
            ${role_str}
            <p>${member.description}</p>
            <div class="teg-btn">
                <ul>
                    ${quali_str}
                </ul>
            </div>
        `;
    divDesc.innerHTML = htmlDesc;
    divItem.appendChild(divDesc);

    return div;
  }

  async function appendTeamMembers() {
    // const teamContainer = document.getElementById("honeyBeeTeam");
    const swiperContainer = document.getElementById("swiper-wrapper");
    teamMembers.forEach(member => {
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
      1024: { slidesPerView: calculateSlidesPerView() }
    },
    coverflowEffect: {
      rotate: 10,
      stretch: 10,
      depth: 200,
      modifier: 1,
      slideShadows: true
    },
    autoplay: { delay: 97500, disableOnInteraction: false },
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
      renderBullet: function(index, className) {
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
      }
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
      slideChange: function() {
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
      }
    }
  });
});
