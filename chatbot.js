const chatLogic = [
    {
        question: `Thank you for visiting VTVLC.org! <br><br>Need assistance finding something? I can help. <br><br>Which best describes you?`,
        options: ["Parent/Guardian", "Student", "Teacher", "School Principal", "School Counselor", "Another School Official"],
        logic: {
            "Parent/Guardian": "parentHelpOptions",
            "Student": "studentHelpOptions",
            "Teacher": "teacherOptions",
            "School Principal": "principalOptions",
            "School Counselor": "counselorOptions",
            "Another School Official": "schoolStaffOptions"
        }
    },
    {
        id: "parentHelpOptions",
        question: "How can I help you?",
        options: ["More information about VTVLC", "Technical Support Help/Tech Questions"],
        logic: {
            "More information about VTVLC": "parentStudent",
            "Technical Support Help/Tech Questions": "parentTechSupport"
        }
    },
    {
        id: "studentHelpOptions",
        question: "How can I help you?",
        options: ["More information about VTVLC", "Technical Support Help/Tech Questions"],
        logic: {
            "More information about VTVLC": "studentGradeLevel",
            "Technical Support Help/Tech Questions": "studentTechSupport"
        }
    },
    {
        id: "parentStudent",
        question: "What grade level is your student in?",
        options: ["K-8", "9-12"],
        logic: {
            "K-8": "k8Program",
            "9-12": "partTimeOrFullTime"
        }
    },
    {
        id: "studentGradeLevel",
        question: "What grade level are you in?",
        options: ["K-8", "9-12"],
        logic: {
            "K-8": "k8Program",
            "9-12": "partTimeOrFullTime"
        }
    },
    {
        id: "teacherOptions",
        question: "What can I assist you with?",
        options: [
            "How to offer VTVLC classes to my students",
            "Technical Support and Tech Questions",
            "Careers at VTVLC",
            "Something Else"
        ],
        logic: {
            "How to offer VTVLC classes to my students": "assistHelpStudents",
            "Technical Support and Tech Questions": "assistTechSupport",
            "Careers at VTVLC": "assistCareers",
            "Something Else": "assistSomethingElse"
        }
    },
    {
        id: "schoolStaffOptions",
        question: "What can I assist you with?",
        options: [
            "How to offer VTVLC classes to my students",
            "Technical Support and Tech Questions",
            "Something Else"
        ],
        logic: {
            "How to offer VTVLC classes to my students": "assistHelpStudents",
            "Technical Support and Tech Questions": "schoolStaffTechSupport",
            "Something Else": "assistSomethingElse"
        }
    },
    {
        id: "principalOptions",
        question: "What can I assist you with?",
        options: [
            "How to offer VTVLC classes to my students",
            "Technical Support and Tech Questions",
            "Something Else"
        ],
        logic: {
            "How to offer VTVLC classes to my students": "assistHelpStudents",
            "Technical Support and Tech Questions": "principalTechSupport",
            "Something Else": "assistSomethingElse"
        }
    },
    {
        id: "counselorOptions",
        question: "What can I assist you with?",
        options: [
            "How to offer VTVLC classes to my students",
            "Technical Support and Tech Questions",
            "Something Else"
        ],
        logic: {
            "How to offer VTVLC classes to my students": "assistHelpStudents",
            "Technical Support and Tech Questions": "counselorTechSupport",
            "Something Else": "assistSomethingElse"
        }
    },
    {
        id: "principalTechSupport",
        question: '<h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>',
        options: []
    },
    {
        id: "counselorTechSupport",
        question: `<h1>How-To Guides</h1>We have a variety of step-by-step guides specifically for counselors available <a href="https://vtvlc.freshdesk.com/support/solutions/5000164729" target="_blank">here.</a><h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>`,
        options: []
    },
    {
        id: "schoolStaffTechSupport",
        question: '<h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>',
        options: []
    },
    {
        id: "k8Program",
        question: `VTVLC offers a full-time online program to students in grades K-8.<br><h1>Benefits</h1><ul><li>Facilitated by a VT teacher who holds the online teaching specialist endorsement.<li>Comprised of asynchronous work as well as synchronous sessions with students' teacher as well as classmates.</li><li>Features many events and field-trips, both in-person and virtual, throughout the year.<li>Offers one-on-one student support.</li></ul><h1>How to register</h1><ul><li>Submit our interest form at <a href="https://vtvlc.org/k-8" target="_blank">VTVLC.org/K-8</a> and someone will be in touch with you soon.<br></li></ul><h1>More info</h1>More info is available at <a href="vtvlc."</li></ul><a href="https://vtvlc.org/k-8" target="_blank">VTVLC.org/K-8</a>`,
        options: []
    },
    {
        id: "partTimeOrFullTime",
        question: "Are you interested in part-time (just a course or two) or full-time options?",
        options: ["Part-time", "Full-time"],
        logic: {
            "Part-time": "vermontVirtualCourses",
            "Full-time": "nonOperatingTown"
        }
    },
    {
        id: "vermontVirtualCourses",
        question: `We offer many virtual courses in a variety of topics for Vermont students.<br><br>Our <strong>Traditional Courses</strong> align to fall and spring semesters.<br><br>Our <strong>On-Demand Courses</strong> offer a rolling-enrollment option and can be started at any point throughout the year.<br><br>Which type of course sounds right for you?`,
        options: ["Traditional", "On-Demand"],
        logic: {
            "Traditional": "traditionalCourses",
            "On-Demand": "onDemandCourses"
        }
    },
    {
        id: "onDemandCourses",
        question: `Our on-demand classes offer flexibility and custom pacing. <br><h1>More about on-demands</h1><p>To learn more about on-demands and pricing, <a href="https://vtvlc.org/9-12/on-demand" target="_blank">visit vtvlc.org/on-demand</a></p><h1>Course Catalog</h1><p>For a full list of our course offerings, visit our <a href="https://www.bit.ly/vtvlc-catalog">course catalog.</a></p><h1>Register for courses</h1><p><strong>For new students:</strong> To register for VTVLC courses, complete our <a href="https://vtvlc.geniussis.com/PublicApplication.aspx" target="_blank">student application.</a> Then, proceed to the next step.<p><strong>For existing students:</strong> Log into your <a href="https://vtvlc.geniussis.com/PublicWelcome.aspx" target="_blank">Genius dashboard</a> and select "Request a course.`,
        options: []
    },
    {
        id: "traditionalCourses",
        question: `Our traditional classes make a great addition to any students course schedule. <br><h1>More about traditional courses</h1><p>To learn more about traditional courses and pricing, <a href="https://vtvlc.org/9-12/traditional" target="_blank">visit vtvlc.org/traditional-programs</a></p><h1>Course Catalog</h1><p>For a full list of our course offerings, visit our <a href="https://www.bit.ly/vtvlc-catalog">course catalog.</a></p><h1>Register for courses</h1><p><strong>For new students:</strong> To register for VTVLC courses, complete our <a href="https://vtvlc.geniussis.com/PublicApplication.aspx" target="_blank">student application.</a> Then, proceed to the next step.<p><strong>For existing students:</strong> Log into your <a href="https://vtvlc.geniussis.com/PublicWelcome.aspx">Genius dashboard</a> and select "Request a course."`,
        options: []
    },
    {
        id: "nonOperatingTown",
        question: "Do you reside in a non-operating (sometimes called 'tuitioning') town?",
        options: ["Yes", "No"],
        logic: {
            "Yes": "collaborativeDiploma",
            "No": "fullTimeProgram"
        }
    },
    {
        id: "collaborativeDiploma",
        question: `Our Collaborative Diploma Pathway (CDP) allows students in non-operating towns to earn their diploma from VT a school while taking all their classes online with VTVLC.<br><h1>More about CDP</h1><p>To learn more about our CDP program, visit <a href="https://vtvlc.org/9-12/full-time-9-12/#cdp" target="_blank">vtvlc.org/9-12/full-time-9-12</a></p><h1>Course Catalog</h1><p>For a full list of our course offerings, visit our <a href="https://www.bit.ly/vtvlc-catalog">course catalog.</a></p><h1>Register for CDP</h1><p>Submit the interest form at <a href="https://vtvlc.org/9-12/full-time-9-12/#cdp">https://vtvlc.org/9-12/full-time-9-12/</a> or contact VTVLC 9-12 principal, Jessica Leo, at <a href="mailto:jleo@vtvlc.org">jleo@vtvlc.org</a></p>`,
        options: []
    },
    {
        id: "fullTimeProgram",
        question: `We offer a full-time online program for 9-12 students that allows students to remain enrolled at their local high school.<br><h1>More about Full-Time 9-12</h1><p>To learn more about our full-time 9-12 program, <a href="https://vtvlc.org/9-12/full-time-9-12/" target="_blank">visit vtvlc.org/9-12/full-time-9-12</a></p><h1>Course Catalog</h1><p>For a full list of our course offerings, visit our <a href="https://www.bit.ly/vtvlc-catalog">course catalog.</a></p><h1>Register for Full-Time 9-12</h1><p>Submit the interest form at <a href="https://vtvlc.org/9-12/full-time-9-12/">https://vtvlc.org/9-12/full-time-9-12/</a> or contact VTVLC 9-12 principal, Jessica Leo, at <a href="mailto:jleo@vtvlc.org">jleo@vtvlc.org</a></p>`,
        options: []
    },
    {
        id: "assistHelpStudents",
        question: `<h1>Become a VTVLC Partner</h1>Schools can become a VTVLC partner and earn no-cost seats in VTVLC courses to offer to their students. Check your school's partner status <a href="https://vtvlc.org/vtvlc-partnership">here</a><ul><li><strong>Non-Teaching Partnership. </strong>Non-teaching partners earn 10 free traditional seats in VTVLC courses for their students to use throughout the school year. <strong>Non-Teaching partnership is available at no cost to public VT schools.</strong></li><li><strong>Teaching Partnership. </strong>Schools which contribute a <strong>Teaching Partner</strong> (a teacher who facilitates a VTVLC course as part of their normal teaching schedule) earn 40 traditional seats and 5 on-demand seats in VTVLC for their students to use throughout the year.</li></ul> You can learn more about partner benefits at <a href="https://vtvlc.org/FY25" target="_blank">VTVLC.org/FY25</a><h1>Parent Supported VTVLC Courses</h1><ul><li><strong>New Students: </strong> Students interested in VTVLC courses should <a href="https://vtvlc.geniussis.com/PublicApplication.aspx" target="_blank"> create an account. Once their account is created, they can request courses <a href="https://vtvlc.geniussis.com/PublicWelcome.aspx" target="_blank">their dashboard.</a></li><li><strong>Returning Students: </strong>Students with an existing account can request courses on <a href="https://vtvlc.geniussis.com/PublicWelcome.aspx">their dashboard.</a></li></ul>`,
        options: []
    },
    {
        id: "assistEnrollStudents",
        question: `After a student <a href="https://vtvlc.freshdesk.com/support/solutions/articles/5000876818-requesting-courses-in-genius">makes a course request</a>, you can approve requests by following this <a href="https://vtvlc.freshdesk.com/support/solutions/articles/5000876855-adding-approving-course-requests-in-genius">step-by-step guide.</a> We have additional guides for counselors and school coordinators <a href="https://vtvlc.freshdesk.com/support/solutions/5000164729">here</a>`,
        options: []
    },
    {
        id: "assistTechSupport",
        question: '<h1>How-To Guides</h1>We have a variety of step-by-step guides specifically for teachers available <a href="https://vtvlc.freshdesk.com/support/solutions/5000159199" target="_blank">here.</a><h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>',
        options: []
    },
    {
        id: "studentTechSupport",
        question: '<h1>How-To Guides</h1>We have a variety of step-by-step guides specifically for students available <a href="https://vtvlc.freshdesk.com/support/solutions/5000164728" target="_blank">here.</a><h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>',
        options: []
    },
    {
        id: "assistCareers",
        question: `<h1>Current Job Postings</h1>Thank you for your interest in joining the VTVLC team! Any current openings will be posted on <a href="https://www.schoolspring.com/">School Spring.</a> Search for Vermont Virtual Learning Cooperative to find our postings!<h1>Teaching Adjunct at VTVLC</h1>Vermont educators who hold the Online Teaching Specialist Endorsement can inquire about teaching adjunct at VTVLC by contacting Ashley Newton at anewton@vtvlc.org.<h1>Partner Teaching at VTVLC</h1>Interested in teaching online as a part of your normal teaching schedule? Vermont educators who hold the Online Teaching Specialist Endorsement can become VTVLC Partner Teachers and earn their schools free seats in VTVLC courses. Talk to your local administrators about how your school can become a VTVLC partner teacher. You can find out your school's current partner status at <a href="https://vtvlc.org/vtvlc-partnership" target="_blank">VTVLC.org/VTVLC-Partnership.</a><br>Current partner benefits can be found at <a href="https://vtvlc.org/fy25" target="_blank">VTVLC.org/FY25.</a><h1>Earn your OTS</h1><a href="https://neoti.org" target="_blank">The Northeast Online Teaching Institute</a> offers a <strong>Certificate in Online Teaching</strong> which meets all the standards of the Online Teaching Specialist Endorsement. Learn more about earning your CiOT at <a href="https://neoti.org/ciot" target="_blank">NEOTI.org/CiOT</a>`,
        options: []
    },
    {
        id: "assistSomethingElse",
        question: `For other inquiries, please visit our <a href="https://vtvlc.org/contact-us" target="_blank">contact page</a> or call us directly at 802-885-8331.`,
        options: []
    },{
        id: "parentTechSupport",
        question: '<h1>How-To Guides</h1>We have a variety of step-by-step guides specifically for parents available <a href="https://vtvlc.freshdesk.com/support/solutions/5000164730" target="_blank">here.</a><h1>Submit a Ticket</h1>For technical support, you can <a href="https://vtvlc.freshdesk.com/support/tickets/new" target="_blank">submit a ticket.</a>',
        options: []
    }
];

