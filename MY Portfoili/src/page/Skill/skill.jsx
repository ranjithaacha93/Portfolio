import './skill.css';
import React, { useEffect, useRef, useState } from 'react';

// icons
import { FaSkyatlas, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";


const targets = [
    { name: "HTML", icon: <FaHtml5 className='html' />, percent: 95 },
    { name: "CSS", icon: <FaCss3Alt className='css' />, percent: 90 },
    { name: "Bootstrap", icon: <FaBootstrap className='boot' />, percent: 80 },
    { name: "JavaScript", icon: <RiJavascriptFill className='js' />, percent: 75 },
    { name: "React.js", icon: <RiReactjsFill className='react' />, percent: 85 },
    { name: "Github", icon: <FaGithub className='git' />, percent: 81 },
    { name: "Git", icon: <FaGitAlt className='git' />, percent: 78 }, // 🔥 added className
];

export default function Skill() {
    const [counts, setCounts] = useState(targets.map(() => 0));
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        startCounting(index, targets[index].percent);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: [0, 0.2, 0.5, 1] }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const startCounting = (index, targetPercent) => {
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = current;
                return newCounts;
            });

            if (current >= targetPercent) clearInterval(interval);
        }, 20);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const ski = entry.target;
                    const circle = ski.querySelector('.circle');
                    const numberDiv = circle.querySelector('.number');
                    const target = parseInt(numberDiv.innerText);

                    let current = 0;
                    const interval = setInterval(() => {
                        current++;
                        numberDiv.innerText = current + '%';
                        circle.style.setProperty('--percent', current);

                        if (current >= target) {
                            clearInterval(interval);
                        }
                    }, 20);

                    observer.unobserve(ski);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.ski').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="skill">
            <button className='skilbtn'>
                <span><FaSkyatlas /></span> What can I do ?
            </button>
            <div className="skil-box">
                <div className="skil-box-left">
                    <h1 style={{ fontWeight: '900', marginBottom: '20px' }}>Technical Skills</h1>
                    {targets.map((skill, index) => (
                        <div
                            className='skil-card'
                            key={index}
                            ref={(el) => refs.current[index] = el}
                            data-index={index}
                        >
                            <h4><span>{skill.icon}</span> {skill.name}</h4>
                            <p>{counts[index]}%</p>
                            <div style={{width: `${counts[index]}%`}}></div>
                        </div>
                    ))}
                </div>
                <div className="skil-box-right">
                    <h1 style={{ fontWeight: '900', marginBottom: '20px' }}> Soft Skills </h1>
                    <div className="ski">
                        <h2>Responsive Design</h2>
                        <div className="circle" style={{ '--percent': 0 }}>
                            <div className="number">95%</div>
                        </div>
                    </div>

                    <div className="ski">
                        <h2>Problem Solving</h2>
                        <div className="circle" style={{ '--percent': 0 }}>
                            <div className="number">80%</div>
                        </div>
                    </div>

                    <div className="ski">
                        <h2>Teamwork</h2>
                        <div className="circle" style={{ '--percent': 0 }}>
                            <div className="number">90%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
