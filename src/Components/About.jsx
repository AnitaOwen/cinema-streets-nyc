import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center p-4 pt-40">
      <h1 className="text-4xl font-bold mb-16">The Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/AnitaOwen">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Anita Owen GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">Anita Owen</h2>
          <p className="text-center mt-2">
            "I have been a drum and bass DJ for 18 years"
          </p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/ChrisCodeTrials">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Christopher Miranda GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">
            Christopher Miranda
          </h2>
          <p className="text-center mt-2">"I guess I like to cook"</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/haiyahperez">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Haiyah Perez GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">
            Haiyah Perez
          </h2>
          <p className="text-center mt-2">"My favorite color is Pink</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-white rounded-lg">
          <a href="https://github.com/JenniferPeterson1203">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Jennifer PetersonGitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center">
            Jennifer Peterson
          </h2>
          <p className="text-center mt-2">
            "I learned how to swim 5 years ago"
          </p>
        </div>
      </div>
    </div>
  );
}
