import React from 'react'

export default {
  pageTitle: 'Services offered by Estudio Maguitman & ASOC',
  contactService: 'Contact this service',
  viewService: 'View service',
  whatsappMessage:
    'Hello! I would like to know more about the {{title}} service',

  items: [
    {
      id: 1,
      number: '1.',
      title: 'Tax advisory and consulting',
      intro:
        'The Argentine tax system has become a complex set of regulations that require study and interpretation.',
      description: () => (
        <>
          <p className='mb-4'>
            Many of the daily decisions companies make have tax consequences
            which, due to their impact on costs, must be analyzed in a timely
            manner. At Estudio Maguitman y Asociados SRL we permanently assist
            our clients in the development of their activities, collaborating
            with them for the correct application of tax regulations and tax
            burden planning.
          </p>
          <p className='font-medium mb-2'>
            To this end, we provide the following services:
          </p>
          <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
            <li>
              Tax planning: analysis of the tax aspects of different investment
              and/or business expansion alternatives.
            </li>
            <li>
              Tax consulting: advice for decision-making, based on knowledge of
              the correct incidence of national, provincial and municipal taxes.
            </li>
            <li>Periodic sending of tax news updates.</li>
            <li>Tax audits.</li>
            <li>Fiscal year tax projections.</li>
            <li>
              Professional reporting on inspections carried out by tax
              authorities.
            </li>
            <li>
              Tax Outsourcing: we offer the possibility of outsourcing the
              preparation of national, provincial and municipal tax returns.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      number: '2.',
      title: 'Tax Litigation',
      intro: 'We provide defense against tax claims.',
      description: () => (
        <>
          <p className='mb-4'>
            Through joint work with tax attorneys on our team, we assist in:
          </p>
          <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
            <li>Defense against tax inspections and requirements.</li>
            <li>Handling comprehensive inspections.</li>
            <li>Responding to notices and requirements.</li>
            <li>Administrative and judicial appeals.</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      number: '3.',
      title: 'International Operations',
      intro: 'Our services include:',
      description: () => (
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>
            Analysis of the application of agreements to avoid international
            double taxation.
          </li>
          <li>Transfer Pricing.</li>
          <li>Capital repatriation regime.</li>
          <li>Advisory on import and export of services.</li>
        </ul>
      ),
    },
    {
      id: 4,
      number: '4.',
      title: 'Financial statement auditing',
      intro:
        "We analyze the company's financial statements in accordance with current auditing standards.",
      description: () => (
        <>
          <p className='mb-4'>
            We analyze the company's financial statements in accordance with
            current auditing standards, concluding with the issuance of an
            opinion or report on their reasonableness. To this end, we develop
            the necessary tasks and control tests, considering the evaluation of
            professional accounting standards.
          </p>
          <p className='font-medium mb-2'>Our services include:</p>
          <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
            <li>Annual and interim Financial Statement audits.</li>
            <li>Accounting certifications.</li>
            <li>Operational and management audits.</li>
            <li>Share package acquisition audits (Due Diligence).</li>
            <li>
              Evaluation of internal control systems and administrative
              circuits.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      number: '5.',
      title: 'Administrative-accounting outsourcing',
      intro:
        'We address the needs that arise mainly in small and medium-sized companies when they require outsourcing of accounting tasks.',
      description: () => (
        <p>
          We address the needs that arise mainly in small and medium-sized
          companies when they require outsourcing of accounting tasks, in order
          to ensure the issuance of adequate accounting and management
          information for the development of their businesses.
        </p>
      ),
    },
    {
      id: 6,
      number: '6.',
      title: 'Corporate advisory',
      intro:
        'We provide, among others, the following services together with our legal team:',
      description: () => (
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>Incorporation of companies, branches and civil associations.</li>
          <li>Bylaw amendments, capital increases and reductions.</li>
          <li>
            Transformation, merger, spin-off and dissolution of companies.
          </li>
          <li>Board registration and oversight of corporations.</li>
          <li>Endorsement of corporate and accounting books.</li>
        </ul>
      ),
    },
    {
      id: 7,
      number: '7.',
      title: 'Payroll',
      intro: 'View Services:',
      description: () => (
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>Salary and wage processing.</li>
          <li>Social security and union contribution processing.</li>
          <li>Special Salary and Wage Book.</li>
          <li>
            Handling inspections and requirements from labor and social security
            agencies.
          </li>
        </ul>
      ),
    },
  ],
}
