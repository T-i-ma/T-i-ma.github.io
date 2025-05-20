  window.onload = function () {
  function scrollToGameArea() {
    document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
  }

  // Event listener for the "Play My JavaScript Game" button
  document.getElementById("js-btn").addEventListener("click", function () {
    document.getElementById("game-area").innerHTML = `
      <h2>JavaScript Game</h2>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                src="https://arcade.makecode.com/---run?id=_0LJPPLRpHP88" 
                allowfullscreen="allowfullscreen" 
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin" 
                frameborder="0"></iframe>
      </div>
    `;
    scrollToGameArea();
  });

  // Event listener for the "Play My Python Game" button
  document.getElementById("python-btn").addEventListener("click", function () {
    // Insert the Python game iframe into the game-area div
    document.getElementById("game-area").innerHTML = `
      <h2>Python Game</h2>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                src="https://arcade.makecode.com/---run?id=S35187-34963-06353-94511" 
                allowfullscreen="allowfullscreen" 
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin" 
                frameborder="0"></iframe>
      </div>
    `;
    scrollToGameArea();
  });

  // Event listener for the "About Me" button (optional)
    document.getElementById("abtme-btn").addEventListener("click", function () {
      document.getElementById("game-area").innerHTML = `
        <h2>About Me</h2>
        <p>Hi! My full name is Timofei Dovgilovich Leonidovich. I am from Russia and moved to Texas two years ago. I'm not quite into sports but I really loved tennis since I was probably 8. I love listening to music. Some of my favorite artists are Lana Del Rey, Lady gaga, Charli XCX, Arca, Björk, Lorde and Tate McRae. In my free time I like reading books, playing videogames or baking. Among these baking has a special place in my heart - I absolutely love it (so far my favorite recipies are lemon meringue pie and tres leches cake) 
          Some fun facts about me: I always write in cursive since my 1st grade because in most of slavic countries you HAVE to write in it, or either your work just willn't be graded;   I somehow managed to get in  one sided beef with a couple of my old classmates from Russia even though I never met them nor I talked to them...; Even in Russia some people had problem with pronouncing my last name to the point when I had to pronounce every letter separately</p>
      `;
      document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
    });

};
