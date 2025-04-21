import React from 'react';

const YouTubeMock = () => {
  const videoLinks = [
    { title: "Injustice", id: "YbJOTdZBX1g" },
    { title: "SuperMan", id: "IUN664s7N-c" },
    { title: "Batman", id: "EXeTwQWrcwY" },
    { title: "Flash", id: "Y4x4r0xGvk8" }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
    
      <header style={{ backgroundColor: "#f1f1f1", padding: "10px", display: "flex", alignItems: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          style={{ width: "120px", marginRight: "20px" }}
        />
        <input
          type="text"
          placeholder="Search"
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
      </header>

      <div style={{ display: "flex" }}>
        <aside style={{ width: "200px", backgroundColor: "#333", color: "#fff", height: "100vh", paddingTop: "20px" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Home", "Shorts", "Subscriptions", "History"].map((item, index) => (
              <li key={index} style={{ padding: "10px", textAlign: "center", cursor: "pointer" }}>{item}</li>
            ))}
          </ul>
        </aside>

        <main style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
          <h2>Video Titles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {videoLinks.map((video, index) => (
              <div key={index} style={{ backgroundColor: "#fff", padding: "10px" }}>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default YouTubeMock;
