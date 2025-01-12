import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2*1 mx-auto container px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl mb-5 font-bold">About</h1>
      <p>
        Hello, I'm Utkarsh, a passionate Web developer with a keen eye for AEM
        Developer . With a background in IT, I strive to create impactful and
        visually stunning Software solutions that leave a lasting impression.
      </p>
      <br></br>
      <h1 className="text-green-600 text-xl font-semibold mb-2">
        Education & Training
      </h1>
      <p>
        <span className="text-orange-600 text-md font-semibold mt-2">
          Bacheler's Of Engineering(Computer Science)
        </span>
        <br></br>
        <span>Savitribai Phule Pune University, Pune</span>
        <br></br>
        <span>Grade:8.8</span>
      </p>
      <br></br>
      <p>
        <span className="text-orange-600 text-md font-semibold mt-2">
          HSC 12th
        </span>
        <br></br>
        <span>Maharashtra State Board</span>
        <br></br>
        <span>Percentage:76.30</span>
      </p>
      <br></br>
      <p>
        <span className="text-orange-600 text-md font-semibold mt-2">
          SSC 10th
        </span>
        <br></br>
        <span>Maharashtra State Board</span>
        <br></br>
        <span>Percentage:87.60</span>
      </p>
      <br></br>
      <h1 className="text-green-600 text-xl font-semibold">
        Skills & Expertise
      </h1>
      <p>
        Proficient in [Programming Languages] Experienced with [Software
        Tools/Technologies] Strong grasp of [Design Principles/Concepts]
        Excellent problem-solving skills Effective communicator and collaborator
      </p>
      <br></br>
      <h1 className="text-green-600 text-xl font-semibold">
        Professional Experience
      </h1>

      <p>
        <p className="text-orange-600 text-md font-semibold mt-2">
          Tata Consultancy Services (System Engineer) (October 2020 to June
          2023)
        </p>
        <ul className="list-disc mx-5">
          <li>ILP Training in Core JAVA, HTML and CSS.</li>
          <li>Experience with AEM 6.3 and latest AEM 6.5 versions.</li>
          <li>
            Experience in working on multiple websites and environments using
            HTML, CSS, Javascript and react.
          </li>
          <li>
            Worked in authoring of around 20+ sites mainly dealt with AEM Sites,
            have used different dynamic templates, used different Components,
            DAM Assets, Experience Fragments, Live Copy.
          </li>
          <li>
            Worked on Experience and Content Fragment, Advance Search
            functionality, Popup functionality, Self-Certification and Exit ramp
            functionality, component development using slightly (HTL).
          </li>
          <li>
            Creation and integration of partner specific clientlibs (CSS and
            Javascript).
          </li>
        </ul>

        <p className="text-orange-600 text-md font-semibold mt-2">
          Infosys (Associate consultant) (June 2023 to Present){" "}
        </p>
        <ul className="list-disc mx-5">
          <li>Development of custom components and editable templates.</li>
          <li>
            Overriding and extending the existing components, dialog of core
            component.
          </li>
          <li>Experience in HTML, CSS, Javascript and Reactjs</li>
          <li>
            Development of authorable components and their integration with
            backend.
          </li>
          <li>
            Creation of custom services in java and their interactions with
            frontend using htl.
          </li>
        </ul>
      </p>
      <br></br>
      <h1 className="text-green-600 text-xl font-semibold">Achievements</h1>
      <ul>
        <a href="https://www.udemy.com/certificate/UC-ff84cfda-c5e3-4276-8b43-d9d540ed5e32/">
          <li className="underline">
            Udemy certification on HTML, CSS & BOOTSTRAP, JAVASCRIPT
          </li>
        </a>
        <a href="https://certification.adobe.com/credential/verify/e9288aa7-bc59-11ef-8f8b-42010a40001c">
          <li className="underline">
            Adobe Certified Expert – Adobe Experience Manager Sites Developer
          </li>
        </a>
      </ul>
      <br></br>
      <h1 className="text-green-600 text-xl font-semibold">
        Mission Statement
      </h1>
      <p>
        My mission is to leverage my skills and creativity to deliver innovative
        solutions that exceed client expectations and contribute positively to
        the digital landscape. I am committed to continuous learning and growth,
        always seeking new challenges and opportunities to expand my horizons.
      </p>
      <br></br>
    </div>
  );
}

export default About;
