import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8">The Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/AnitaOwen">
            <img className="w-20 h-20 mx-auto" src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png" alt="Armando Pires GitHub" />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">Anita Owen</h2>
          <p className="text-center mt-2">Fun fact</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/ChrisCodeTrials">
            <img className="w-20 h-20 mx-auto" src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png" alt="Carlitos Dutan GitHub" />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">Christopher Miranda</h2>
          <p className="text-center mt-2">Fun fact</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/haiyahperez">
            <img className="w-20 h-20 mx-auto" src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png" alt="Haiyah Perez GitHub" />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">Haiyah Perez</h2>
          <p className="text-center mt-2">Fun fact</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/JenniferPeterson1203">
            <img className="w-20 h-20 mx-auto" src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png" alt="Isiah Aruffat GitHub" />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">Jennifer Peterson</h2>
          <p className="text-center mt-2">Fun Fact</p>
        </div>
      </div>
    </div>
  );
}
