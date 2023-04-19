import React, { useState } from "react";
import "../css/Faqs.css";

function FAQ({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="faq-question" onClick={toggleExpand}>
        {question}
        <span className="toggle-icon">{isExpanded ? "▲" : "▼"}</span>
      </div>
      <div className={`faq-answer ${isExpanded ? "show" : ""}`}>{answer}</div>
    </div>
  );
}

function FAQs() {
  return (
    <div className="faqs-container">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <FAQ
        question="Where is FYV Marble location?"
        answer="currently FYV is online but soon ,god willing we will open our first office"
      />
      <FAQ
        question="What is special about marble?"
        answer="Marble is a timeless beauty that does not absorb heat quickly and is highly durable. Not just that, marble is a natural stone with a distinctive appearance in every inch, which means it can effortlessly add oomph to your home interiors and enhance the elegance of your residential or commercial space. If you are looking for the best marble stone suppliers"
      />
      <FAQ
        question="How is marble formed in nature?"
        answer="Marble is formed from limestone that has been subjected to intense heat and pressure over millions of years. The heat and pressure cause the limestone to recrystallize, forming the characteristic veining and patterns found in marble."
      />
      <FAQ
        question="What type of rock is granite?"
        answer="Granite is an igneous rock made up primarily of two minerals: feldspar and quartz. Available in a plethora of designs and colour variants, granite can effortlessly make your space appear like the state-of-the-art masterpiece it is destined to be."
      />
      <FAQ
        question="How to check the quality of marble?"
        answer="To check the quality of marble, you can look for signs of uniformity, consistency, and durability. A high-quality marble will have a consistent color and pattern, without any visible cracks or flaws. It should also be able to withstand pressure and wear over time."
      />
      <FAQ
        question="Where to use imported marble?"
        answer="Marble has been principally used for the construction of buildings and monuments, kitchen countertops, and the flooring of commercial and residential spaces."
      />
    </div>
  );
}

export default FAQs;
