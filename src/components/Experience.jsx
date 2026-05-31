import React from 'react';
import useReveal from '../useReveal.js';

const JOBS = [
  {
    role:'Senior iOS Developer',
    company:'Droisys India Pvt Ltd',
    period:'May 2024 – Feb 2026',
    current:true,
    points:[
      'Owned the complete iOS development lifecycle — from requirements analysis and architecture design through feature delivery, QA collaboration, and App Store release management.',
      'Architected and delivered reusable component libraries and modular feature packages that accelerated development velocity across concurrent product lines.',
      'Diagnosed and resolved critical production issues — including memory leaks, UI thread freezes, and crash-level defects — using Xcode Instruments and systematic profiling methodologies.',
      'Designed and maintained CI/CD pipelines that automated build, test, and deployment workflows, significantly reducing manual release overhead and human error.',
      'Established and enforced MVVM + clean architecture standards across the engineering team through structured code reviews, technical documentation, and mentorship sessions.',
      'Mentored junior developers through targeted feedback, pair programming, and knowledge-sharing — measurably improving overall team code quality and engineering standards.',
      'Served as the technical liaison between Engineering, Product, and Design — translating product requirements into precise, shippable iOS features delivered consistently on schedule.',
    ],
  },
  {
    role:'Senior iOS Developer',
    company:'Hidden Brains InfoTech',
    period:'Oct 2022 – Feb 2024',
    points:[
      'Diagnosed and eliminated critical performance bottlenecks — reducing app launch times and resolving memory pressure issues across multiple high-traffic production applications.',
      'Engineered a shared library of reusable UI components and utility modules, establishing consistent design patterns and eliminating redundant code across the team.',
      'Introduced automated build and deployment pipelines that standardized the release process, enforced quality gates, and reduced human error in production deployments.',
      'Drove architectural planning discussions and championed adoption of MVVM and SOLID principles as foundational engineering standards across all active projects.',
      'Conducted systematic code reviews, enforcing iOS best practices and maintaining an exceptionally high standard for code quality and long-term maintainability.',
      'Collaborated directly with Design to implement pixel-accurate, Apple HIG-compliant UI components that elevated the user experience across multiple iOS applications.',
    ],
  },
  {
    role:'Junior iOS Developer',
    company:'Xongolab Technologies LLP',
    period:'Mar 2022 – Sep 2022',
    points:[
      'Built and maintained iOS application features across the full codebase, ensuring smooth performance and consistent responsiveness across all supported device targets.',
      'Integrated third-party SDKs and RESTful APIs with robust handling of authentication flows, error states, and backward compatibility with existing application systems.',
      'Diagnosed and resolved UI and business logic defects through systematic testing and debugging, contributing to measurably improved application stability and crash-free rates.',
    ],
  },
  {
    role:'Junior iOS Developer',
    company:'ZerOnes',
    period:'Mar 2019 – Jun 2020',
    points:[
      'Contributed to iOS application development under senior guidance, establishing foundational expertise in Swift, UIKit, and mobile application architecture.',
      'Supported debugging and issue resolution workflows, improving application stability and contributing to a reduction in reported crash incidents.',
      'Assisted in integrating third-party tools and frameworks, ensuring seamless end-to-end application functionality across all integration points.',
    ],
  },
];

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref} style={{ background:'var(--bg2)' }}>
      <div className="wrap">
        <span className="eye r d1">Experience</span>
        <h2 className="h1 r d2" style={{ marginBottom:'20px' }}>
          A proven track record of<br/>
          <span className="blue">shipping iOS at scale.</span>
        </h2>
        <p className="r d3" style={{ fontSize:'16px', color:'var(--t2)', lineHeight:1.8, maxWidth:'540px', marginBottom:'56px' }}>
          Across four organizations and numerous App Store releases, I have built and maintained production-grade iOS applications, focusing on performance, scalability, code quality, and user experience.
        </p>

        <div style={{ position:'relative', paddingLeft:'36px' }}>
          <div style={{
            position:'absolute', left:'7px', top:'10px', bottom:'10px', width:'2px',
            background:'linear-gradient(to bottom, var(--blue) 0%, rgba(30,144,255,0.06) 100%)',
            borderRadius:'2px',
          }}/>

          {JOBS.map((j, i) => (
            <div key={i} className="r" style={{ transitionDelay:`${i*0.09+0.1}s`, marginBottom: i<JOBS.length-1 ? '20px' : 0, position:'relative' }}>
              <div style={{
                position:'absolute', left:'-30px', top:'26px',
                width:j.current?16:12, height:j.current?16:12, borderRadius:'50%',
                background: j.current ? 'var(--blue)' : 'var(--bg3)',
                border:`2px solid ${j.current ? 'var(--blue)' : 'rgba(255,255,255,0.13)'}`,
                boxShadow: j.current ? '0 0 16px rgba(30,144,255,0.6)' : 'none',
              }}/>

              <div className="card" style={{ padding:'24px 28px' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(30,144,255,0.2)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'12px', marginBottom:'16px', flexWrap:'wrap' }}>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:'9px', marginBottom:'4px', flexWrap:'wrap' }}>
                      <h3 style={{ fontSize:'16px', fontWeight:700, color:'var(--t1)' }}>{j.role}</h3>
                      {j.current && (
                        <span style={{ fontSize:'10px', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase',
                          padding:'3px 9px', borderRadius:'100px',
                          background:'rgba(30,144,255,0.11)', color:'var(--blue)', border:'1px solid rgba(30,144,255,0.24)' }}>
                          Most Recent
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize:'13px', color:'var(--blue)', fontWeight:500 }}>{j.company}</p>
                  </div>
                  <span style={{ fontSize:'12px', color:'var(--t3)', flexShrink:0 }}>{j.period}</span>
                </div>

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                  {j.points.map((pt,k)=>(
                    <li key={k} style={{ display:'flex', gap:'11px', alignItems:'flex-start' }}>
                      <span style={{ width:4, height:4, borderRadius:'50%', background:'var(--blue)', marginTop:'9px', flexShrink:0, opacity:.55 }}/>
                      <span style={{ fontSize:'13px', color:'var(--t2)', lineHeight:1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
