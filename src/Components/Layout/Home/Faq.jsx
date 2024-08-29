import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'Are there any scholarship opportunities for Bangladeshi students?',
    answer: 'Bangladeshi students have the opportunities to study with the help of scholarships, grants and loans which is provided by the authority to continue a smooth burden free education.',
  },
  {
    id: 2,
    question: 'Is there any affordable university to study from Bangladesh?',
    answer: 'There are many universities which are quite affordable for studying in abroad.',
  },
  {
    id: 3,
    question: 'Can I apply for Permanent Residency after completing my studies?',
    answer: 'After completing studies, Bangladeshi students can apply for Permanent Residency. But they must have a valid Residence Permit, a job offer, and meet distinguished financial requirements.',
  },
  {
    id: 4,
    question: 'Can I work while study in overseas?',
    answer: 'Bangladeshi students are allowed to work a maximum of 20 hours.',
  },
  {
    id: 5,
    question: 'Can I apply with my spouse?',
    answer: 'Students can apply with their spouse by following certain rules and regulations and they must meet certain requirements and provide legal documents. ',
  },
  {
    id: 6,
    question: 'What are the language requirements?',
    answer: 'Bangladeshi students aiming to study abroad must secure a certain level of proficiency in the respective country language or other proficiency test such as: IELTS, TOFEL, Duolingo, PTE.',
  },
  {
    id: 7,
    question: 'Is study gap allows for Bangladeshi students?',
    answer: 'Many Universities accept students from Bangladesh in spite of having study gaps.',
  },
  {
    id: 8,
    question: 'Who will be allowed to sponsor my studies?',
    answer: 'The students can provide for themselves or their legal guardians and other relatives who can provide financial support during the study period. ',
  },
  {
    id: 9,
    question: 'How much time does it take to get an offer letter?',
    answer: 'Usually it takes not more than three weeks to get an offer letter.',
  },
  {
    id: 10,
    question: 'Can I apply without IELTS?',
    answer: 'It is possible to apply without IELTS in overseas with a Medium of Instructions (MOI).',
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-[#F2F4FF] max-h-auto">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h1 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-xl font-medium text-slate-700/70">Questions related New Era Consultancy</p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqData?.map(({ id, question, answer }) => (
              <div key={id} className="border-b border-[#0A071B]/10">
                <button
                  onClick={() => toggle(id)}
                  aria-expanded={expanded === id}
                  className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-xl font-bold text-slate-800 focus:outline-none p-5"
                >
                  <span>{question}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transition-transform duration-200 ${
                      expanded === id ? 'rotate-180' : ''
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                <div
                  className={`answer overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded === id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  id={`answer-${id}`}
                >
                  <div className="pt-2 pb-5 px-5 text-sm lg:text-lg text-[#343E3A] font-medium">
                    {answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
