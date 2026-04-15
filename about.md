---
layout: page
title: About
permalink: /about/
---

<style>
.about-section {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin: 2.5rem 0;
}

.about-section:nth-of-type(even) {
  flex-direction: row-reverse;
}

.about-photo {
  flex: 0 0 33%;
}

.about-photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center;
  border-radius: 8px !important;
  display: block;
}

.about-text h1 {
  font-family: 'Albert Sans', system-ui, sans-serif;
  font-size: 2rem;
  color: #414141;
  margin-top: 0;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .about-section,
  .about-section:nth-of-type(even) {
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
  }
  .about-photo img {
    width: 100%;
  }
  .about-text { text-align: left; }
}
</style>

<div class="about-section">
  <div class="about-photo">
    <img src="/sanctuary.jpg" alt="Hakomi House">
  </div>
  <div class="about-text">
    <h1>About Hakomi House</h1>
    <p>Hakomi House of Ashland, Oregon, was co-created in 2002 by Ron Kurtz and Marina McDonald as a space where Ron could focus and experiment with small groups to refine and simplify his Hakomi method. In 2010, shortly before Ron died in January 2011, Marina and he co-created the Ron Kurtz Center to continue his vision of Refined Hakomi.</p>
    <p>Refined Hakomi is unrivaled as a pure, practical, powerful practice that reaches to the very depths of the subconscious soul facilitating a lasting and life-changing transformational experience. There is a wholeness to Refined Hakomi that defies definition synthesizing scientific, psychotherapeutic and spiritual experiences.</p>
    <p>Our trainings meet each participant as they are. Marina speaks with each person to weave their individual needs and goals into the comprehensive training.</p>
    <p>Our training offers an authentic, in-person experience of the Refined Hakomi method that is true to the Hakomi principles, including loving presence, mindfulness, non-violence, nourishing communication, somatic trauma resolution, and mindfulness-based, body-centered assisted self-discovery.</p>
    <p>In addition to the 3-day monthly training sessions, Hakomi House offers experiential learning opportunities with time devoted to individual therapy sessions, weekly practice groups, and loving presence sessions.</p>
  </div>
</div>

<div class="about-section">
  <div class="about-photo">
    <img src="/marinamcdonald.jpg" alt="Marina McDonald - Founder of Hakomi House">
  </div>
  <div class="about-text">
    <h1>About Marina McDonald</h1>
    <p>After meeting Ron Kurtz in 1997 Marina was blessed to know him as a friend, teacher, mentor and business partner and to train directly with him until his death in 2011.</p>
    <p>As a certified Hakomi therapist, teacher, and trainer, Marina views her role in the current intensive as that of a midwife who supports rebirthing and reawakening our capacity to give and receive love.</p>
    <p>Marina holds all participants as equally precious, sees each one as having their own unique needs and goals, meets every student where they are, and supports them in an ongoing process of assisted self-discovery, spontaneous healing, and expanding their capacity for relationship.</p>
  </div>
</div>