let currentQuestion = 0;

function displayQuestion() {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");

    const currentLogic = chatLogic[currentQuestion];

    chatBox.innerHTML += `<div class="chat-message bot">${currentLogic.question}</div>`;
    chatInput.innerHTML = "";

    if (currentLogic.options.length > 0) {
        currentLogic.options.forEach(option => {
            chatInput.innerHTML += `<div class="option" onclick="handleOptionClick('${option}')">${option}</div>`;
        });
    } else {
        chatBox.innerHTML += `<div class="chat-message bot">If you have any other questions, don't hesitate to contact us at <a href="https://vtvlc.org/contact-us">VTVLC.org/contact-us.</a></div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
}

function handleOptionClick(option) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="chat-message user">${option}</div>`;

    const currentLogic = chatLogic[currentQuestion];

    if (currentLogic.logic && currentLogic.logic[option]) {
        const nextId = currentLogic.logic[option];
        currentQuestion = chatLogic.findIndex(q => q.id === nextId);
        setTimeout(displayQuestion, 500); // Delay before next question
    } else {
        chatBox.innerHTML += `<div class="chat-message bot">If you have any other questions, don't hesitate to contact us at <a href="https://vtvlc.org/contact-us">VTVLC.org/contact-us.</a></div>`;
        document.getElementById("chat-input").innerHTML = ""; // Clear the input area
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion(); // Start the chatbot
});
