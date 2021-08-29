import React from 'react'
import './App.css'

export default function Content() {
    return (
        <main>

            <header>
                <h1>Essential Codes</h1>
                <p>Web Development Agency</p>
            </header>


            <blockquote>
                <p>'We put the pieces together for you and your business' -</p>
            </blockquote>


            <section>
                <h2>Services</h2>
                <p>
                    Our web developers provide expert web application development and web design services to our clients.
                    Essential Codes offers a variety of website design and development services, from creating mobile web
                    development
                    solutions and responsive website designs, to building custom e-commerce and intranet experiences using the
                    latest
                    and proven web technologies. With up to 85% of consumers visiting company’s or service provider’s website before
                    making
                    a purchase, more and more consumers make decisions based on their online experience: the appearance,
                    usability and accessibility of your website is more important than ever, especially in an increasingly
                    competitive market.
                </p>
            </section>

            <section className="left">
                <h2>Our Process</h2>
                <p>
                    Have you ever wondered what work goes into creating a website? What web designers do to ensure websites achieve
                    their objectives? And how to check all angles are covered with a robust website design process?

                    It might be that you’re taking the first steps in a web project and are feeling overwhelmed. Or, that you’re a
                    seasoned
                    marketeer struggling to keep ahead of new tech. Here we’ll show you how following a vigorous website design
                    process is
                    crucial to the successful completion of every project we do. And key to keeping our clients happy!

                    We’ve honed and adapted the way we work, so here we outline our web design process from the
                    initial meeting
                    through to launch, as well as explain some technical terms.
                </p>
            </section>

            <section className="light">
                <h2>Results Oriented</h2>
                <p>
                    Our experience
                    in performance-based digital marketing allows us to create beautiful websites that drive real, measurable
                    results.

                    Our holistic approach to website development is informed by our expertise in all things digital marketing, from
                    content
                    marketing to search engine optimization (SEO) to paid media. We incorporate the insights we gain from these
                    other digital
                    marketing strategies to build websites that function across all platforms and help your business achieve its
                    goals, whether
                    those goals are brand awareness, lead generation or increased conversions.
                </p>
            </section>

            <blockquote>
                <p>'We put everything into our work; clean, concise code that works!'<br></br>
                    <p className="name">-Michael Mensinger <i>EC Developer</i></p>
                </p>
            </blockquote>

            <section className="left">
                <h2>About</h2>
                <p>
                    Essential Codes is a professional web development service provider.
                    We have a hand-picked team of extremely talented developers. We specialize in Web app development
                    and mainly work with React, Node.js, MongoDB and Express.
                </p>
            </section>

            <section className="light">
                <h2>Contact</h2>
                <p>Email: EssentialCodes@ecodes.com</p>
            </section>

            <footer>
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
            </footer>


        </main>
    )
}
